import "./styles.css";
import { useEffect, useState, useCallback, useMemo } from "react";
import MessageField from "./components/message_field/MessageField";
import MessagesList from "./components/messages_list/MessagesList";
import DMHeader from "./components/header/DmHeader";

const Chat = ({ data }) => {
    const [messages, setMessages] = useState([]);

    // Function to add a new message
    const addMessage = (msg) => {
        if (msg.text.trim()) {
            setMessages((prevMessages) => [...prevMessages, msg]);
        }
    };

    // useEffect(() => {

    // }, [])

    return (
        <div className="chat">
            <DMHeader data={data} />

            <MessagesList data={messages} />
            <MessageField addMessage={addMessage} />
        </div>
    );
};

export default Chat;
