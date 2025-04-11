import {Attachment} from "@models/attachment";
import styles from "./AttachmentGrid.module.css";
import {useState} from "react";
import AttachmentsOverlay from "./AttachmentsOverlay";

const AttachmentGrid = ({attachments}: { attachments: Attachment[] }) => {
    const visibleAttachments = attachments.slice(0, 4);
    const remainingCount = attachments.length - 4;

    const gridClass =
        styles[`grid${Math.min(attachments.length, 4)}`] || styles.grid1;

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const openOverlay = (ind: number) => {
        setOverlayVisible(true);
        setStartIndex(ind);
    }

    return (
        <>
            <div className={`${styles.grid} ${gridClass}`}>
                {visibleAttachments.map((att, index) => (
                    <div key={att.id} className={styles.imageWrapper}>
                        <img
                            src={att.src}
                            alt={`attachment-${att.id}`}
                            className={styles.image}
                            onClick={() => {
                                openOverlay(index)
                            }}
                        />
                        {index === 3 && remainingCount > 0 && (
                            <div className={styles.overlay}>+{remainingCount}</div>
                        )}
                    </div>
                ))}
            </div>
            {isOverlayVisible &&
                <AttachmentsOverlay startIndex={startIndex} close={() => setOverlayVisible(false)}
                                    images={attachments}/>}
        </>
    );
};

export default AttachmentGrid;