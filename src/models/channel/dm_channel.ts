import { Channel } from "./channel";
import { User } from "../user";

export interface DMChannel extends Channel {
    user: User;
}