import React from 'react';



function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Deployed
        </a>
        <br></br>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;



/*function Project({ title, image, description, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Live
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}



export default Project;
*/

/* */ 


/*
function Project() {

  return (
    <section id="Project">
      <h2>Project</h2>
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

export default Project;
*/
