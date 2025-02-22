import './user';

export interface Member extends User {
    guildId: number;
    nickname: string;
    joined_at: Date;
    // TODO add roles etc.
}