class TestModels {
    constructor() {
        this._user = {
            id: 1,
            username: "chansyao",
            display_name: "Satoru Gojo",
            avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
            created_at: Date(2000, 12, 12),
        };

        this._guild = {
            id: 1,
            name: "Best Guild Ever",
            icon: "https://i.pinimg.com/736x/1f/97/c2/1f97c2b126afc0cc179294ca7e29f74c.jpg",
            description: "",
            created_at: Date(2000, 12, 12),
            owner: {
                guildId: 1,
                nickname: "Satoru Gojo",
                joined_at: Date(2000, 12, 12),
                user: this.user,
            },
        };

        this._message = {
            id: 1,
            text: "Hello yo",
            author: this.user,
            channel: this.dm,
            created_at: Date(2000, 12, 12),
        };

        this._dm = {
            id: 1,
            user: this.user,
            message: this.message,
        };
    }

    get user() {
        return this._user;
    }

    get guild() {
        return this._guild;
    }

    get dm() {
        return this._dm;
    }

    get message() {
        return this._message;
    }
}

export { TestModels };
