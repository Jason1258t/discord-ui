import { ReactComponent as SadWampus } from "../../images/sad_wumpus.svg";
import GuildsListSection from "./components/sections/guilds_list/guilds_list";
import DmChannelsSection from "./components/sections/dm_channels/dm_channels";
import DmUser from "./components/sections/chat/components/dm_user/DmUser";
import Chat from "./components/sections/chat/chat";
import { TestModels } from "../../models/models";

const HomePage = () => {
    const models = new TestModels()
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
            />
            <div style={{
                    display: "flex",
                    flex: 1,
                    height: "100vh",
                    backgroundColor: "#313338"
            }}>
                <Chat data={testdm}/>
                <div style={{
                        margin: "auto",
                        color: "#949BA4",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "15px",
                        display: "flex",
                        flexDirection: "column",
                }}>
                    {/* <SadWampus width={420} style={{ marginBottom: "24px" }} /> */}
                    {/* No one's around to play with Wumpus. */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
