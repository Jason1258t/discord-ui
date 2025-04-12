import {User} from "@models/user";
import {Channel} from "@models/channel/channel";
import {SliceCreator} from "@utils/storeSlice";
import {ChatStoreState} from "./chatStoreState";
import {Message} from "@models/message";
import {MessagesCache} from "./messagesCache";

export interface ChatDataSlice {
    setAuthorData: (author: User) => void;
    setChannelData: (channel: Channel) => void;
    loadCurrentChatMessages: () => void;
    channel: Channel | null;
    authorData: User | null;
    messages: Message[];
}

export const createChatDataSlice: SliceCreator<
    ChatDataSlice,
    ChatStoreState
> = (set, get) => {
    const messagesCache: MessagesCache = {};
    const saveCurrentMessagesToCache = () => {
        const {channel, messages} = get();
        if (channel && messages.length > 0) {
            messagesCache[channel.id] = messages;
        }
    };

    const loadMessagesFromCache = (channelId: number): Message[] => {
        return messagesCache[channelId] ?? [];
    };

    return {
        messages: [],
        channel: null,
        authorData: null,
        loadCurrentChatMessages: () => {
            const channel = get().channel;
            if (!channel) return;
            // TODO: implement remote loading
        },
        setAuthorData: (author) => set({authorData: author}),
        setChannelData: (channel) => {
            saveCurrentMessagesToCache();
            get().resetInput();
            set({
                channel,
                messages: loadMessagesFromCache(channel.id),
            });
        },
    }
};
