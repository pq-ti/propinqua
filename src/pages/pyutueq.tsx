import React from 'react';
import Layout from '../components/layout';

import { Grid } from '@material-ui/core';

import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';
// import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from '../api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit('フライトシミュレータ');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    console.log('YOUTUBE_API_KEY：' + process.env.REACT_APP_YOUTUBE_API_KEY);
    return (
      <Layout>
        <VideoDetail video={selectedVideo} />
        <SearchBar onFormSubmit={this.handleSubmit} />
        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      </Layout>
      // <Grid justify="center" container spacing={10}>
      //   <Grid item xs={12}>
      //     <Grid container spacing={10}>
      //       <Grid item xs={12}>
      //         <SearchBar onFormSubmit={this.handleSubmit} />
      //       </Grid>
      //       <Grid item xs={8}>
      //         <VideoDetail video={selectedVideo} />
      //       </Grid>
      //       <Grid item xs={4}>
      //         <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </Grid>
    );
  }
}

export default App;
