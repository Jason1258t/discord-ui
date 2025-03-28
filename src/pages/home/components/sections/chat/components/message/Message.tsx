import styles from "./Message.module.css";
import formatDateTime from "utils/formatDateTime";
import useHover from "hooks/useHover";
import useContextMenu from "hooks/useContextMenu";
import { useState } from "react";

import { Message as MessageData } from "@models/message";
import MessageActionsMenu from "./actions_overlay/MessageActionsMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FastActionsMenu from "./fast_actions/FastActionsMenu";

const Message = ({
    data,
    showInfo,
    owned = true,
    onMsgDelete = undefined, // later it whould be taken from zustand
    onMsgEdit = undefined,
    onMsgReply = undefined,
    onMsgForward = undefined,
}: {
    data: MessageData;
    showInfo: boolean;
    owned?: boolean;
    onMsgDelete?: ((id: number) => void) | undefined;
    onMsgEdit?: ((id: number) => void) | undefined;
    onMsgReply?: ((id: number) => void) | undefined;
    onMsgForward?: ((id: number) => void) | undefined;
}) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isHover, bind] = useHover({
        onChange: (v) => {
            if (!v) setMenuOpen(v);
        },
    });
    const { position, handleContextMenu, closeMenu } = useContextMenu();

    const senderInfo = (
        <div style={{ alignItems: "end", display: "flex" }}>
            <span className={styles.username}>{data.author.displayName}</span>
            <span className={styles.date}>
                {formatDateTime(data.created_at)}
            </span>
        </div>
    );

    const onCopy = async () => {
        await navigator.clipboard.writeText(data.text);
        toast.success("Текст скопирован!", {
            position: "bottom-center",
            autoClose: 3000,
        });
    };

    const onDelete = () => onMsgDelete?.(data.id);
    const onEdit = () => onMsgEdit?.(data.id);
    const onReply = () => onMsgReply?.(data.id);
    const onForward = () => onMsgForward?.(data.id);

    const baseActions = {
        onEdit,
        onReply,
        onForward,
    };

    const menuProps = {
        onCopy,
        onDelete,
        ...{ baseActions },
    };

    return (
        <div
            className={styles.msgwrapper}
            {...bind}
            onContextMenu={handleContextMenu}
            onClick={closeMenu}
        >
            {showInfo ? (
                <img
                    src={data.author.avatar}
                    className={styles.avatar}
                    alt="avatar"
                />
            ) : (
                <div
                    className={styles.date}
                    style={{
                        margin: "0 10px",
                        flex: "0 0 40px",
                    }}
                >
                    {isHover && formatDateTime(data.created_at, true)}
                </div>
            )}

            <div
                className={styles.contentWrapper}
                style={showInfo ? {} : { minHeight: 0 }}
            >
                {showInfo && senderInfo}
                <p className={styles.text}>{data.text}</p>
            </div>
            {isHover && (
                <FastActionsMenu
                    onExtend={() => setMenuOpen(!isMenuOpen)}
                    owned={owned}
                    isMenuOpen={isMenuOpen}
                    {...baseActions}
                    menuProps={menuProps}
                />
            )}
            {position && (
                <MessageActionsMenu
                    onTapOutside={() => closeMenu()}
                    positionProperties={{
                        left: position?.x,
                        top: position?.y,
                        position: "fixed",
                        zIndex: 10000,
                    }}
                    {...menuProps}
                />
            )}
        </div>
    );
};

export default Message;
