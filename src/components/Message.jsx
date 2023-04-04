import OptionedMessage from "./OptionedMessage";

const Message = ({ messageObj }) => {
	return (
		<div
			className={`message ${
				messageObj.sender === "BOT"
					? messageObj.messageType === "optionedMessage"
						? "opMsg"
						: ""
					: "human"
			}`}>
			{messageObj.messageType === "optionedMessage" ? (
				<OptionedMessage messageObj={messageObj} />
			) : (
				<>
					<p>{messageObj.message}</p>
					<span className="timestamp">
						{new Date(messageObj.timestamp).toLocaleTimeString()}
					</span>
				</>
			)}
		</div>
	);
};
export default Message;
