import React from "react";
import Message from "./Message";

const MessagesGroup = ({ messages }) => {
    return (
        <div >
            <Message data={messages[0]} showInfo={true} />
            {messages.slice(1).map((e) => (
                <Message data={e} showInfo={false} />
            ))}
        </div>
    );
};

export default MessagesGroup;
