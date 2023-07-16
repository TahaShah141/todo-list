import Dom from "./domManipulate.js";
import backend from "./backend.js";

function initializeBody() {
    let header = getHeader();
    let main = getMain();
    let footer = getFooter();

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

function getFooter() {
    let footer = Dom.newElement("div", "footer", "center");
    let text = Dom.newElement("p", "footer-text");

    text.textContent = "Copyright © 2023 Taha Shah";

    footer.appendChild(text);
    return footer;
}

function getHeader() {
    let header = Dom.newElement("div", "header");
    let companyBranding = Dom.newElement("div", "branding");
    let logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>progress-check</title><path d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M15.5,8.5L10.62,13.38L8.5,11.26L7.44,12.32L10.62,15.5L16.56,9.56L15.5,8.5M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37Z" fill="currentColor"/></svg>';

    companyBranding.innerHTML = `<h1>2Do</h1>${logo}`;

    header.appendChild(companyBranding);
    return header;
}

function getMain() {
    let main = Dom.newElement("div", "main");

    let projects = Dom.newElement("div", "projects");
    let addButton = Dom.newElement("div", "add-button");

    main.appendChild(projects);
    main.appendChild(addButton);

    return main;
}

function getProject(obj, projectName) {
    let project = Dom.newElement("div", "project");

    let content = Dom.newElement("div", "project-content");
    let name = Dom.newElement("p", "project-name");
    name.textContent = `${projectName}`
    let buttons = getProjectButtons();
    content.appendChild(name);
    content.appendChild(buttons);

    project.appendChild(content);
    project.addEventListener("click", () => backend.openProject(obj));
    return project;
}

function getProjectButtons() {
    let buttons = Dom.newElement("div", "project-buttons");
    let expand = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>select-remove</title><path d="M21 20C21 20.55 20.55 21 20 21H19V19H21V20M15 21V19H17V21H15M11 21V19H13V21H11M7 21V19H9V21H7M4 21C3.45 21 3 20.55 3 20V19H5V21H4M3 15H5V17H3V15M21 15V17H19V15H21M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8M3 11H5V13H3V11M21 11V13H19V11H21M3 7H5V9H3V7M21 7V9H19V7H21M4 3H5V5H3V4C3 3.45 3.45 3 4 3M20 3C20.55 3 21 3.45 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7Z" fill="currentColor"/></svg>'

    buttons.innerHTML = `${expand}`;

    return buttons;
}

export default {initializeBody, getProject};