import { User } from "./user";
import { Guild } from "./guild";
import { Message } from "./message";
import { DMChannel as DM } from "./channel/dm_channel";

class TestModels {
    private _user: User;
    private _guild: Guild;
    private _message: Message;
    private _dm: DM;

    constructor() {
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
        return this._message;
    }
}

export { TestModels };
