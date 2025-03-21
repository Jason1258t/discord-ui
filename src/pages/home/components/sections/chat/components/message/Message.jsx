/* eslint-disable jsx-a11y/alt-text */
import styles from "./Message.module.css";

const Message = ({ data }) => {
    return (
        <div className={styles.msgwrapper}>
            <img src={data.author.avatar} className={styles.avatar} />
            <div style={{ margin: "4px 0", width: "100%" }}>
                <p className={styles.username}>{data.author.display_name}</p>
                <p className={styles.text}>{data.text}</p>
            </div>
        </div>
    );
};

export default Message;
