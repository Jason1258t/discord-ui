import {Message} from "@models/message";
import {SliceCreator} from "@utils/storeSlice";
import {ChatStoreState} from "./chatStoreState";
import {RawAttachment} from "./attachmentsSlice";
import {Attachment} from "@models/attachment";
import generateTimeBasedId from "@utils/randomId";
import {InputEditState, InputMode} from "./inputState";

export interface ApiSlice {
    deleteMessage: (id: number) => void;
    sendMessage: (msg: Message) => void;
    replyMessage: (id: number) => void;
    editMessage: () => void;
    createMessage: () => Message | undefined;
}

export const createApiSlice: SliceCreator<ApiSlice, ChatStoreState> = (set, get) => {
    function rawToTempAttachment(a: RawAttachment): Attachment {
        return {
            src: a.tempSrc,
            id: generateTimeBasedId()
        }
    }

    return {
        createMessage: () => {
            const {channel, authorData, inputState, attachments} = get();
            if (!channel || !authorData) return;
            if (attachments.length === 0 && !inputState.text.trim()) return;

            const lastId = get().messages.reduce(
                (max, msg) => Math.max(max, msg.id),
                0
            );

            const newMessage: Message = {
                owned: true,
                id: lastId + 1,
                text: inputState.text.trim(),
                channel,
                author: authorData,
                createdAt: new Date(),
                attachments: attachments.map(attachment => rawToTempAttachment(attachment)),
            };

            return newMessage;
        },
        deleteMessage: (id) =>
            set((state) => ({
                messages: state.messages.filter((msg) => msg.id !== id),
            })),
        sendMessage: (msg) => {
            set((state) => ({
                messages: [...state.messages, msg],
            }));
        },
        replyMessage: (id) => {
            const {inputState, attachments} = get();
            if (inputState.mode !== InputMode.Reply || (!inputState.text.trim() && attachments.length === 0)) return;
            const msg = get().createMessage();
            if (msg) {
                msg.replyTo = get().messages.find((e) => e.id === id)!;
                get().sendMessage(msg);
            }
        },
        editMessage: () => {
            const {inputState, messages} = get();

            if (inputState.mode !== InputMode.Edit || !inputState.text.trim()) return;

            const editState = inputState as InputEditState;

            set({
                messages: messages.map((msg) =>
                    msg.id === editState.messageId
                        ? {...msg, text: inputState.text, createdAt: new Date()}
                        : msg
                ),
            });
        }
    }
}