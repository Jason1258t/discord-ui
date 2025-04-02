import React, { useRef } from "react";
import styles from "./MessageActions.module.css";
import Action from "./Action";

import useTapOutside from "hooks/useTapOutside";

import pencil from "assets/icons/pencil.svg";
import arrowRight from "assets/icons/arrow-uturn-right.svg";
import arrowLeft from "assets/icons/arrow-uturn-left.svg";
import trash from "assets/icons/trash.svg";
import copy from "assets/icons/copy.svg";

const MessageActionsMenu = ({
    positionProperties,
    onTapOutside = undefined,
    onCopy = undefined,
    onDelete = undefined,
    onEdit = undefined,
    onReply = undefined,
    onForward = undefined,
}: {
    positionProperties: React.CSSProperties;
    onTapOutside?: (() => void) | undefined;
    onCopy?: (() => void) | undefined;
    onDelete?: (() => void) | undefined;
    onEdit?: (() => void) | undefined;
    onReply?: (() => void) | undefined;
    onForward?: (() => void) | undefined;
}) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useTapOutside(menuRef, () => onTapOutside?.());

    return (
        <div
            className={styles.wrapper}
            style={positionProperties}
            ref={menuRef}
        >
            <Action title="Редактировать" asset={pencil} onClick={onEdit} />
            <Action title="Ответить" asset={arrowLeft} onClick={onReply} />
            <Action title="Переслать" asset={arrowRight} onClick={onForward} />
            <Action title="Копировать" asset={copy} onClick={onCopy} />
            <Action
                title="Удалить"
                asset={trash}
                isDestructive={true}
                onClick={onDelete}
            />
        </div>
    );
};

export default MessageActionsMenu;
