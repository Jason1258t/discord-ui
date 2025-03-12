import Message from '../message/Message';
import './styles.css'

const MessagesList = ({ data }) => {
    return (
        <div className="msglistwrapper">
            {data.map((msg) => (
                <Message data={msg} />
            ))}
        </div>
    )
}

export default MessagesList;