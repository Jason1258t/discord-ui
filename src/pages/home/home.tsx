import GuildsListSection from "./components/sections/guilds_list/GuildList";
import DmChannelsSection from "./components/sections/dm_channels/DmChannelsSection";
import Chat from "./components/sections/chat/chat";
import { TestModels } from "models/models";
import { useEffect, useState } from "react";
import Wampus from "./components/wampus/wampus";
import useChatStore from "zustand/chat/chatStore";

const models = new TestModels();
const testGuilds = models.guilds(8);

const HomePage = () => {
    const [currentChatId, setCurrentChatId] = useState(-1);
    const { setAuthorData, setChannelData } = useChatStore();
    const { dms } = useChatStore();

    const setChannel = (id: number) => {
        if (id !== -1) {
            setChannelData(dms.find((e) => e.id === id)!);
        }
        setCurrentChatId(id);
    };

    useEffect(() => {
        setAuthorData(models.user);
    }, [setAuthorData]);

    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <GuildsListSection
                guilds={testGuilds}
                goHome={() => setChannel(-1)}
            />
            <DmChannelsSection
                dms={dms}
                onClick={setChannel}
                currentChat={currentChatId}
            />
            {currentChatId !== -1 ? <Chat /> : <Wampus />}
        </div>
    );
};

export default HomePage;
