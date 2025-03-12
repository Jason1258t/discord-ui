import { ReactComponent as SadWampus } from "../../images/sad_wumpus.svg";
import GuildsListSection from "./components/sections/guilds_list/guilds_list";
import DmChannelsSection from "./components/sections/dm_channels/dm_channels";
import Chat from "./components/sections/chat/chat";
import { TestModels } from "../../models/models";
import { useState } from "react";
const models = new TestModels()

const HomePage = () => {
    const [currentChatId, setCurrentChatId] = useState(-1)
    const testGuild = models.guild
    const testdm = models.dm

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
                onClick={setCurrentChatId}
            />
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    height: "100vh",
                    backgroundColor: "#313338"
            }}>
                {
                    currentChatId !== -1 ? 
                    <Chat data={testdm} /> :
                        
                    <SadWampus width={420} style={{ marginBottom: "24px" }} />
                }
                <div style={{
                        margin: "auto",
                        color: "#949BA4",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "15px",
                        display: "flex",
                        flexDirection: "column",
                }}>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
