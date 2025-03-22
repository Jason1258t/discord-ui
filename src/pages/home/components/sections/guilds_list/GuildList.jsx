import React from "react";
import HomeButton from "../../home_button/home_button";
import GuildWidget from "../../guild/guild";
import "./GuildList.css";

const GuildsListSection = ({ guilds, goHome = null }) => {
    return (
        <div className="guilds-section" onClick={goHome}>
            <HomeButton></HomeButton>
            <div className="splitter"></div>
            <div className="list">
                {guilds.map((data) => (
                    <GuildWidget data={data} key={data.id}></GuildWidget>
                ))}
            </div>
        </div>
    );
};

export default GuildsListSection;
