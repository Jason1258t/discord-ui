import { Message } from "./message";

export interface MessageGroup {
    messages: Message[];
    id: number;
    showDate: boolean;
}
