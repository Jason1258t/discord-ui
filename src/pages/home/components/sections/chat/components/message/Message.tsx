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
import useChatStore from "zustand/chat/chatStore";
import { ReactComponent as ReplyArrow } from "assets/icons/arrow-uturn-left.svg";
import { InputReplyState } from "zustand/chat/inputState";

export const ReplyContainer = ({ msg }: { msg: MessageData }) => {
    return (
        <div className={styles.replyContainer}>
            <ReplyArrow className={styles.replyArrow}/>
            <img src={msg.author.avatar} className={styles.replyAvatar} />
            <p className={styles.replyAuthorName}>{msg.author.displayName}</p>
            <p className={styles.replyContent}>{msg.text}</p>
        </div>
    );
};

const Message = ({
    data,
    showInfo,
    owned = true,
}: {
    data: MessageData;
    showInfo: boolean;
    owned?: boolean;
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
        </div>
    );
};

export default Message;
