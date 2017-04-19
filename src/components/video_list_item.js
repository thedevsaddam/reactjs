import React, {Component} from 'react';


export default class VideoListItem extends Component {

    render() {
        console.log(this.props.video);
        return (
            <li key={this.props.video.id.videoId} className="video-list-item">
                <img src={this.props.video.snippet.thumbnails.medium.url}
                     alt={this.props.video.snippet.title}
                     className="img-thumbnail"
                />
                <br/>
                <span>{this.props.video.snippet.title}</span>
                <hr/>
            </li>
        );
    }
}
