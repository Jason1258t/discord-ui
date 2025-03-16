import Message from "../message/Message";
import styles from "./MessageLIst.module.css";

const MessagesList = ({ data }) => {
    const reversedCopy = [...data].reverse();

    return (
        <div className={styles.msgList}>
            {reversedCopy.map((msg) => (
                <Message data={msg} key={msg.id} />
            ))}
        </div>
    );
};

export default MessagesList;
