import React from 'react';
import Thx from '../../lib/thx';

// import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img
        style={{ marginRight: '20px' }}
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <Thx>{video.snippet.title}</Thx>
    </div>
    // <Grid item xs={12}>
    //   <Paper
    //     style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    //     onClick={() => onVideoSelect(video)}
    //   >
    //     <img
    //       style={{ marginRight: '20px' }}
    //       alt="thumbnail"
    //       src={video.snippet.thumbnails.medium.url}
    //     />
    //     <Typography variant="subtitle1">
    //       <b>{video.snippet.title}</b>
    //     </Typography>
    //   </Paper>
    // </Grid>
  );
};

export default VideoItem;