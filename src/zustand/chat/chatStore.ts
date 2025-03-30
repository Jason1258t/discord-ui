import { Channel } from "@models/channel/channel";
import { Message } from "@models/message";
import { User } from "@models/user";
import { create } from "zustand";

interface ChatStoreState {
    messages: Message[];
    inputState: InputState;
    setEditMesssage: (id: number) => void;
    deleteMessage: (id: number) => void;
    onTextChanged: (text: string) => void;
    onConfirm: () => void;
    reset: () => void;
    channel: Channel | null;
    authorData: User | null;
    setAuthorData: (author: User) => void;
    setChannelData: (channel: Channel) => void;
}

const useChatStore = create<ChatStoreState>((set, get) => {
    const sendMessage = () => {
        set((state) => {
            if (
                !state.channel ||
                !state.authorData ||
                !state.inputState.text.trim()
            )
                return state;

            const lastId =
                state.messages.length > 0
                    ? state.messages[state.messages.length - 1].id
                    : 0;

            const newMessage: Message = {
                id: lastId + 1,
                text: state.inputState.text,
                channel: state.channel,
                author: state.authorData,
                createdAt: new Date(),
            };

            return {
                messages: [...state.messages, newMessage],
            };
        });
    };

    const editMessage = () => {
        set((state) => {
            return {
                messages: state.messages.map((e) => {
                    if (
                        e.id === (state.inputState as InputEditState).messageId
                    ) {
                        return {
                            ...e,
                            text: state.inputState.text,
                        };
                    } else {
                        return e;
                    }
                }),
            };
        });
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
        setChannelData: (channel) => set((state) => ({ channel: channel })),
        setEditMesssage: (id) => {},
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
        reset: () => {
            set((state) => ({
                inputState: {
                    text: "",
                    mode: InputMode.Base,
                },
            }));
        },

        onConfirm: () => {
            const { inputState } = get();
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
            get().reset();
        },
    };
});

export default useChatStore;
