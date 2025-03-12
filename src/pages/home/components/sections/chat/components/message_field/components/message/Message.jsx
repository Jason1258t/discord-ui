/* eslint-disable jsx-a11y/alt-text */
import './styles.css'

const Message = ({ data }) => {
    return (
        <div className="msgwrapper">
            <img src={data.author.avatar} className="userlogo" />
            <p className="text">{ data.text }</p>
        </div>
    )
}

export default Message;