import { React, useState } from "react";
import "./styles.css";

const GuildWidget = ({ data }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="guild"
            onClick={() => console.log("open guild " + data.name)}
            onMouseEnter={() => {
                console.log("show toolpit");
                setShowTooltip(true);
            }}
            onMouseLeave={() => {
                console.log("hide tooltip");
                setShowTooltip(false);
            }}
        >
            <img src={data.icon} alt={data.name}></img>
            {showTooltip && <div className="tooltip">{data.name}</div>}
        </div>
    );
};

export default GuildWidget;
