import { useMemo, useState } from "react";
import ChatFilter from "./ChatFilter";
import ChatItem from "./ChatItem";

const LeftUi = ({ chatList, selectChat, selectedChat }) => {
	const [input, setInput] = useState("");
	const filteredChatList = useMemo(() => {
		if (input === "") return chatList;
		return chatList.filter(
			list => list.title.includes(input) || list.orderId.includes(input)
		);
	}, [chatList, input]);
	return (
		<div className="left">
			<ChatFilter chatList={chatList} input={input} setInput={setInput} />
			<div className="chat-list">
				{filteredChatList.map(chat => (
					<ChatItem
						key={chat.id}
						chat={chat}
						selectChat={selectChat}
						isActive={selectedChat?.id === chat.id}
					/>
				))}
			</div>
		</div>
	);
};
export default LeftUi;
