import useChatStore from "zustand/chat/chatStore";
import {InputMode} from "zustand/chat/inputState";
import React from "react";

export const useKeyboardShortcuts = () => {
    const {inputState, editLastMessage, replyLastMessage, resetInput, attachments, clearAttachments} =
        useChatStore();

    const handleKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case "Escape": {
                if (attachments.length > 0) {
                    event.preventDefault();
                    clearAttachments();
                }
                if (inputState.mode !== InputMode.Base) {
                    event.preventDefault();
                    resetInput();
                }
                break;
            }
            case "ArrowUp": {
                if (inputState.text === "" && !event.metaKey) {
                    event.preventDefault();
                    editLastMessage();
                } else if (!event.shiftKey && event.metaKey) {
                    event.preventDefault();
                    replyLastMessage();
                }
                break;
            }
        }
    };

    return {handleKeyDown};
};
