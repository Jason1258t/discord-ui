import "./chat.css";
import { useEffect, useState } from "react";
import MessageField from "./components/message_field/MessageField";
import MessagesList from "./components/messages_list/MessagesList";
import DMHeader from "./components/header/DmHeader";

const Chat = ({ data }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (msg) => {
        if (msg['text'].trim()) {
            setMessages(prevMessages => [...prevMessages, msg]);
        }
    };

    useEffect(() => {
        console.log(messages)
    }, [messages])

    return (
        <div className="chat">
            <DMHeader data={data} />
            <MessagesList data={messages} />
            <MessageField addMessage={addMessage} />
        </div>
    );
};

export default Chat;