import styles from "./dm.module.css";

const Dm = ({ data, onClick, isSelected = false }) => {
    return (
        <div
            key={data.id}
            className={`${styles.wrapper} ${isSelected ? styles.active : ""}`}
            onClick={() => {
                onClick(data.id);
                console.log(data.id);
                console.log(`clicked on ${data.id}`);
            }}
        >
            <img
                src={data.user.avatar}
                alt="avatar"
                className={styles.avatar}
            />
            <div className={styles.contentWrapper}>
                <p
                    className={`${styles.p} ${styles.name} ${
                        isSelected ? styles.active : ""
                    }`}
                >
                    {data.user.display_name}
                </p>
                <p
                    className={`${styles.p} ${styles.lastMessage} ${
                        isSelected ? styles.active : ""
                    }`}
                >
                    {data.message ? data.message.text : "Начните общение"}
                </p>
            </div>
        </div>
    );
};

export default Dm;
