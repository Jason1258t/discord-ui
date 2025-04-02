import edit from "assets/icons/pencil.svg";
import reply from "assets/icons/arrow-uturn-left.svg";
import close from "assets/icons/close.svg";

import styles from "./ReferenceContainer.module.css";
import useChatStore from "zustand/chat/chatStore";
import { InputMode } from "zustand/chat/inputState";

export const ReferenceContainer = () => {
    const { messages, inputState, cancelEdit, cancelReply } = useChatStore();
    const isEdit = inputState.mode === InputMode.Edit;
    if (
        inputState.mode === InputMode.Edit ||
        inputState.mode === InputMode.Reply
    ) {
        const refMsg = messages.find((e) => e.id === inputState.messageId)!;
        const acitonImg = isEdit ? edit : reply;
        const header = isEdit
            ? "Редактировать"
            : `Ответ ${refMsg.author.displayName}`;

        return (
            <div className={styles.refContaier}>
                <img
                    src={acitonImg}
                    alt={acitonImg}
                    className={`${styles.imgOnBcg}`}
                />
                <div className={styles.refContent}>
                    <p className={styles.refTitle}>{header}</p>
                    <p className={styles.refMsgText}> {refMsg.text}</p>
                </div>
                <img
                    src={close}
                    alt="close"
                    onClick={isEdit ? cancelEdit : cancelReply}
                    className={`${styles.closeRef} ${styles.imgOnBcg}`}
                />
            </div>
        );
    }

    return <div>Bad state</div>;
};
