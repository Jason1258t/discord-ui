import { useState } from "react";
import styles from './MessageField.module.css';
import { TestModels } from "../../../../../../../models/models";
const models = new TestModels();

const MessageField = ({ addMessage }) => {
    const [message, setMessage] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                let t = models.message;
                t["text"] = message;
                t['id'] = Math.random().toString(36).substring(2, 9);
                if (message.trim()) {
                    addMessage(t);
                    setMessage("");
                }
                console.log(t);
            }}
        >
            <input
                type="text"
                className={styles.messageField}
                value={message}
                placeholder="Type message here"
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
        </form>
    );
};

export default MessageField;
