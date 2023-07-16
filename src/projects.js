import layout from "./layout";

const projects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.dom = layout.getProject(this, name);
    }
}

export default {projects, Project};