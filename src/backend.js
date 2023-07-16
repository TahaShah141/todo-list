import Dom from "./domManipulate.js";
import layout from "./layout.js";
import prj from "./projects.js";

function addProject(name) {
    let container = document.querySelector(".projects");
    let newProject = new prj.Project(name);
    prj.projects.push(newProject);
    container.appendChild(newProject.dom);
}

function openProject(project) {
    console.log(project);
}

export default {addProject, openProject};