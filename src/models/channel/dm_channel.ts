import { Channel } from "./channel";
import { User } from "../user";
import { Message } from '../message'

interface DMChannel extends Channel {
    user: User;
    onClick: function,
}