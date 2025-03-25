import Member  from "./member"; 

export interface Guild {
    id: number;
    name: string;
    icon: string;
    description: string;
    created_at: Date;
    owner: Member;
}