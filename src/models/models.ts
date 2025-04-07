import { User } from "./user";
import { Guild } from "./guild";
import { Message } from "./message";
import { DMChannel as DM } from "./channel/dm_channel";
import { Attachment } from "./attachment";

class TestModels {
    private _user: User;
    private _guild: Guild;
    private _message: Message;
    private _dm: DM;
    private _baseAttachments: Attachment[];

    constructor() {
        this._baseAttachments = [
            {
                id: 1,
                src: "https://i.pinimg.com/236x/4a/65/1c/4a651c209014559c2a7e511be2b468a4.jpg",
            },
            {
                id: 2,
                src: "https://i.pinimg.com/236x/50/0f/47/500f470431f4888435aeb8c32230287e.jpg",
            },
            {
                id: 3,
                src: "https://i.pinimg.com/236x/ab/80/58/ab8058f86ad87799fc55c09eb0574738.jpg",
            },
            {
                id: 4,
                src: "https://i.pinimg.com/474x/d4/84/37/d48437006b19f0a91c9acf337ebe4bab.jpg",
            },
            {
                id: 5,
                src: "https://i.pinimg.com/236x/6b/88/df/6b88df38350220a813046f0725d3656e.jpg",
            },
            {
                id: 6,
                src: "https://i.pinimg.com/736x/e9/20/f3/e920f335a2cb774c61fde34a561bdaba.jpg",
            },
            {
                id: 7,
                src: "https://i.pinimg.com/236x/b6/83/30/b68330813ac1324e1e6f07d501932664.jpg",
            },
            {
                id: 8,
                src: "https://i.pinimg.com/474x/76/51/c2/7651c26b7ed9349b462072ad0d2b0cc0.jpg",
            },
        ];

        this._user = {
            id: 1,
            username: "chansyao",
            displayName: "Satoru Gojo",
            avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
            createdAt: new Date(2000, 11, 12), // Месяцы в JS: 0-11 (декабрь = 11)
        };

        this._guild = {
            id: 1,
            name: "Best Guild Ever",
            icon: "https://i.pinimg.com/736x/1f/97/c2/1f97c2b126afc0cc179294ca7e29f74c.jpg",
            description: "",
            created_at: new Date(2000, 11, 12),
            owner: {
                guildId: 1,
                nickname: "Satoru Gojo",
                joined_at: new Date(2000, 11, 12),
                ...this._user,
            },
        };

        this._message = {
            id: 1,
            text: "Hello yo yo yo yoy yo y e e e o",
            author: this.user,
            channel: this.dm,
            createdAt: new Date(2000, 11, 12),
            owned: true,
        };

        this._dm = {
            id: 1,
            user: this.user,
            lastMessage: this.message,
            name: this._user.displayName,
        };
    }

    get user(): User {
        return this._user;
    }

    get guild(): Guild {
        return this._guild;
    }

    get dm(): DM {
        return this._dm;
    }

    getAttachments(count: number, from: number = 0): Attachment[] {
        const result: Attachment[] = [];
        for (let i = 0; i < count; i++) {
            const base =
                this._baseAttachments[
                    (from + i) % this._baseAttachments.length
                ];
            result.push({
                id: i + 1,
                src: base.src,
            });
        }
        return result;
    }

    dms(n: number): DM[] {
        const testDms = [];

        for (let i = 0; i < n; i++) {
            let copy = { ...this._dm };
            copy.id = i;
            testDms.push(copy);
            console.log(i);
        }

        return testDms;
    }

    guilds(n: number): Guild[] {
        const guilds = [];
        for (let i = 0; i < n; i++) {
            let copy = { ...this._guild };
            copy.id = i;
            guilds.push(copy);
            console.log(i);
        }

        return guilds;
    }

    get message(): Message {
        return { ...this._message };
    }
}

export { TestModels };
