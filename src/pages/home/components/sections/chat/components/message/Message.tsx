import styles from "./Message.module.css";
import formatDateTime from "../../../../../../../utils/formatDateTime";
import useHover from "../../../../../../../hooks/useHover";
import useContextMenu from "../../../../../../../hooks/useContextMenu";
import { useState } from "react";

import pencil from "./src/pencil.svg";
import arrowRight from "./src/arrow-uturn-right.svg";
import arrowLeft from "./src/arrow-uturn-left.svg";
import more from "./src/elipsis-horizontal.svg";
import FastAction from "./FastAction";

import { Message as MessageData } from "@models/message";
import MessageActionsMenu from "./actions_overlay/MessageActionsMenu";

const Message = ({
    data,
    showInfo,
    owned = true,
}: {
    data: MessageData;
    showInfo: boolean;
    owned?: boolean;
}) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isHover, bind] = useHover({
        onChange: (v) => {
            if (!v) setMenuOpen(v);
        },
    });
    const { position, menuRef, handleContextMenu, closeMenu } =
        useContextMenu();

    const senderInfo = (
        <div style={{ alignItems: "end", display: "flex" }}>
            <span className={styles.username}>{data.author.display_name}</span>
            <span className={styles.date}>
                {formatDateTime(data.created_at)}
            </span>
        </div>
    );

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
                <div className={styles.fastActions}>
                    {owned && (
                        <FastAction
                            asset={pencil}
                            alt="edit"
                            hint="Редактировать"
                        />
                    )}
                    <FastAction asset={arrowLeft} alt="reply" hint="Ответить" />
                    <FastAction
                        asset={arrowRight}
                        alt="forward"
                        hint="Переслать"
                    />
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            background: "#949ba4",
                            borderRadius: 1,
                            margin: "auto 4px",
                        }}
                    />
                    <FastAction
                        asset={more}
                        alt="more"
                        hint="Развернуть"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    />
                    {isMenuOpen && (
                        <MessageActionsMenu
                            positionProperties={{
                                bottom: "100%",
                                right: 0,
                                position: "absolute",
                            }}
                        />
                    )}
                </div>
            )}
            {position && (
                <MessageActionsMenu
                    // menuRef={menuRef}
                    onTapOutside={() => closeMenu()}
                    positionProperties={{
                        left: position?.x,
                        top: position?.y,
                        position: "fixed",
                        zIndex: 10000,
                    }}
                />
            )}
        </div>
    );
};

export default Message;
