import "./App.css";
import { useEffect, useState } from "react";
import LeftUi from "./components/LeftUi";
import RightUi from "./components/RightUi";

const App = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://my-json-server.typicode.com/codebuds-fk/chat/chats"
				);
				if (!res.ok) throw new Error("Could not fetch data");
				const response = await res.json();
				console.log(response);
				setData(response);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="container">
			<LeftUi
				chatList={data}
				selectChat={setSelectedChat}
				selectedChat={selectedChat}
			/>
			{selectedChat && (
				<RightUi chat={selectedChat} setData={setData} data={data} />
			)}
		</div>
	);
};
export default App;
