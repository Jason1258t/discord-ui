import Row from "../../../../../../../../components/wrappers/row";
import DmNavigation from "../../dm_navigation/DmNavigation";
import "./styles.css";

const DmUserShortInfo = ({ data }) => {
    return (
        <div className="dmuserwrapper">
            <Row>
                <img src={data.user.avatar} alt="logo" className="avatar" />
                <p className="username">{data.user.display_name}</p>
            </Row>
            <DmNavigation />
        </div>
    );
};

export default DmUserShortInfo;
