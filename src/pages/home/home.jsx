import GuildsListSection from "./components/sections/guilds_list/GuildList";
import DmChannelsSection from "./components/sections/dm_channels/DmChannelsSection";
import Chat from "./components/sections/chat/chat";
import { TestModels } from "../../models/models";
import { useState } from "react";
import Wampus from "./components/wampus/wampus";

const models = new TestModels();
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

const testDms = [testdm, testdm, testdm, testdm, testdm, testdm];

for (let i = 0; i < testDms.length; i++) {
    let copy = { ...testDms[i] };
    copy.id = i;
    testDms[i] = copy;
    console.log(i);
}

const HomePage = () => {
    const [currentChatId, setCurrentChatId] = useState(-1);

    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <GuildsListSection guilds={testGuilds} goHome={() => setCurrentChatId(-1)}/>
            <DmChannelsSection
                dms={testDms}
                onClick={setCurrentChatId}
                currentChat={currentChatId}
            />
            {currentChatId !== -1 ? (
                <Chat data={testDms.find((e) => e.id === currentChatId)} />
            ) : (
                <Wampus />
            )}
        </div>
    );
};

export default HomePage;
