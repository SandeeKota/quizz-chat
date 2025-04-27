export interface ChatMessageType {
    chatRoom: string;
    sender: string;
    content: string;
    createdAt: string;
    isSelf?: boolean;
}

let chatMessages: ChatMessageType[] = [
    {
        chatRoom: "661b43f2e8c9a8a4317a91a1", // chatRoomId
        sender: "661b42f7e8c9a8a4317a91a0", // userId
        content: "Hey, how are you?",
        createdAt: "2025-04-26T10:30:00Z"
    },
    {
        chatRoom: "661b43f2e8c9a8a4317a91a1",
        sender: "661b43c8e8c9a8a4317a91a2",
        content: "I'm good! How about you?",
        createdAt: "2025-04-26T10:31:00Z"
    },
    {
        chatRoom: "661b43f2e8c9a8a4317a91a1",
        sender: "661b42f7e8c9a8a4317a91a0",
        content: "Doing great! Let's catch up later?",
        createdAt: "2025-04-26T10:32:00Z"
    },
    {
        chatRoom: "661b43f2e8c9a8a4317a91a1",
        sender: "661b43c8e8c9a8a4317a91a2",
        content: "Sure! See you at 5 PM.",
        createdAt: "2025-04-26T10:33:00Z"
    },
    {
        chatRoom: "661b4411e8c9a8a4317a91a3",
        sender: "661b42f7e8c9a8a4317a91a0",
        content: "Hey are you coming to the event tomorrow?",
        createdAt: "2025-04-26T11:00:00Z"
    },
    {
        chatRoom: "661b4411e8c9a8a4317a91a3",
        sender: "661b441ee8c9a8a4317a91a4",
        content: "Yes bro, already registered!",
        createdAt: "2025-04-26T11:01:00Z"
    }
];

const ChatData: ChatMessageType[] = chatMessages.map((msg, index) => ({
    ...msg,
    isSelf: index % 2 !== 0  // odd index = true, even index = false
}));

export default ChatData;