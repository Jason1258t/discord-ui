import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {Attachment} from "@models/attachment";
import styles from "./AttachmentsOverlay.module.css";

const AttachmentsOverlay = ({startIndex, close, images}: {
    startIndex: number,
    close: () => void,
    images: Attachment[]
}) => {
    const galleryImages = images.map(img => ({
        original: img.src,
        thumbnail: img.src,
    }));

    return (
        <div className={styles.overlay} onKeyDown={(event) => {
            if (event.key === 'Escape') close();
        }} onClick={close}>
            <button onClick={close} className={styles.closeButton}>
                &times;
            </button>
            <div className={styles.galleryWrapper} onClick={(e) => {
                e.stopPropagation();
            }}>
                <ImageGallery
                    items={galleryImages}
                    startIndex={startIndex}
                    onScreenChange={close}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showPlayButton={false}
                    slideDuration={300}
                    renderItem={(item) => {
                        return <img src={item.original} alt={item.originalAlt}/>;
                    }}
                />
            </div>
        </div>
    );
};

export default AttachmentsOverlay;