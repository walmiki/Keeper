import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

import db from "../firebase";
import firebase from "firebase";

function CreateArea() {
	const [isExpanded, setExpanded] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		db.collection("todos").add({
			title: note.title,
			content: note.content,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}

				<textarea
					name="content"
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded}>
					<button onClick={submitNote}>
						<AddIcon />
					</button>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
