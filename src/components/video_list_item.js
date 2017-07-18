import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
  // const video = props.video; this is identical to adding brackets inside the params of func
  const imageURL = video.snippet.thumbnails.default.url;
  const videoHeading = video.snippet.title;
  // console.log(video);


  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={ imageURL }/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            { videoHeading }
          </div>
        </div>

      </div>


    </li>);
};

export default VideoListItem;
