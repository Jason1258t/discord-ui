import GuildsListSection from "./components/sections/guilds_list/GuildList";
import DmChannelsSection from "./components/sections/dm_channels/dm_channels";
import Chat from "./components/sections/chat/chat";
import { TestModels } from "../../models/models";
import { useState } from "react";
import Wampus from "./components/wampus/wampus";
const models = new TestModels();

const HomePage = () => {
    const [currentChatId, setCurrentChatId] = useState(-1);
    const testGuild = models.guild;
    const testdm = models.dm;
    const testGuilds = [
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
    ];

    return (
        <div style={{ display: "flex"}}>
            <GuildsListSection guilds={testGuilds} />
            <DmChannelsSection
                dms={[testdm, testdm, testdm, testdm, testdm, testdm]}
                onClick={setCurrentChatId}
            />
            <div
                style={{
                    display: "flex",
                    flexGrow: 1,
                    backgroundColor: "#313338",
                }}
            >
                {currentChatId !== -1 ? <Chat data={testdm} /> : <Wampus />}
            </div>
        </div>
    );
};

export default HomePage;
