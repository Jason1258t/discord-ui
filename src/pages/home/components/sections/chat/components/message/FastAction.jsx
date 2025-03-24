import React from "react";
import styles from "./FastAction.module.css";
import useHover from "../../../../../../../hooks/useHover";

const FastAction = ({ asset, hint, onClick = null, alt }) => {
    const [isHover, bind] = useHover();

    return (
        <div className={styles.action} onClick={onClick} {...bind}>
            <img src={asset} alt={alt} />
            {isHover && <div className={styles.hint}>{hint}</div>}
        </div>
    );
};

export default FastAction;
