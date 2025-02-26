import React from "react";
import TextField from "../../../../../components/text/textfield";
import "./styles.css";
import Dm from "../../dm/dm";
import PlusSvg from "../../../../../images/plus.svg";

const DmChannelsSection = ({ dms }) => {
    return (
        <div className="dm-section">
            <div className="search">
                <TextField
                    type="text"
                    placeholder="find or start a conversation"
                ></TextField>
            </div>
            <div className="title"
            >
                DIRECT MESSAGES
                <img src={PlusSvg} />
            </div>
            {dms.map((data) => (
                <Dm data={data} />
            ))}
        </div>
    );
};

export default DmChannelsSection;
