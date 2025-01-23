import React from 'react';
import designProjectImage from '../assets/images/design_project.jpg'; 
import puzzleToyImage from '../assets/images/puzzle_toy.jpg'; 
import digitalLibraryImage from '../assets/images/digital_library.jpg'; 
import rabbitHouseImage from '../assets/images/rabbit_house.jpg'; 

const Projects = () => {
  const projects = [
    {
      title: "161 Design Project",
      image: designProjectImage,
      description: (
        <>
          <p>A project focused on connecting the Waterloo community with the moon and stars.</p>
          <p>Involved designing a creative way to engage people in stargazing and astronomy.</p>
        </>
      ),
    },
    {
      title: "101L Puzzle Toy",
      image: puzzleToyImage,
      description: (
        <>
          <p>Developed a fun and interactive puzzle toy to challenge users of all ages.</p>
          <p>Learned about prototyping and iterative design during the process.</p>
        </>
      ),
    },
    {
      title: "121 Digital Library",
      image: digitalLibraryImage,
      description: (
        <>
          <p>Created a digital library system to streamline access to books and resources.</p>
          <p>Focused on user experience and database integration.</p>
        </>
      ),
    },
    {
      title: "Honey Comb Rabbit House",
      image: rabbitHouseImage,
      description: (
        <>
          <p>Designed a honeycomb-shaped rabbit house combining functionality and aesthetics.</p>
          <p>Used SolidWorks to model the design and ensure durability.</p>
        </>
      ),
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              width: '250px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
            />
            <h3>{project.title}</h3>
            {project.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
