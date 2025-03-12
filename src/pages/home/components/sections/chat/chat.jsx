import './styles.css'
import { useEffect, useState, useCallback } from 'react';
import DmUser from './components/dm_user/DmUser';
import MessageField from './components/message_field/MessageField';
import { TestModels } from '../../../../../models/models'
import MessagesList from './components/message_field/components/messages_list/MessagesList';
const models = new TestModels()

const Chat = ({ data }) => {
    const [messages, setMessages] = useState([])

    const addMessage = async (msg) => {
        let t = messages
        t.push(msg)
        setMessages(t)
    }

    useEffect(() => {
        const t = async () => { 
            for (let i = 1; i < 10; i++){
                await addMessage(models.message)
            }
        }
        t()
        console.log(messages)
    }, [])

    return (
        <div className="chat">
            <div className="info">
                <DmUserShortInfo data={data} />
            </div>
            <div style={{ display: "flex", height: "100%" }}>
                <div style={{width: "100%"}}></div>
                <DmUserFullInfo />
            </div>
            <MessagesList data={messages} />
            <MessageField addMessage={addMessage} />
        </div>
    );
};

export default Chat;
