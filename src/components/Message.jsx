import OptionedMessage from "./OptionedMessage";

const Message = ({ messageObj, setData, chat }) => {
	return (
		<div
			className={`message ${messageObj.sender === "BOT" ? "" : "human"}`}>
			{messageObj.messageType === "optionedMessage" ? (
				<OptionedMessage
					messageObj={messageObj}
					setData={setData}
					chat={chat}
				/>
			) : (
				<div className="op-div">
					<p>{messageObj.message}</p>
					<span className="timestamp">
						{new Date(messageObj.timestamp).toLocaleTimeString()}
					</span>
				</div>
			)}
		</div>
	);
};
export default Message;
