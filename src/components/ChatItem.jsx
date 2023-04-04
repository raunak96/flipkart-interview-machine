const ChatItem = ({ chat, selectChat, isActive = false }) => {
	return (
		<div
			className={`chat-item ${isActive ? "active" : ""}`}
			onClick={() => {
				selectChat(chat);
			}}>
			<img src={chat.imageURL} width={30} height={30} alt={chat.title} />
			<div className="chat-item-content">
				<h4>
					{chat.title}
					<p style={{ marginTop: "2px" }}>Order {chat.orderId}</p>
				</h4>
				{chat.messageList.length > 0 && (
					<span className="chat-item-msg">
						{chat.messageList[0].message.slice(0, 100)}
					</span>
				)}
			</div>
			<p className="timestamp">
				{new Date(chat.latestMessageTimestamp).toLocaleDateString()}
			</p>
		</div>
	);
};
export default ChatItem;
