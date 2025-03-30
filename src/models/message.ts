import { User } from "./user";
import { Channel } from "./channel/channel";

export interface Message {
    id: number;
    text: string;
    author: User;
    channel: Channel;
    createdAt: Date;
}
