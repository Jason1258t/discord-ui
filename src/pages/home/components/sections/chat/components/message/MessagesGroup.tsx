import Message from "./Message";
import formatDate from "utils/formatDate";
import { MessageGroup as MessageGroupData } from "models/messageGroup";

const MessagesGroup = ({ group }: { group: MessageGroupData }) => {
    return (
        <div style={{ marginBottom: 8 }} key={group.id}>
            {group.showDate && (
                <Title info={formatDate(group.messages[0].createdAt)} />
            )}
            <Message data={group.messages[0]} showInfo={true} />
            {group.messages.slice(1).map((e) => (
                <Message data={e} showInfo={false} />
            ))}
        </div>
    );
};

export default MessagesGroup;

const Title = ({ info }: { info: string }) => {
    const lineStyle = {
        height: 1,
        background: "rgba(148, 155, 164, 0.4)",
        borderRadius: 0.5,
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
