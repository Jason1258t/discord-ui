import {User}  from './user';

export default interface Member extends User {
    guildId: number;
    nickname: string;
    joinedAt: Date;
}