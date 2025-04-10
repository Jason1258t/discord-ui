import {ReactComponent as Paperclip} from "assets/icons/paper-clip.svg";
import styles from "./AttachmentsButton.module.css";
import React, {useRef} from "react";
import useChatStore from "zustand/chat/chatStore";


const AttachmentsButton = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {addAttachments} = useChatStore();
    const triggerFileDialog = () => {
        inputRef.current?.click(); // 🤷‍♂️ Без этого никак
    };

    const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        addAttachments(Array.from(files).filter((file) => file.type.startsWith('image/')));
    };

    return (
        <div>
            <Paperclip className={styles.attachButton} onClick={triggerFileDialog}/>
            <input
                type="file"
                ref={inputRef}
                accept="image/*"
                multiple
                onChange={handleFiles}
                style={{display: 'none'}}
            />
        </div>
    );
};

export default AttachmentsButton;
