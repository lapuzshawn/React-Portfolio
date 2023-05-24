import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Project from '../pages/Project';
import Resume from '../pages/Resume';

// import './App.css';


/* 
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
*/ 

export default function PortfolioContainer() {
  /* 
  const [currentPage, setCurrentPage] = useState('AboutMe');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {  
      console.log(currentPage)
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
          return <Portfolio />;
      }
      return <Contact />;
      
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>

        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      );
      */

      return (

              <div>
              <Header />
    
            </div>

      );
  }