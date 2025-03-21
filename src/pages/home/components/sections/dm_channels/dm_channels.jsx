import { React, useState } from "react";
import TextField from "../../../../../components/text/textfield";
import "./styles.css";
import Dm from "./dm/dm";
import { ReactComponent as PlusSvg } from "../../../../../images/plus.svg";

const DmChannelsSection = ({ dms, onClick }) => {
    const [foundDms, setFoundDms] = useState(dms);
    const [useFound, setUseFound] = useState(false);

    return (
        <div className="dm-section">
            <div className="search">
                <TextField
                    type="text"
                    placeholder="find or start a conversation"
                    onChange={(e) => {
                        setUseFound(e.target.value.length !== 0);

                        setFoundDms(
                            dms.filter((dm) =>
                                dm.user.display_name
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase())
                            )
                        );
                    }}
                ></TextField>
            </div>
            {!useFound && (
                <div className="title">
                    DIRECT MESSAGES
                    <PlusSvg />
                </div>
            )}

            {foundDms.length !== 0 ? (
                foundDms.map((data) => <Dm data={data} onClick={onClick} />)
            ) : (
                <div className="empty-result">Nothing found</div>
            )}
        </div>
    );
};

export default DmChannelsSection;
