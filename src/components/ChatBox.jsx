import Message from "./Message";

const ChatBox = ({ chat }) => {
	return (
		<div
			className={`chat-box ${
				chat.messageList.length > 0 ? "" : "no-message"
			}`}>
			{chat.messageList.length > 0 ? (
				chat.messageList.map(messageObj => (
					<Message
						key={messageObj.timestamp}
						messageObj={messageObj}
					/>
				))
			) : (
				<p>Send a message to start chatting</p>
			)}
		</div>
	);
};
export default ChatBox;
