class TestModels {
    constructor() {
        this.user = {
            id: 1,
            username: "chansyao",
            display_name: "Satoru Gojo",
            avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
            created_at: Date(2000, 12, 12),
        }

        this.guild = {
            id: 1,
            name: "Best Guild Ever",
            icon: "https://i.pinimg.com/736x/1f/97/c2/1f97c2b126afc0cc179294ca7e29f74c.jpg",
            description: "",
            created_at: Date(2000, 12, 12),
            owner: {
                guildId: 1,
                nickname: "Satoru Gojo",
                joined_at: Date(2000, 12, 12),
                user: this.user
            },
        }

        this.dm = {
            user: {
                display_name: "Satoru Gojo",
                avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
            },
            onClick: () => {
                console.log("clicked");
            },
        }
    }

    get user() {
        return this.user
    }

    get guild() {
        return this.guild
    }

    get dm() {
        return this.dm
    }
}

export {
    TestModels,
}