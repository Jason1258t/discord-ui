import {AttachmentsSlice} from "./attachmentsSlice";
import {ChatDataSlice} from "./chatDataSlice";
import {InputSlice} from "./inputSlice";
import {DMsSlice} from "./dmsSlice";
import {ApiSlice} from "./apiSlice";

export interface ChatStoreActions {
    deleteMessage: (id: number) => void;
    onConfirm: () => void;
}


export type ChatStoreState = ChatStoreActions & AttachmentsSlice &
    ChatDataSlice & InputSlice & DMsSlice & ApiSlice;
