import styles from "./Message.module.css";
import formatDateTime from "../../../../../../../utils/formatDateTime";
import useHover from "../../../../../../../hooks/useHover";

const Message = ({ data, showInfo }) => {
    const [isHover, bind] = useHover();
    const senderInfo = (
        <div style={{ alignItems: "end", display: "flex" }}>
            <span className={styles.username}>{data.author.display_name}</span>
            <span className={styles.date}>
                {formatDateTime(data.created_at)}
            </span>
        </div>
    );

    return (
        <div className={styles.msgwrapper} {...bind}>
            {showInfo ? (
                <img
                    src={data.author.avatar}
                    className={styles.avatar}
                    alt="avatar"
                />
            ) : (
                <div
                    className={styles.date}
                    style={{
                        width: 40,
                        margin: "0 10px",
                    }}
                >
                    {isHover && formatDateTime(data.created_at, true)}
                </div>
            )}

            <div
                className={styles.contentWrapper}
                style={showInfo ? {} : { minHeight: 0 }}
            >
                {showInfo && senderInfo}
                <p className={styles.text}>{data.text}</p>
            </div>
        </div>
    );
};

export default Message;
