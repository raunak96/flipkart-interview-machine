const ChatHeader = ({ image, heading }) => {
	return (
		<div className="chat-header">
			<img src={image} alt="heading" height={30} width={30} />
			<h2>{heading}</h2>
		</div>
	);
};
export default ChatHeader;
