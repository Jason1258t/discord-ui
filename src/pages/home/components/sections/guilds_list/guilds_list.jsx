import React from "react";
import HomeButton from "../../home_button/home_button";
import GuildWidget from "../../guild/guild";
import "./styles.css";

const GuildsListSection = ({ guilds }) => {
    return (
        <div className="guilds-section">
            <HomeButton></HomeButton>
            <div
                style={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    width: "32px",
                    height: "2px",
                    minHeight: "2px",
                    borderRadius: "2px",
                    background: "#4E5058",
                    marginLeft: "auto" /* Центрируем по горизонтали */,
                    marginRight: "auto" /* Центрируем по горизонтали */,
                }}
            ></div>
            {guilds.map((data) => (
                <GuildWidget data={data} key={data.id}></GuildWidget>
            ))}
        </div>
    );
};

export default GuildsListSection;
