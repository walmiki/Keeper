import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import db from "./firebase";

function App() {
	const [todos, setTodos] = useState([]);

	React.useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }))
				);
			});
	}, []);

	return (
		<div>
			<Header />
			<CreateArea />
			{todos.map((todo, index) => {
				return <Note key={index} todo={todo} />;
			})}
			<Footer />
		</div>
	);
}

export default App;
