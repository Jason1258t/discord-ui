import useChatStore from "zustand/chat/chatStore";
import { InputMode } from "zustand/chat/inputState";

export const useKeyboardShortcuts = () => {
    const {
        inputState,
        editLastMessage,
        replyLastMessage: replyLast,
        resetInput,
    } = useChatStore();

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (
            event.key === "ArrowUp" &&
            !event.shiftKey &&
            inputState.text === "" &&
            !event.metaKey
        ) {
            event.preventDefault();
            editLastMessage();
        }
        if (event.key === "ArrowUp" && !event.shiftKey && event.metaKey) {
            event.preventDefault();
            replyLast();
        }
        if (event.key === "Escape" && inputState.mode !== InputMode.Base) {
            event.preventDefault();
            resetInput();
        }
    };

    return { handleKeyDown };
};
