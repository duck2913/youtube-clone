import React from "react";
import { Stack, Typography } from "@mui/material";

const VideoItem = ({ thumbnailSrc, title, channel }) => {
	return (
		<Stack direction="row" spacing={1} sx={{ padding: "1rem", cursor: "pointer" }}>
			<img src={thumbnailSrc} alt="video thumbnail" width={180} height={120} />
			<Stack>
				<Typography>{title}</Typography>
				<Typography variant="subheading2" sx={{ color: "#666" }}>
					{channel}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default VideoItem;
