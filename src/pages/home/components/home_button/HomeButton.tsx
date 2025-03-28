import React from "react";
import discord_logo from "../../../../images/ds_logo_2.png";
import styles from "./HomeButtom.module.css";

const HomeButton = () => {
    return (
        <div className={styles.homeButton}>
            <img src={discord_logo} alt="go home" />
        </div>
    );
};

export default HomeButton;
