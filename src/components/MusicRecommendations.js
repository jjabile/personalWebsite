import React from 'react';

const MusicRecommendations = () => {
  const song = {
    title: "Baby Talk",
    artist: "Himiko Kikuchi",
  };

  return (
    <section id="music">
      <h2>Music Recommendation of the Day</h2>
      <p><strong>{song.title}</strong> by {song.artist}</p>
    </section>
  );
};

export default MusicRecommendations;
