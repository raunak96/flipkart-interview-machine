import { useState } from "react";

const ChatInput = ({ setData, data, chat }) => {
	const [input, setInput] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		setData(prev => {
			const message = prev.find(cht => cht.id === chat.id);
			const chats = prev.map(ch => {
				if (ch.id !== chat.id) return ch;
				message.messageList = [
					...message.messageList,
					{
						message: input,
						messageType: "text",
						sender: "USER",
						timestamp: new Date().valueOf(),
						messageId: `msg${message.messageList.length + 1}`,
					},
				];
				return message;
			});
			return chats;
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Type a message"
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button>Send</button>
		</form>
	);
};
export default ChatInput;
