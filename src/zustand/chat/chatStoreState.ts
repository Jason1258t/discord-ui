import {Message} from "@models/message";
import {InputState} from "./inputState";
import {DMChannel} from "@models/channel/dm_channel";
import {AttachmentsSlice} from "./attachmentsSlice";
import {ChatDataSlice} from "./chatDataSlice";
import {InputSlice} from "./inputSlice";

export interface ChatStoreActions {
    loadCurrentChatMessages: () => void;
    loadDms: () => void;
    onConfirm: () => void;
    deleteMessage: (id: number) => void;
}

export interface ChatStoreState extends ChatStoreActions, AttachmentsSlice, ChatDataSlice, InputSlice {
    messages: Message[];
    dms: DMChannel[]; // move out of here
}
