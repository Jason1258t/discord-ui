import { Message as MessageData } from "@models/message";
import styles from "./ReplyContainer.module.css";
import { ReactComponent as ReplyArrow } from "assets/icons/arrow-uturn-left.svg";

const ReplyContainer = ({ msg }: { msg: MessageData }) => {
    return (
        <div className={styles.replyContainer}>
            <ReplyArrow className={styles.replyArrow} />
            <img src={msg.author.avatar} className={styles.replyAvatar} alt={msg.author.displayName}/>
            <p className={styles.replyAuthorName}>{msg.author.displayName}</p>
            <p className={styles.replyContent}>{msg.text}</p>
        </div>
    );
};

export default ReplyContainer;