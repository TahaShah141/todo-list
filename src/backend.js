import Dom from "./DomManipulate";

const projects = [];

class Project {
    constructor(name) {
        this.name = name;
    }
}

function addProject(projectName, priority=0) {
    let newProject = Dom.newElement("div", "project");
    let color = (priority === 0? "green" : priority === 1 ? "yellow" : "red");
    newProject.style["border-left"] = `10px solid ${color}`;
    let name = Dom.newElement("p", "project-name");
    let buttons = projectButtons();
    name.textContent = projectName;
    newProject.appendChild(name);
    newProject.appendChild(buttons);


    let container = document.querySelector(".projects-container");
    container.appendChild(newProject);

    projects.push(new Project(name));
}

function projectButtons() {
    let done = '<svg class="project-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-outline</title><path d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" fill="currentColor"/></svg>'
    let del = '<svg class="project-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" fill="currentColor"/></svg>'
    let expand = '<svg class="project-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" fill="currentColor"/></svg>'
    
    let buttons = Dom.newElement("div", "project-buttons");
    buttons.innerHTML = `${done}${del}${expand}`; 
    return buttons;
}

function openForm() {
    this.classList.toggle("expanded");
}

export default {addProject, openForm};