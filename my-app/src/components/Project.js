import React from 'react';

function Project({ title, image, description, deployedLink, githubLink }) {
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
