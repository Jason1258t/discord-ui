import { Channel } from "./channel";
import { User } from "../user";
import { Message } from '../message';

export interface DMChannel extends Channel {
    user: User;
    lastMessage: Message | null;
}