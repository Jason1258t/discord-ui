import { useState } from "react";
import styles from "./MessageField.module.css";
import { TestModels } from "models/models";
import useChatStore from "zustand/chat/chatStore";

const MessageField = () => {
    const [message, setMessage] = useState("");
    const [id, setId] = useState(0);
    const { onTextChanged, onConfirm } = useChatStore();

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                let t = new TestModels().message;
                t.text = message;
                t.id = id;
                t.createdAt = new Date();

                setId(id + 1);
                if (message.trim()) {
                    onConfirm();
                    setMessage("");
                }
                // console.log(t);
            }}
        >
            <input
                type="text"
                className={styles.messageField}
                value={message}
                placeholder="Type message here"
                autoFocus={true}
                onChange={(event) => {
                    setMessage(event.target.value);
                    onTextChanged(event.target.value.trim());
                }}
            />
        </form>
    );
};

export default MessageField;
