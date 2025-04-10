import {InputState} from "./inputState";

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
}

