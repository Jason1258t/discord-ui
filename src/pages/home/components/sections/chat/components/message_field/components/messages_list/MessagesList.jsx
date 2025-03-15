import Message from "../message/Message";
import styles from "./MessageLIst.module.css";

const MessagesList = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            {data.map((msg) => (
                <Message data={msg} key={msg.id} />
            ))}
        </div>
    );
};

export default MessagesList;
