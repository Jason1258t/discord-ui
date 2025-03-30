
export enum InputMode {
    Base = "base",
    Edit = "edit",
    Reply = "reply",
}

export interface InputBaseState {
    text: string;
    mode: InputMode.Base;
}

export interface InputEditState {
    text: string;
    mode: InputMode.Edit;
    messageId: number;
}

export interface InputReplyState {
    text: string;
    mode: InputMode.Reply;
    messageId: number;
}

export type InputState = InputBaseState | InputEditState | InputReplyState;