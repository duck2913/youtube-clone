import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [searchTerm, setSearchTerm] = useState("");

	function changeSearchTermHandler(event) {
		setSearchTerm(event.target.value);
	}

	function submitFormHandler(event) {
		event.preventDefault();
		onFormSubmit(searchTerm);
		setSearchTerm("");
	}

	return (
		<Paper
			elevation={6}
			sx={{
				padding: "1rem",
				borderRadius: 0,
				textAlign: "center",
			}}
		>
			<form onSubmit={submitFormHandler}>
				<SearchIcon sx={{ marginTop: "1rem", marginRight: "1rem" }} />
				<TextField
					id="standard-basic"
					label="Try to search for anything..."
					variant="standard"
					sx={{ width: "50vw", border: "1px solid #444" }}
					onChange={changeSearchTermHandler}
					value={searchTerm}
				/>
			</form>
		</Paper>
	);
};

export default SearchBar;
