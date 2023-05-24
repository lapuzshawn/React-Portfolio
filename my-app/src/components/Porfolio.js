import React from 'react';
// import Project from './Project';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import './App.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.png',
      description: 'Description of Project 1',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      image: 'project2.png',
      description: 'Description of Project 2',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
