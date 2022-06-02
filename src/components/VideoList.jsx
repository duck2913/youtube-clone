import React from "react";
import VideoItem from "./VideoItem";
import { Stack } from "@mui/material";

const VideoList = ({ videos, setSelectedVideo }) => {
	return (
		<Stack>
			{videos.map((video) => (
				<div onClick={() => setSelectedVideo(video)}>
					<VideoItem
						thumbnailSrc={video.snippet.thumbnails.high.url}
						channel={video.snippet.channelTitle}
						title={video.snippet.title}
					/>
				</div>
			))}
		</Stack>
	);
};

export default VideoList;
