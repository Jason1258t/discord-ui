import { useState } from "react";
import styles from './MessageField.module.css';
import { TestModels } from "../../../../../../../models/models";

const MessageField = ({ addMessage }) => {
    const [message, setMessage] = useState("");
    const [id, setId] = useState(0)


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                let t = new TestModels().message
                t.text = message;
                t.id = id;
                t.created_at = new Date();
                
                setId(id + 1)
                if (message.trim()) {
                    addMessage(t);
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
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
        </form>
    );
};

export default MessageField;
