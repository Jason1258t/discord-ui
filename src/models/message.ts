import { User } from "./user";
import { Channel } from "./channel/channel";
import { Attachment } from "./attachment";

export interface Message {
    owned: boolean;
    id: number;
    text: string;
    author: User;
    channel: Channel;
    createdAt: Date;
    replyTo?: Message | undefined;
    attachments?: Attachment[] | undefined;
}
