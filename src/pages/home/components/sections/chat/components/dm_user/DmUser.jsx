import DmNavigation from '../dm_navigation/DmNavigation'
import './styles.css'

const DmUser = ({data}) => {
    return (
        <div className="dmuserwrapper">
            <img src={data.user.avatar} alt="logo" className="userlogo" />
            <p className="username">{data.user.display_name}</p>
            <DmNavigation />
        </div>
    )
}

export default DmUser