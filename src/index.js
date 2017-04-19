import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';


const API_KEY = 'AIzaSyCurZHMQXmeCJ926h1i93WVGoYZHz_Es5U';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};
        this.videoSearch('alan walker faded');
    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (results) => {
            this.setState(
                {
                    videos: results,
                    selectedVideo: results[0]
                }
            ); //we can use object enhancement like using videos, but it fine for now
        });
    }

    render() {
        return (
            <div>

                <div className="text-lg-center text-md-center text-xs-center">
                    <span className="text-muted text-capitalize">
                        Welcome to  youtube master!
                    </span>
                </div>

                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />

                <VideoList videos={this.state.videos}/>
                <VideoDetails video={this.state.selectedVideo}/>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
