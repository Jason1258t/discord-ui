import { Message } from "@models/message";
import { create } from "zustand";
import { InputMode, InputEditState } from "./inputState";
import { ChatStoreState } from "./chatStoreState";
import { MessagesCache } from "./messagesCache";

const useChatStore = create<ChatStoreState>((set, get) => {
    const messagesCache: MessagesCache = {};

    const sendMessage = () => {
        const { channel, authorData, inputState } = get();
        if (!channel || !authorData || !inputState.text.trim()) return;

        const lastId = get().messages.reduce(
            (max, msg) => Math.max(max, msg.id),
            0
        );

        const newMessage: Message = {
            id: lastId + 1,
            text: inputState.text,
            channel,
            author: authorData,
            createdAt: new Date(),
        };

        set((state) => ({
            messages: [...state.messages, newMessage],
        }));
    };

    const editMessage = () => {
        const { inputState, messages } = get();

        if (inputState.mode !== InputMode.Edit) return;

        const editState = inputState as InputEditState;

        set({
            messages: messages.map((msg) =>
                msg.id === editState.messageId
                    ? { ...msg, text: inputState.text, createdAt: new Date() }
                    : msg
            ),
        });
    };

    const saveCurrentMessagesToCache = () => {
        const { channel, messages } = get();
        if (channel && messages.length > 0) {
            messagesCache[channel.id] = messages;
        }
    };

    const loadMessagesFromCache = (channelId: number): Message[] => {
        return messagesCache[channelId] ?? [];
    };

    return {
        messages: [],
        channel: null,
        authorData: null,
        inputState: {
            text: "",
            mode: InputMode.Base,
        },
        setAuthorData: (author) => set((state) => ({ authorData: author })),

        setChannelData: (channel) => {
            saveCurrentMessagesToCache();
            get().resetInput();
            set({
                channel,
                messages: loadMessagesFromCache(channel.id),
            });
        },

        setEditMesssage: (id) => {
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

            set((state) => ({
                inputState: {
                    text: state.inputState.text,
                    mode: InputMode.Reply,
                    messageId: id,
                },
            }));
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
            const { inputState } = get();
            if (!inputState.text.trim()) return;
            switch (inputState.mode) {
                case InputMode.Base: {
                    sendMessage();
                    break;
                }
                case InputMode.Edit: {
                    editMessage();
                    break;
                }
                case InputMode.Reply: {
                    console.log("reply message");
                    break;
                }
            }
            get().resetInput();
        },
    };
});

export default useChatStore;
