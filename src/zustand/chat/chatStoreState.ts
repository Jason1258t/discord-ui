import { Channel } from "@models/channel/channel";
import { Message } from "@models/message";
import { User } from "@models/user";
import { InputState } from "./inputState";
import { DMChannel } from "@models/channel/dm_channel";
import { AttachmentsSlice } from "./attachmentsSlice";

export interface ChatStoreActions {
    setAuthorData: (author: User) => void;
    setChannelData: (channel: Channel) => void;
    loadCurrentChatMessages: () => void;

    loadDms: () => void;

    setEditMessage: (id: number) => void;
    editLastMessage: () => void;
    cancelEdit: () => void;

    setReplyMessage: (id: number) => void;
    replyLastMessage: () => void;
    cancelReply: () => void;

    deleteMessage: (id: number) => void;

    onTextChanged: (text: string) => void;
    onConfirm: () => void;
    resetInput: () => void;
}

export interface ChatStoreState extends ChatStoreActions, AttachmentsSlice {
    messages: Message[];
    dms: DMChannel[]; // move out of here
    inputState: InputState;
    channel: Channel | null;
    authorData: User | null;
}
