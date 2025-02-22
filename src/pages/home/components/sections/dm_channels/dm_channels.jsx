import React from "react";
import TextField from "../../../../../components/text/textfield";
import "./styles.css";

const DmChannelsSection = () => {
    return (
        <div className="dm-section">
            <div className="search">
                <TextField
                    type="text"
                    placeholder="find or start a conversation"
                ></TextField>
            </div>
        </div>
    );
};

export default DmChannelsSection;
