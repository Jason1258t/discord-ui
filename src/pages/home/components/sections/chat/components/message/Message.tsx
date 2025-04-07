import styles from "./Message.module.css";

import formatDateTime from "utils/formatDateTime";
import useHover from "hooks/useHover";
import useContextMenu from "hooks/useContextMenu";
import useChatStore from "zustand/chat/chatStore";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Message as MessageData } from "@models/message";
import MessageActionsMenu from "./actions_overlay/MessageActionsMenu";
import FastActionsMenu from "./fast_actions/FastActionsMenu";
import ReplyContainer from "./reply_container/ReplyContainer";
import AttachmentGrid from "./attachments/AttachmentsGrid";

const Message = ({
    data,
    showInfo,
}: {
    data: MessageData;
    showInfo: boolean;
}) => {
    const replied = data.replyTo !== undefined;
    console.log(data);
    showInfo = showInfo || replied;
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
                {formatDateTime(data.createdAt)}
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

    const { deleteMessage, setEditMesssage, setReplyMessage } = useChatStore();

    const onDelete = () => deleteMessage(data.id);
    const onEdit = () => setEditMesssage(data.id);
    const onReply = () => setReplyMessage(data.id);
    const onForward = () => {
        console.log("forward this shit");
    };

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
        <div>
            {replied && <ReplyContainer msg={data.replyTo!} />}
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
                        {isHover && formatDateTime(data.createdAt, true)}
                    </div>
                )}

                <div
                    className={styles.contentWrapper}
                    style={showInfo ? {} : { minHeight: 0 }}
                >
                    {showInfo && senderInfo}
                    <pre className={styles.text}>{data.text}</pre>
                    {data.attachments && (
                        <AttachmentGrid attachments={data.attachments} />
                    )}
                </div>
                {isHover && (
                    <FastActionsMenu
                        onExtend={() => setMenuOpen(!isMenuOpen)}
                        owned={data.owned}
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
        </div>
    );
};

export default Message;
