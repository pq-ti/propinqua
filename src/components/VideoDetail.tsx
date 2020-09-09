import React from 'react';
import Layout from '../components/layout';
import Thx from '../../lib/thx';

// import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="container mx-auto mt-2 break-words">
      <div className="youtube">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <Thx>
        <p className="mt-4">{video.snippet.title}</p>
        <p className="text-xs">チャンネル：{video.snippet.channelTitle}</p>
        <p className="text-xs">{video.snippet.description}</p>
      </Thx>
    </div>
    // <>
    //   <Paper elevation={6} style={{ height: '70%' }}>
    //     <iframe
    //       frameBorder="0"
    //       height="100%"
    //       width="100%"
    //       title="Video Player"
    //       src={videoSrc}
    //     />
    //   </Paper>
    //   <Paper elevation={6} style={{ padding: '15px' }}>
    //     <Typography variant="h4">
    //       {video.snippet.title} - {video.snippet.channelTitle}
    //     </Typography>
    //     <Typography variant="subtitle1">
    //       {video.snippet.channelTitle}
    //     </Typography>
    //     <Typography variant="subtitle2">{video.snippet.description}</Typography>
    //   </Paper>
    // </>
  );
};

export default VideoDetail;
