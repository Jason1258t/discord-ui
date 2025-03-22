import { User } from "./user";
import { Channel } from "./channel/channel";

export default interface Message {
    id: number;
    text: string;
    author: User;
    channel: Channel;
    created_at: Date;
}