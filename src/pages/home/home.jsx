import { ReactComponent as SadWampus } from "../../images/sad_wumpus.svg";
import GuildsListSection from "./components/sections/guilds_list/guilds_list";
import DmChannelsSection from "./components/sections/dm_channels/dm_channels";

const HomePage = () => {
    const testGuild = {
        id: 1,
        name: "Best Guild Ever",
        icon: "https://i.pinimg.com/736x/1f/97/c2/1f97c2b126afc0cc179294ca7e29f74c.jpg",
        description: "",
        created_at: Date(2000, 12, 12),
        owner: {
            guildId: 1,
            nickname: "Satoru Gojo",
            joined_at: Date(2000, 12, 12),
            id: 1,
            username: "chansyao",
            display_name: "Satoru Gojo",
            avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
            created_at: Date(2000, 12, 12),
        },
    };

    const testdm = {
        user: {
            display_name: "Satoru Gojo",
            avatar: "https://i.pinimg.com/736x/f4/fd/36/f4fd3614a9ebfd84405302ee68cb296a.jpg",
        },
        onClick: () => {
            console.log("clicked");
        },
    };

    return (
        <div style={{ display: "flex" }}>
            <GuildsListSection
                guilds={[
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                    testGuild,
                ]}
            />
            <DmChannelsSection
                dms={[testdm, testdm, testdm, testdm, testdm, testdm]}
            />
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    height: "100vh",
                    backgroundColor: "#313338"
                }}
            >
                <div
                    style={{
                        margin: "auto",
                        color: "#949BA4",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "15px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <SadWampus width={420} style={{ marginBottom: "24px" }} />
                    No one's around to play with Wumpus.
                </div>
            </div>
        </div>
    );
};

export default HomePage;
