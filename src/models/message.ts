interface Message {
    id: number;
    text: string;
    author: User;
    channel: Channel;
    created_at: Date;
}