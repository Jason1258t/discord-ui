/* eslint-disable jsx-a11y/alt-text */
import "./Message.css";

const Message = ({ data }) => {
    return (
        <div className="msgwrapper">
            <img src={data.author.avatar} className="avatar" />
            <div style={{margin: "4px 0"}}>
                <p className="username">{data.author.display_name}</p>
                <p className="text">{data.text}</p>
            </div>
        </div>
    );
};

export default Message;
