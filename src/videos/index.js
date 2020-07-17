import React from 'react';
import './styles.scss';
import {videosList} from '../data/videos'

const Videos = () => {
  return (
    <div>
      <h2 className="main_subtitle">Videos</h2>
      <div className="videos-container">
        {videosList.map(video => (
          <div key={video.id}>
            <p>{video.title}</p>
            <iframe class="video" title={video.title} src={video.src} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p>Tags: </p>
            <ul>
              {video.tags.map(tag => <li>{tag}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
