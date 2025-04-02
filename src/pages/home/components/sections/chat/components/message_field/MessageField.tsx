import { InputMode } from "zustand/chat/inputState";
import styles from "./MessageField.module.css";
import useChatStore from "zustand/chat/chatStore";
import { ReferenceContainer } from "./message_reference/ReferenceContainer";
import { useEffect, useRef } from "react";

const MessageField = () => {
    const { onTextChanged, onConfirm, inputState } = useChatStore();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Автоматическое изменение высоты textarea при изменении содержимого
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [inputState.text]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Предотвращаем перенос строки
            onConfirm(); 
        }
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onConfirm();
            }}
        >
            {inputState.mode !== InputMode.Base && <ReferenceContainer />}
            <textarea
                ref={textareaRef}
                className={`${styles.messageField} ${
                    inputState.mode !== InputMode.Base && styles.withRef
                }`}
                value={inputState.text}
                placeholder="Type message here"
                autoFocus={true}
                onKeyDown={handleKeyDown}
                onChange={(event) => onTextChanged(event.target.value)}
                rows={1} // Начальное количество строк
            />
        </form>
    );
};

export default MessageField;
