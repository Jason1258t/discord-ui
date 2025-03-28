import styles from "./chat.module.css";
import { useEffect, useState } from "react";
import MessageField from "./components/message_field/MessageField";
import MessagesList from "./components/messages_list/MessagesList";
import DMHeader from "./components/header/DmHeader";
import { DMChannel } from "@models/channel/dm_channel";
import { Message } from "@models/message";

const Chat = ({ data }: { data: DMChannel }) => {
    const [messages, setMessages] = useState<Array<Message>>([]);

    const addMessage = (msg: Message) => {
        if (msg["text"].trim()) {
            setMessages((prevMessages) => [...prevMessages, msg]);
        }
    };

    useEffect(() => {
        console.log(messages);
    }, [messages]);

    return (
        <div className={styles.chat}>
            <DMHeader data={data} />
            <MessagesList data={messages} />
            <MessageField addMessage={addMessage} />
        </div>
    );
};

export default Chat;
