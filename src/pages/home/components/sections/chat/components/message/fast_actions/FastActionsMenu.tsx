import React, { ComponentProps } from "react";
import FastAction from "./FastAction";
import styles from "./FastActions.module.css";

import pencil from "../src/pencil.svg";
import arrowRight from "../src/arrow-uturn-right.svg";
import arrowLeft from "../src/arrow-uturn-left.svg";
import more from "../src/elipsis-horizontal.svg";
import MessageActionsMenu from "../actions_overlay/MessageActionsMenu";

type WithouPosProps = Omit<
    ComponentProps<typeof MessageActionsMenu>,
    "positionProperties"
>;

const FastActionsMenu = ({
    owned,
    onEdit,
    onReply,
    onForward,
    onExtend,
    menuProps,
    isMenuOpen,
}: {
    owned: boolean;
    onEdit: () => void;
    onReply: () => void;
    onForward: () => void;
    onExtend: () => void;
    menuProps: WithouPosProps;
    isMenuOpen: boolean;
}) => {
    return (
        <div className={styles.fastActions}>
            {owned && (
                <FastAction
                    asset={pencil}
                    alt="edit"
                    hint="Редактировать"
                    onClick={onEdit}
                />
            )}
            <FastAction
                asset={arrowLeft}
                alt="reply"
                hint="Ответить"
                onClick={onReply}
            />
            <FastAction
                asset={arrowRight}
                alt="forward"
                hint="Переслать"
                onClick={onForward}
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
                onClick={onExtend}
            />
            {isMenuOpen && (
                <MessageActionsMenu
                    {...menuProps}
                    positionProperties={{
                        bottom: "100%",
                        right: 0,
                        position: "absolute",
                    }}
                />
            )}
        </div>
    );
};

export default FastActionsMenu;
