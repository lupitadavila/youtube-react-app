import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // import an exported component
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUxWFDgKOVvQ0CnEvPiaH6I_W7HLcL_xU';

//  This is a functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>);
// };

// should be class component because data will be changing over time (with video search data)
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };

    this.videoSearch('cats')
  }

  videoSearch(term) {
    // sample search_bar
    YTSearch({ key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
      // line above is equiv to:
      //this.setState({ videos: videos });
      // you can do because key & property are ==
    });
  }

  // passing video prop with data from state
  render() {
    return(
      <div>
        <SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
        <div className="row">
          <VideoDetail video={this.state.currentVideo}/>
          <VideoList
            onVideoSelect= { currentVideo => this.setState({currentVideo} ) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
