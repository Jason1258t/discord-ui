import styles from "./chat.module.css";
import MessageField from "./components/message_field/MessageField";
import MessagesList from "./components/messages_list/MessagesList";
import DMHeader from "./components/header/DmHeader";
import { DMChannel } from "@models/channel/dm_channel";
import useChatStore from "zustand/chat/chatStore";
import { useRef } from "react";

const Chat = () => {
    const { channel } = useChatStore();
    const inputRef = useRef<HTMLTextAreaElement>(null);


    return (
        <div className={styles.chat}>
            <DMHeader data={channel as DMChannel} />
            <MessagesList />
            <MessageField ref={inputRef} />
        </div>
    );
};

export default Chat;
