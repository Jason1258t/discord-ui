import Message from "../message/Message";
import styles from "./MessageLIst.module.css";
import helloImage from './assets/hello.jpeg';

const MessagesList = ({ data }) => {
    const reversedCopy = [...data].reverse();

    return reversedCopy.length > 0 ? (
        <div className={styles.msgList}>
            {reversedCopy.map((msg) => (
                <Message data={msg} key={msg.id} />
            ))}
        </div>
    ) : (
        <div className={styles.initialMessageHint}>
            <img src={helloImage}/>
            Здесь пока ничего нет<br/>Начните ощение
        </div>
    );
};

export default MessagesList;
