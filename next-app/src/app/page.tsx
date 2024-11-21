"use client";

import React from 'react';
import Video from './components/Video';
import { VIDEOS } from './data/videos';
import './styles/App.css';
import './styles/Video.css';
import './styles/index.css';

export default function Home() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <main>
      <div className="background-container">
        <video className="background-video" autoPlay loop muted>
          <source src="/background2.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      <div className="video-container">
        {VIDEOS.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            channelName={video.channelName}
            img={video.img}
          />
        ))}
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </main>
  );
}
