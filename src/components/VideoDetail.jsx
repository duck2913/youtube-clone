import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
	if (!video)
		return (
			<Paper
				sx={{
					height: "88vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Loading...
			</Paper>
		);
	const videoSrc = `https:www.youtube.com/embed/${video?.id?.videoId}`;
	console.log(video);
	return (
		<>
			<Paper sx={{ height: "88vh", padding: "1rem" }}>
				<iframe
					src={videoSrc}
					frameBorder="0"
					title="Video Player"
					style={{ height: "80%", width: "100%" }}
				></iframe>
				<Typography variant="h6">
					{video.snippet.title} | {video.snippet.channelTitle}
				</Typography>
			</Paper>
		</>
	);
};

export default VideoDetail;
