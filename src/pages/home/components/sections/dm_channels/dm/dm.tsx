import { DMChannel } from "@models/channel/dm_channel";
import styles from "./dm.module.css";

const Dm = ({
    data,
    onClick,
    isSelected = false,
}: {
    data: DMChannel;
    onClick?: ((id: number) => void) | undefined;
    isSelected: boolean;
}) => {
    return (
        <div
            key={data.id}
            className={`${styles.wrapper} ${isSelected ? styles.active : ""}`}
            onClick={() => {
                onClick?.(data.id);
                console.log(data.id);
                console.log(`clicked on ${data.id}`);
            }}
        >
            <img
                src={data.user.avatar}
                alt="avatar"
                className={styles.avatar}
            />
            <div className={styles.contentWrapper}>
                <p
                    className={`${styles.p} ${styles.name} ${
                        isSelected ? styles.active : ""
                    }`}
                >
                    {data.user.displayName}
                </p>
                <p
                    className={`${styles.p} ${styles.lastMessage} ${
                        isSelected ? styles.active : ""
                    }`}
                >
                    {data.lastMessage ? data.lastMessage.text : "Начните общение"}
                </p>
            </div>
        </div>
    );
};

export default Dm;
