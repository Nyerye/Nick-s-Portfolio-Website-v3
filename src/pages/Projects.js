import React from 'react';
import './Projects.css'; // Import Projects-specific styles

const projects = [
  {
    title: "Personal Site (HTML,CSS,JavaScript,NodeJS)",
    description: "This website was made by me in HTML, CSS and JavaScript. Feel free to inspect the page or go to the repo listed here.",
    github: "https://github.com/Nyerye/Nick-s-Portfolio-Webiste-v3"
  },
  {
    title: "Conestoga Notification System v2 (Python,Flask,Tkinter)",
    description: "A system I made and pitched to Conesotga College to replace a system and target devices for critical information.",
    github: "https://github.com/Nyerye/Conestoga-Notification-System"
  },
  {
    title: "Student Management Console Application (C/C++)",
    description: "System I made in first year of college that manages students in struct arrays. Read and writes data from files.",
    github: "https://github.com/Nyerye/C-Student-Management-System"
  },
  {
    title: "C# Calculator",
    description: "A simple but fun project. Just to showcase use of coding UI/UX for applications.",
    github: "https://github.com/Nyerye/CSharp-.NET-Calculator"
  },
  {
    title: "PowerShell System Resource Logger",
    description: "Capture and report system hardware usages with date timestamps for referenceing. Great for server monitoring.",
    github: "hhttps://github.com/Nyerye/PowerShell-System-Resource-Logger"
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="repo-button">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
