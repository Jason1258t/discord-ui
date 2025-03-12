import { useState } from 'react'
import './styles.css'
import { TestModels } from '../../../../../../../models/models'
const models = new TestModels()

const MessageField = ({ addMessage }) => {
    const [message, setMessage] = useState('')

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            let t = models.message
            t['text'] = message
            if (message.trim()) {
                addMessage(t);
                setMessage('');
            }
            console.log(t)
        }}
        className='messageform'
        >
            <input type="text" className="messagefield"
                value={message}
                onChange={(event) => {setMessage(event.target.value)}}
            />
        </form>
    )
}

export default MessageField