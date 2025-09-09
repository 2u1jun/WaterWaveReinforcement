// This file contains JavaScript code for interactivity and dynamic content on the website.

document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch projects from the JSON file
    const fetchProjects = async () => {
        try {
            const response = await fetch('./data/projects.json');
            const projects = await response.json();
            displayProjects(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    // Function to display projects on the profile page
    const displayProjects = (projects) => {
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    };

    // Initialize the portfolio by fetching projects
    fetchProjects();
});