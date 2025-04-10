import {Message} from "@models/message";
import {create} from "zustand";
import {InputMode, InputEditState} from "./inputState";
import {ChatStoreState} from "./chatStoreState";
import {TestModels} from "models/models";
import {createAttachmentsSlice, RawAttachment} from "./attachmentsSlice";
import {createChatDataSlice} from "./chatDataSlice";
import {Attachment} from "@models/attachment";

const useChatStore = create<ChatStoreState>((set, get, api) => {
    function generateId(): number {
        return Math.random();
    }

    function rawToTestAttachment(a: RawAttachment): Attachment {
        return {
            src: a.tempSrc,
            id: generateId()
        }
    }

    const createNewMessage = () => {
        const {channel, authorData, inputState, attachments} = get();
        if (!channel || !authorData) return;
        console.log(attachments, inputState, attachments.length === 0 && !inputState.text.trim());
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
            attachments: attachments.map(attachment => rawToTestAttachment(attachment)),
        };

        return newMessage;
    };

    const sendMessage = (msg: Message) => {
        set((state) => ({
            messages: [...state.messages, msg],
        }));
    };

    const replyMessage = (msgId: number) => {
        const {inputState, attachments} = get();
        if (inputState.mode !== InputMode.Reply || (!inputState.text.trim() && attachments.length === 0)) return;
        const msg = createNewMessage();
        if (msg) {
            msg.replyTo = get().messages.find((e) => e.id === msgId)!;
            sendMessage(msg);
        }
    };

    const editMessage = () => {
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
    };

    const testModels = new TestModels();

    return {
        ...createAttachmentsSlice(set, get, api),
        ...createChatDataSlice(set, get, api),
        messages: [],
        dms: testModels.dms(8), // TODO: temporary
        inputState: {
            text: "",
            mode: InputMode.Base,
        },
        loadDms: () => {
            // TODO: implement loading
        },
        loadCurrentChatMessages: () => {
            const channel = get().channel;
            if (!channel) return;
            // TODO: implement remote loading
        },
        replyLastMessage: () => {
            get().setReplyMessage(get().messages[get().messages.length - 1].id);
        },
        editLastMessage: () => {
            const {
                messages,
                setEditMessage,
                authorData,
            } = get();
            const message = [...messages]
                .reverse()
                .find((e) => e.author.id === authorData?.id);
            if (message) {
                setEditMessage(message.id);
            }
        },

        setEditMessage: (id) => {
            const message = get().messages.find((m) => m.id === id);
            if (!message) return;

            set({
                inputState: {
                    text: message.text,
                    mode: InputMode.Edit,
                    messageId: id,
                },
            });
        },

        setReplyMessage: (id) => {
            const message = get().messages.find((m) => m.id === id);
            if (!message) return;
            console.log(get().inputState);
            set((state) => ({
                inputState: {
                    text: state.inputState.text,
                    mode: InputMode.Reply,
                    messageId: id,
                },
            }));
            console.log(get().inputState);
        },

        cancelEdit: () => get().resetInput(),
        cancelReply: () => {
            set((state) => ({
                inputState: {
                    mode: InputMode.Base,
                    text: state.inputState.text,
                },
            }));
        },
        deleteMessage: (id) =>
            set((state) => ({
                messages: state.messages.filter((msg) => msg.id !== id),
            })),
        onTextChanged: (text) => {
            set((state) => ({
                inputState: {
                    ...state.inputState,
                    text: text,
                },
            }));
        },
        resetInput: () => {
            set({
                inputState: {
                    text: "",
                    mode: InputMode.Base,
                },
            });
        },

        onConfirm: () => {
            const {inputState} = get();
            switch (inputState.mode) {
                case InputMode.Base: {
                    const msg = createNewMessage();
                    if (msg) sendMessage(msg);
                    break;
                }
                case InputMode.Edit: {
                    editMessage();
                    break;
                }
                case InputMode.Reply: {
                    replyMessage(inputState.messageId);
                    break;
                }
            }
            get().resetInput();
            get().clearAttachments();
        },
    };
});

export default useChatStore;
