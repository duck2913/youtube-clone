import { Grid } from "@mui/material";
import axios from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { useState } from "react";

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState();

	async function getVideos(searchTerm) {
		const { data } = await axios.get("search", { params: { q: searchTerm } });
		setVideos(data.items);
		setSelectedVideo(data.items[0]);
	}

	return (
		<Grid container justifyContent="center">
			<Grid item xs={12}>
				<SearchBar onFormSubmit={getVideos} />
			</Grid>
			<Grid item xs={8} sx={{ height: 500 }}>
				<VideoDetail video={selectedVideo} />
			</Grid>
			<Grid item xs={4}>
				<VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
			</Grid>
		</Grid>
	);
}

export default App;
