import {create} from "zustand";
import {ChatStoreState} from "./chatStoreState";
import {createAttachmentsSlice} from "./attachmentsSlice";
import {createChatDataSlice} from "./chatDataSlice";
import {createInputSlice} from "./inputSlice";
import {createDmsSlice} from "./dmsSlice";
import {createApiSlice} from "./apiSlice";

const useChatStore = create<ChatStoreState>((set, get, api) => {
    return {
        ...createAttachmentsSlice(set, get, api),
        ...createChatDataSlice(set, get, api),
        ...createInputSlice(set, get, api),
        ...createDmsSlice(set, get, api),
        ...createApiSlice(set, get, api),
    };
});

export default useChatStore;
