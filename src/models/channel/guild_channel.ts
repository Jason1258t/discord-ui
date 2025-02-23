import { Channel } from "./channel";

interface GuildChannel extends Channel {
    guildId: number;
}