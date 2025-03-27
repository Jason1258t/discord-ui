import styles from './MessageActions.module.css';


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
            <img src={asset} alt="" />
        </div>
    );
};

export default Action;