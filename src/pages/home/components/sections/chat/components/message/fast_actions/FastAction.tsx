import React from "react";
import styles from "./FastActions.module.css";
import useHover from "../../../../../../../../hooks/useHover";

const FastAction = ({
    asset,
    hint,
    onClick = undefined,
    alt,
}: {
    asset: string;
    hint: string;
    onClick?: (() => void) | undefined;
    alt: string;
}) => {
    const [isHover, bind] = useHover();

    return (
        <div className={styles.action} onClick={onClick} {...bind}>
            <img src={asset} alt={alt} />
            {isHover && <div className={styles.hint}>{hint}</div>}
        </div>
    );
};

export default FastAction;
