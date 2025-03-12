import './styles.css'
import { useEffect, useState, useCallback, useMemo } from 'react';
import MessageField from './components/message_field/MessageField';
import { TestModels } from '../../../../../models/models'
import MessagesList from './components/message_field/components/messages_list/MessagesList';
import DmUserShortInfo from './components/dm_user/short_info/DmUser'
import DmUserFullInfo from './components/dm_user/full_info/dn_user_full'

const Chat = ({ data }) => {
    const [messages, setMessages] = useState([])

    const addMessage = (msg) => {
        if (msg['text'].trim()) {
          setMessages(prev => [...prev, msg]);
        }
      };

    // useEffect(() => {
        
    // }, [])   

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
