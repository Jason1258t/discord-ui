import React from "react";
import styles from "./MessageActions.module.css";

import pencil from "../src/pencil.svg";
import arrowRight from "../src/arrow-uturn-right.svg";
import arrowLeft from "../src/arrow-uturn-left.svg";
import trash from "../src/trash.svg";

export const Action = ({
    title,
    onClick = null,
    asset,
    isDestructive = false,
}: {
    title: string;
    onClick: (() => void) | null;
    asset: string;
    isDestructive?: boolean;
}) => {
    return (
        <div
            onClick={onClick ?? undefined}
            className={`${styles.action} ${
                isDestructive && styles.destructive
            }`}
        >
            {title}
            <img src={asset} alt=""/>
        </div>
    );
};

const MessageActions = ({
    positionProperties,
}: {
    positionProperties: React.CSSProperties;
}) => {
    return (
        <div className={styles.wrapper} style={positionProperties}>
            <Action
                title="Редактировать"
                asset={pencil}
                onClick={() => console.log("edit clicked")}
            />
            <Action
                title="Ответить"
                asset={arrowLeft}
                onClick={() => console.log("edit clicked")}
            />
            <Action
                title="Переслать"
                asset={arrowRight}
                onClick={() => console.log("edit clicked")}
            />
            <Action
                title="Удалить"
                asset={trash}
                isDestructive={true}
                onClick={() => console.log("edit clicked")}
            />
        </div>
    );
};

export default MessageActions;
