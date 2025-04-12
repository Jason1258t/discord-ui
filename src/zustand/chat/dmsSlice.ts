import {DMChannel} from "@models/channel/dm_channel";
import {SliceCreator} from "@utils/storeSlice";
import {ChatStoreState} from "./chatStoreState";
import {TestModels} from "@models/models";

export interface DMsSlice {
    loadDms: () => void;
    dms: DMChannel[]; // move out of here
}

export const createDmsSlice: SliceCreator<DMsSlice, ChatStoreState> = (set, get) => {
    const testModels = new TestModels();
    return {
        loadDms: () => {
            // TODO: implement loading
        },
        dms: testModels.dms(8),
    }
}