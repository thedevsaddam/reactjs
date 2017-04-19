import React, {Component} from 'react';


export default class VideoListItem extends Component {

    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        return (
            <li
                key={video.id.videoId}
                className="video-list-item"
                onClick={ () => onVideoSelect(video)}
            >
                <img src={video.snippet.thumbnails.medium.url}
                     alt={video.snippet.title}
                     className="img-thumbnail"
                />
                <br/>
                <span>{this.props.video.snippet.title}</span>
                <hr/>
            </li>
        );
    }
}
