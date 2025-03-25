import isSameDay from "../../../../../../../utils/sameDay";
import MessagesGroup from "../message/MessagesGroup";
import styles from "./MessageLIst.module.css";
import helloImage from "./assets/hello.jpeg";

import { Message as MessageData } from "@models/message";
import { MessageGroup as MessageGroupData } from "@models/messageGroup";

function groupMessages(messages: Array<MessageData>): Array<MessageGroupData> {
    if (messages.length === 0) return [];

    const groups = [];
    let currentGroup = { messages: [messages[0]], id: 0, showDate: true };
    let lastTimestamp = messages[0].created_at;

    for (let i = 1; i < messages.length; i++) {
        const currentMessage = messages[i];
        const timeDifference =
            (currentMessage.created_at.getTime() - lastTimestamp.getTime()) /
            (1000 * 60); // Difference in minutes

        if (
            timeDifference > 2 ||
            !isSameDay(currentMessage.created_at, lastTimestamp)
        ) {
            groups.push(currentGroup);
            currentGroup = {
                messages: [currentMessage],
                id: groups.at(-1)!.id + 1,
                showDate: !isSameDay(currentMessage.created_at, lastTimestamp),
            };
        } else {
            currentGroup.messages.push(currentMessage);
        }

        lastTimestamp = currentMessage.created_at;
    }

    // Push the last group
    groups.push(currentGroup);

    return groups;
}

const MessagesList = ({ data }: { data: Array<MessageData> }) => {
    const reversedCopy = [...data].reverse();

    const groups = groupMessages(data);
    const reversedGroups = [...groups].reverse();

    return reversedCopy.length > 0 ? (
        <div className={styles.msgList}>
            {reversedGroups.map((g) => (
                <MessagesGroup group={g} key={g.id} />
            ))}
        </div>
    ) : (
        <div className={styles.initialMessageHint}>
            <img src={helloImage} alt="hello" />
            Здесь пока ничего нет
            <br />
            Начните ощение
        </div>
    );
};

export default MessagesList;
