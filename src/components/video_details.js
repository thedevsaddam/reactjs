import React, {Component} from 'react';


export default class VideoDetails extends Component {

    render() {

        if(!this.props.video){
            return (<div>Loading videos...</div>);
        }

        const video = this.props.video;

        const videoId = video.id.videoId;
        const  url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <strong>{ video.snippet.title }</strong>
                    <br/>
                    <small className="text-muted">{ video.snippet.description }</small>
                </div>
            </div>
        );
    }
}
