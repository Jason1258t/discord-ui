import React from "react";
import styles from "./AttachmentsPanel.module.css";
import useChatStore from "zustand/chat/chatStore";
import {ReactComponent as Delete} from "assets/icons/close.svg";


const AttachmentsPanel = () => {
        const {attachments, removeAttachment} = useChatStore();
        return <div className={styles.panel}>
            {attachments.map((attachment, ind) =>
                (<div className={styles.attachment} key={ind}>
                    <img src={attachment.tempSrc} alt="sexy pic"/>
                    <Delete className={styles.deleteButton} onClick={() => removeAttachment(ind)}/>
                </div>))}
        </div>
            ;
    }
;

export default AttachmentsPanel;
