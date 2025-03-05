import './styles.css'
import DmUser from './components/dm_user/DmUser';
import DmNavigation from './components/dm_navigation/DmNavigation';

const Chat = ({data}) => {
    return (
        <div className="chat">
            <div className="info">
                <DmUser data={data} />
            </div>
        </div>
    )
}

export default Chat;