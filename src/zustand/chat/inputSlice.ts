import {InputMode, InputState} from "./inputState";
import {ChatStoreState} from "./chatStoreState";
import {SliceCreator} from "@utils/storeSlice";

export interface InputSlice {
    setEditMessage: (id: number) => void;
    editLastMessage: () => void;
    cancelEdit: () => void;

    setReplyMessage: (id: number) => void;
    replyLastMessage: () => void;
    cancelReply: () => void;

    onTextChanged: (text: string) => void;
    resetInput: () => void;
    inputState: InputState;
    onConfirm: () => void;
}

export const createInputSlice: SliceCreator<InputSlice, ChatStoreState> = (set, get) => {
    return {
        inputState: {
            text: "",
            mode: InputMode.Base,
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
                    const msg = get().createMessage();
                    if (msg) get().sendMessage(msg);
                    break;
                }
                case InputMode.Edit: {
                    get().editMessage();
                    break;
                }
                case InputMode.Reply: {
                    get().replyMessage(inputState.messageId);
                    break;
                }
            }
            get().resetInput();
            get().clearAttachments();
        }
    }
}
