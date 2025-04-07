import { Attachment } from "@models/attachment";
import styles from "./AttachmentGrid.module.css";

const AttachmentGrid = ({ attachments }: { attachments: Attachment[] }) => {
    const visibleAttachments = attachments.slice(0, 4);
    const remainingCount = attachments.length - 4;

    const gridClass =
        styles[`grid${Math.min(attachments.length, 4)}`] || styles.grid1;

    return (
        <div className={`${styles.grid} ${gridClass}`}>
            {visibleAttachments.map((att, index) => (
                <div key={att.id} className={styles.imageWrapper}>
                    <img
                        src={att.src}
                        alt={`attachment-${att.id}`}
                        className={styles.image}
                    />
                    {index === 3 && remainingCount > 0 && (
                        <div className={styles.overlay}>+{remainingCount}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AttachmentGrid;
