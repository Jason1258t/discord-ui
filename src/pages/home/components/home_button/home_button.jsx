import React from "react";
import "./styles.css";
import discord_logo from "../../../../images/ds_logo_2.png";

const HomeButton = () => {
    return (
        <div className="home-button">
            <img src={discord_logo} alt=''/>
        </div>
    );
};

export default HomeButton;
