import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Video from './Video/Video';
import { VIDEOS } from './videos';
import backgroundVideo from './assets/background2.mp4';

function App() {
    const handleBackClick = () => {
      window.history.back();
    };

  return (
    <>
      <div className="background-container">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
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
    </>
  );
}

export default App;
