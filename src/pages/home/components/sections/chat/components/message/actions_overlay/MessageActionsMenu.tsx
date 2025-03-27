import React, { useRef } from "react";
import styles from "./MessageActions.module.css";
import Action from "./Action";

import useTapOutside from "hooks/useTapOutside";

import pencil from "../src/pencil.svg";
import arrowRight from "../src/arrow-uturn-right.svg";
import arrowLeft from "../src/arrow-uturn-left.svg";
import trash from "../src/trash.svg";
import copy from "../src/copy.svg";

const MessageActionsMenu = ({
    positionProperties,
    onTapOutside = undefined,
    onCopy = undefined,
    onDelete = undefined,
}: {
    positionProperties: React.CSSProperties;
    onTapOutside?: (() => void) | undefined;
    onCopy?: (() => void) | undefined;
    onDelete?: (() => void) | undefined;
}) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useTapOutside(menuRef, () => onTapOutside?.());

    return (
        <div
            className={styles.wrapper}
            style={positionProperties}
            ref={menuRef}
        >
            <Action
                title="Редактировать"
                asset={pencil}
                onClick={() => console.log("edit clicked")}
            />
            <Action
                title="Ответить"
                asset={arrowLeft}
                onClick={() => console.log("reply clicked")}
            />
            <Action
                title="Переслать"
                asset={arrowRight}
                onClick={() => console.log("forward clicked")}
            />

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
