
enum InputMode {
    Base = "base",
    Edit = "edit",
    Reply = "reply",
}

interface InputBaseState {
    text: string;
    mode: InputMode.Base;
}

interface InputEditState {
    text: string;
    mode: InputMode.Edit;
    messageId: number;
}

interface InputReplyState {
    text: string;
    mode: InputMode.Reply;
    messageId: number;
}

type InputState = InputBaseState | InputEditState | InputReplyState;