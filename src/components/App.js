import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(response);
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container background">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
