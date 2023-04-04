import ChatBox from "./ChatBox";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const RightUi = ({ chat, setData, data }) => {
	return (
		<div className="right">
			<ChatHeader image={chat.imageURL} heading={chat.title} />
			<ChatBox chat={chat} />
			<ChatInput setData={setData} data={data} chat={chat} />
		</div>
	);
};
export default RightUi;
