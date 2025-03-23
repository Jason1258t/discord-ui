import React from "react";
import Message from "./Message";
import formatDate from "../../../../../../../utils/formatDate";

const MessagesGroup = ({ group }) => {
    const messages = group.messages;
    console.log(group);
    const groupTitle = group.showDate && (
        <Title info={formatDate(group.messages[0].created_at)} />
    );
    console.log(groupTitle);
    return (
        <div style={{ marginBottom: 8 }} key={group.id}>
            {groupTitle}
            <Message data={messages[0]} showInfo={true} />
            {messages.slice(1).map((e) => (
                <Message data={e} showInfo={false} />
            ))}
        </div>
    );
};

export default MessagesGroup;

const Title = ({ info }) => {
    const lineStyle = {
        height: 1,
        background: "rgba(148, 155, 164, 0.4)",
        flex: 1,
        margin: "0 8px",
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                color: "#949BA4",
                fontSize: 12,
                margin: "24px 0",
            }}
        >
            <div style={lineStyle} />
            {info}
            <div style={lineStyle} />
        </div>
    );
};
