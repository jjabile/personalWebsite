import React, {useEffect} from "react";
import "./MusicRecommendations.css"; // Style this component
import albumCover from "../assets/images/album-cover.jpg"; // Replace with your album cover image path

const MusicRecommendations = () => {
  return (

    <div className="music-recommendation">
        <h2 className="header-title">Song of the Day</h2>
      <div className="recommendation-container">
        <div className="album-section">
          <img src={albumCover} alt="Album Cover" className="cover-image" />
        </div>
        <div className="text-section">
          <h3 className="song-title">Baby Talk</h3>
          <p className="artist-name">Himuki Kikuichi</p>
          <p className="recommendation-reason">
            Funk Banger. If you're ready for some nasty solos and good energy, give this one a listen
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicRecommendations;
