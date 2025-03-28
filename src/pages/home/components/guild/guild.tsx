import { Guild } from "@models/guild";
import styles from "./guild.module.css";

const GuildWidget = ({ data }: { data: Guild }) => {
    return (
        <div
            className={styles.guild}
            onClick={() => console.log("open guild " + data.name)}
        >
            <img src={data.icon} alt={data.name}></img>
        </div>
    );
};

export default GuildWidget;
