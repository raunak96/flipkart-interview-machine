const OptionedMessage = ({ messageObj, chat, setData }) => {
	const handleMessage = () => {
		setData(prev => {
			const message = prev.find(cht => cht.id === chat.id);
			const chats = prev.map(ch => {
				if (ch.id !== chat.id) return ch;
				message.messageList = [
					...message.messageList,
					{
						message: "I want a callback",
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
		<>
			<p>{messageObj.message}</p>
			{messageObj.options.length > 0 && (
				<div className="opMsg">
					{messageObj.options?.map((op, ind) => (
						<div
							style={{ cursor: "pointer" }}
							key={ind}
							onClick={handleMessage}>
							<p>{op.optionText}</p>
							{op.optionSubText && (
								<span>{op.optionSubText}</span>
							)}
						</div>
					))}
				</div>
			)}
		</>
	);
};
export default OptionedMessage;
