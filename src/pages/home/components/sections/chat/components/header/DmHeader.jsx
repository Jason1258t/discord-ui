import Row from "../../../../../../../components/wrappers/row";
import DmNavigation from "../dm_navigation/DmNavigation";
import styles from  "./DmHeader.module.css";

const DMHeader = ({ data }) => {
    return (
        <div className={styles.headerWrapper}>
            <Row>
                <img src={data.user.avatar} alt="logo" className={styles.avatar} />
                <p className={styles.username}>{data.user.display_name}</p>
            </Row>
            <DmNavigation />
        </div>
    );
};

export default DMHeader;
