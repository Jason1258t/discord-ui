import React from "react";
import HomeButton from "../../home_button/HomeButton";
import GuildWidget from "../../guild/guild";
import styles from "./GuildList.module.css";
import { Guild } from "@models/guild";

const GuildsListSection = ({
    guilds,
    goHome = undefined,
}: {
    guilds: Array<Guild>;
    goHome: (() => void) | undefined;
}) => {
    return (
        <div className={styles.guildsSection} onClick={goHome}>
            <HomeButton></HomeButton>
            <div className={styles.splitter}></div>
            <div className={styles.list}>
                {guilds.map((data) => (
                    <GuildWidget data={data} key={data.id}></GuildWidget>
                ))}
            </div>
        </div>
    );
};

export default GuildsListSection;
