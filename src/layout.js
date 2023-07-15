import Dom from "./DomManipulate";
import backend from "./backend";

const toDoLogo = '<svg id="toDoLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>list-box-outline</title><path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" fill="currentColor"/></svg>'
const addButtonLogo = '<svg id="addButtonLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shape-square-plus</title><path d="M19,5H22V7H19V10H17V7H14V5H17V2H19V5M17,19V13H19V21H3V5H11V7H5V19H17Z" fill="currentColor"/></svg>'

function initializeBody() {
    const body = document.body;
    
    const header = initializeHeader();

    const sidepane = initializeSide();

    const main = initializeMain();

    body.appendChild(header);
    body.appendChild(sidepane);
    body.appendChild(main);
}

function initializeHeader() {
    let header = Dom.newElement("div", "header", "center");
    return header;
}

function initializeSide() {
    let side = Dom.newElement("div", "sidepane");
    
    let heading = Dom.newElement("div", "title-container", "center");
    heading.innerHTML = `${toDoLogo}<h1>ToDo</h1>`;

    side.appendChild(heading);
    return side;
}

function initializeMain() {
    let main = Dom.newElement("div", "main");

    let addBtn = Dom.newElement("button", "project", "add-button", "center");
    addBtn.addEventListener("click", backend.addProject);
    addBtn.innerHTML = `${addButtonLogo}<p>Add Project</p>`;

    let projects = Dom.newElement("div", "projects-container");
    let defaultProject = Dom.newElement("div", "project");

    projects.appendChild(defaultProject);
    main.appendChild(projects);
    main.appendChild(addBtn);
    return main;
}

export default {initializeBody};