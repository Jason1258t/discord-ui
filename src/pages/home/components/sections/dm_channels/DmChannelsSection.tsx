import { useState } from "react";
import TextField from "components/text/textfield";
import styles from "./DmChannelsSection.module.css";
import Dm from "./dm/dm";
import { ReactComponent as PlusSvg } from "../../../../../images/plus.svg";
import { DMChannel } from "@models/channel/dm_channel";

const DmChannelsSection = ({
    dms,
    onClick,
    currentChat,
}: {
    dms: Array<DMChannel>;
    onClick?: ((id: number) => void) | undefined;
    currentChat: number;
}) => {
    const [foundDms, setFoundDms] = useState(dms);
    const [useFound, setUseFound] = useState(false);

    return (
        <div className={styles.dmSection}>
            <div className={styles.search}>
                <TextField
                    type="text"
                    placeholder="find or start a conversation"
                    onChange={(e) => {
                        setUseFound(e.target.value.length !== 0);

                        setFoundDms(
                            dms.filter((dm) =>
                                dm.user.displayName
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase())
                            )
                        );
                    }}
                ></TextField>
            </div>
            {!useFound && (
                <div className={styles.title}>
                    DIRECT MESSAGES
                    <PlusSvg />
                </div>
            )}

            {foundDms.length !== 0 ? (
                foundDms.map((data) => (
                    <Dm
                        data={data}
                        onClick={onClick}
                        isSelected={currentChat === data.id}
                    />
                ))
            ) : (
                <div className={styles.emptyResult}>Nothing found</div>
            )}
        </div>
    );
};

export default DmChannelsSection;
