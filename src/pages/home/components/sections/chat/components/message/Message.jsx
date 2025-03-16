/* eslint-disable jsx-a11y/alt-text */
import "./Message.css";

const Message = ({ data }) => {
    console.log(data);
    return (
        <div className="msgwrapper">
            <img src={data.author.avatar} className="avatar" />
            <div>
                <p className="username">{data.author.display_name}</p>
                <p className="text">{data.text}</p>
            </div>
        </div>
    );
};

export default Message;
