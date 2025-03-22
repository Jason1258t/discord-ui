import MessagesGroup from "../message/MessagesGroup";
import styles from "./MessageLIst.module.css";
import helloImage from "./assets/hello.jpeg";

function groupMessages(messages) {
    if (messages.length === 0) return [];

    const groups = [];
    let currentGroup = { messages: [messages[0]], id: 0 };
    let lastTimestamp = messages[0].created_at;

    for (let i = 1; i < messages.length; i++) {
        const currentMessage = messages[i];
        const timeDifference =
            (currentMessage.created_at.getTime() - lastTimestamp.getTime()) /
            (1000 * 60); // Difference in minutes

        if (timeDifference > 2) {
            groups.push(currentGroup);
            currentGroup = { messages: [currentMessage], id: groups.at(-1).id + 1 };
        } else {
            currentGroup.messages.push(currentMessage);
        }

        lastTimestamp = currentMessage.created_at;
    }

    // Push the last group
    groups.push(currentGroup);

    return groups;
}

const MessagesList = ({ data }) => {
    const reversedCopy = [...data].reverse();

    const groups = groupMessages(data);
    const reversedGroups = [...groups].reverse();

    return reversedCopy.length > 0 ? (
        <div className={styles.msgList}>
            {reversedGroups.map((g) => (
                <MessagesGroup messages={g.messages} key={g.id}/>
            ))}
            {/* {reversedCopy.map((msg) => (
                <Message data={msg} key={msg.id} />
            ))} */}
        </div>
    ) : (
        <div className={styles.initialMessageHint}>
            <img src={helloImage} alt="hello"/>
            Здесь пока ничего нет
            <br />
            Начните ощение
        </div>
    );
};

export default MessagesList;
