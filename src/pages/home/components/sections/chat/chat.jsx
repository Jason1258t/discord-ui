import "./styles.css";
import { useEffect, useState, useCallback, useMemo } from "react";
import MessageField from "./components/message_field/MessageField";
import MessagesList from "./components/message_field/components/messages_list/MessagesList";
import DMHeader from "./components/header/DmHeader";

const Chat = ({ data }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (msg) => {
        if (msg["text"].trim()) {
            setMessages((prev) => [...prev, msg]);
            console.log(messages);
        }
    };

    // useEffect(() => {

    // }, [])

    return (
        <div className="chat">
            <div className="info">
                <DMHeader data={data} />
            </div>

            <div className="main-section">
                <MessagesList data={messages} />
                <MessageField addMessage={addMessage} />
            </div>
        </div>
    );
};

export default Chat;
