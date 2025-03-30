import { Message } from "@models/message";

export interface MessagesCache {
    [key: number]: Message[];
}
