import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";

import db from "../firebase";

function Note(props) {
	return (
		<div className="note">
			<h1>{props.todo.todo.title}</h1>
			<p>{props.todo.todo.content}</p>

			<button
				className="deleteBtn Btn1"
				onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
			>
				<DeleteIcon />
			</button>
			{/* <button className="editBtn Btn1">
				<EditIcon />
			</button> */}
		</div>
	);
}

export default Note;
