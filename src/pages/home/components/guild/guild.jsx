import { React } from "react";
import "./styles.css";

const GuildWidget = ({ data }) => {

    return (
        <div
            className="guild"
            onClick={() => console.log("open guild " + data.name)}
        >
            <img src={data.icon} alt={data.name}></img>
        </div>
    );
};

export default GuildWidget;
