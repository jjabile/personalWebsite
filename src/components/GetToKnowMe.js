import React, { useState } from 'react';
import './GetToKnowMe.css';
import musicImage from '../assets/images/music.jpg';
import gamesImage from '../assets/images/games.jpg';
import engineeringImage from '../assets/images/engineering.jpg';
import mentalHealthImage from '../assets/images/mental_health.jpg';

const interests = [
  {
    name: 'Music',
    image: musicImage,
    description: `
      Band kid ALERT! I love MUSIC. Both playing and listening.
      Currently I know the guitar, trombone, and piano. I used to be in my high school's Jazz Band.
      My top artists right now are: Spotify tracker integration here.
    `,
  },
  {
    name: 'Games',
    image: gamesImage,
    description: `
      I love everything from board games to video games.
      Recently, I've been delving into learning Unity and C#.
      My favorite games right now are Minecraft Bedwars, Super Smash Bros. Melee, and Catan.
    `,
  },
  {
    name: 'Engineering',
    image: engineeringImage,
    description: `
      Building and designing solutions to real-world problems excites me.
      I love working on projects that challenge my creativity and technical skills.
    `,
  },
  {
    name: 'Mental Health',
    image: mentalHealthImage,
    description: `
      I advocate for self-care and spreading awareness about mental well-being.
      Everyone deserves to feel supported and valued.
    `,
  },
];

const GetToKnowMe = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="get-to-know-me">
      <h2>Get to Know Me</h2>
      <div className="bubbles-container">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bubble"
            onClick={() => toggleDropdown(index)}
          >
            <img src={interest.image} alt={interest.name} className="bubble-image" />
            <h3>{interest.name}</h3>
            {activeIndex === index && (
              <div className="dropdown">
                <p>{interest.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetToKnowMe;
