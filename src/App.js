import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

function App() {
	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item xs={12}>
				<SearchBar />
			</Grid>
			<Grid item xs={8}>
				<VideoDetail />
			</Grid>
			<Grid item xs={4}>
				<VideoList />
			</Grid>
		</Grid>
	);
}

export default App;
