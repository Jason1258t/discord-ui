import styles from './MessageActions.module.css';


export const Action = ({
    title,
    onClick = undefined,
    asset,
    isDestructive = false,
}: {
    title: string;
    onClick?: (() => void) | undefined;
    asset: string;
    isDestructive?: boolean;
}) => {
    return (
        <div
            onClick={onClick}
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