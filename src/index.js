import "./style.css";
import { projectList, addProject } from "./todo.js";
let currentProject = "Inbox";

function header() {
  const body = document.querySelector("body");
  const element = document.createElement("header");
  element.innerHTML = "TodaLoo";
  body.appendChild(element);
}

function sidebar() {
  const existedSidebar = document.querySelector(".sidebar");

  const element = document.createElement("div");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-btn");
  addProjectBtn.innerHTML = "Add Project";
  element.classList.add("sidebar");

  let sidebarProjects = "";
  for (const project in projectList) {
    sidebarProjects += `<div project="${
      projectList[project].name
    }"class="project ${
      currentProject == projectList[project].name ? "active" : ""
    }">${project}</div>`;
  }

  addProjectBtn.addEventListener("click", () => {
    const newProject = prompt("Enter new project name");
    if (newProject) {
      addProject(newProject);
      let sidebarProjects = "";
      for (const project in projectList) {
        sidebarProjects += `<div project="${
          projectList[project].name
        }"class="project ${
          currentProject == projectList[project].name ? "active" : ""
        }">${project}</div>`;
      }
      element.innerHTML = sidebarProjects;
      element.appendChild(addProjectBtn);
    }
  });
  element.innerHTML = sidebarProjects;
  element.appendChild(addProjectBtn);

  if (!existedSidebar) {
    return element;
  }

  existedSidebar.replaceWith(element);
}

function content() {
  const element = document.createElement("div");
  const title = document.createElement("div");
  title.classList.add("content-title");
  element.classList.add("content");
  title.innerHTML = "Inbox";
  element.appendChild(title);
  return element;
}

function mainGrid() {
  const body = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("main-grid");
  body.appendChild(element);
  element.appendChild(sidebar());
  element.appendChild(content());
}

function populateContentByProjectTodo() {
  const contentElement = document.querySelector(".content");
  const currentProject = document.querySelector(".current-project");
  const currentProjectName = currentProject.innerHTML;
  const currentProjectTodoList = projectList[currentProjectName].todoList;

  let todoList = "";
  for (const todo of currentProjectTodoList) {
    todoList += `<div class="todo">${todo.title}</div>`;
  }

  contentElement.innerHTML = todoList;
}

header();
mainGrid();

const mainGridElement = document.querySelector(".main-grid");

mainGridElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("project")) {
    const previousActiveProject = document.querySelector(".active");
    if (previousActiveProject) {
      previousActiveProject.classList.remove("active");
    }
    currentProject = e.target.getAttribute("project");
    console.log(currentProject);
    e.target.classList.add("active");
    const contentTitleElement = document.querySelector(".content-title");
    contentTitleElement.innerHTML = e.target.innerHTML;
  }
});
