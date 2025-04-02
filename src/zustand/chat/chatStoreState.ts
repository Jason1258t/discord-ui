import { Channel } from "@models/channel/channel";
import { Message } from "@models/message";
import { User } from "@models/user";
import { InputState } from "./inputState";

export interface ChatStoreActions {
    setEditMesssage: (id: number) => void;
    setReplyMessage: (id: number) => void;
    cancelEdit: () => void;
    cancelReply: () => void;
    deleteMessage: (id: number) => void;
    onTextChanged: (text: string) => void;
    onConfirm: () => void;
    resetInput: () => void;
    setAuthorData: (author: User) => void;
    setChannelData: (channel: Channel) => void;
}

export interface ChatStoreState extends ChatStoreActions {
    messages: Message[];
    inputState: InputState;
    channel: Channel | null;
    authorData: User | null;
}
