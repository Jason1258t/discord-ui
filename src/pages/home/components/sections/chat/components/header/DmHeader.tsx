import { DMChannel } from "@models/channel/dm_channel";
import Row from "../../../../../../../components/wrappers/row";
import DmNavigation from "../dm_navigation/DmNavigation";
import styles from "./DmHeader.module.css";

const DMHeader = ({ data }: { data: DMChannel }) => {
    return (
        <div className={styles.headerWrapper}>
            <Row>
                <img
                    src={data.user.avatar}
                    alt="logo"
                    className={styles.avatar}
                />
                <p className={styles.username}>{data.user.displayName}</p>
            </Row>
            <DmNavigation />
        </div>
    );
};

export default DMHeader;
