const ChatFilter = ({ input, setInput }) => {
	return (
		<header className="filter-header">
			<h2 className="filter-heading">Filter by Title / Order ID</h2>
			<input
				type="text"
				placeholder="Start typing to search"
				value={input}
				onChange={e => {
					setInput(e.target.value);
				}}
			/>
		</header>
	);
};
export default ChatFilter;
