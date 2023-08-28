import "./style.css";
import { projectList, addProject, addTodoItem, todoItem } from "./todo.js";
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
      localStorage.setItem("projectList", JSON.stringify(projectList));
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
  const contentTodo = document.createElement("div");
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  const dueDateInput = document.createElement("input");
  const priorityInput = document.createElement("select");
  const notesInput = document.createElement("input");
  const submitBtn = document.createElement("button");

  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Title");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("placeholder", "Description");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("placeholder", "Due Date");
  priorityInput.setAttribute("placeholder", "Priority");
  priorityInput.innerHTML = `
  <option value="0">Low</option>
  <option value="1">Medium</option>
  <option value="2">High</option>
  `;

  notesInput.setAttribute("type", "text");
  notesInput.setAttribute("placeholder", "Notes");
  submitBtn.setAttribute("type", "submit");
  submitBtn.innerHTML = "Add Todo";

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateInput);
  form.appendChild(priorityInput);
  form.appendChild(notesInput);
  form.appendChild(submitBtn);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodoItem(
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      priorityInput.value,
      notesInput.value,
      currentProject
    );
    form.reset();
    localStorage.setItem("projectList", JSON.stringify(projectList));
    populateContentByProjectTodo();
  });

  title.classList.add("content-title");
  contentTodo.classList.add("content-todo");
  element.classList.add("content");
  title.innerHTML = "Inbox";

  element.appendChild(title);
  element.appendChild(form);
  element.appendChild(contentTodo);
  return element;
}

function mainGrid() {
  const body = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("main-grid");
  body.appendChild(element);
  element.appendChild(sidebar());
  element.appendChild(content());
  populateContentByProjectTodo();
}

function populateContentByProjectTodo() {
  let todoList = "";
  const contentElement = document.querySelector(".content-todo");
  const currentProjectTodoList = projectList[currentProject].todoList;

  currentProjectTodoList.forEach((todo, i) => {
    todoList += `
    <div todo='${i}' class="todo">
    <div class="todo-title">${todo.title}</div>
    <div class="todo-description">${todo.description}</div>
    <div class="todo-due-date">${todo.dueDate}</div>
    <div class="todo-priority">${todo.priority}</div>
    <div class="todo-notes">${todo.notes}</div>
    <div class="todo-checklist">
      <input class="checklist" type="checkbox" name="checklist" id="checklist" 
      ${todo.checklist ? "checked" : ""}
      />
    </div>
    </div>`;
  });

  contentElement.innerHTML = todoList;

  const checklistElements = document.querySelectorAll(".checklist");
  checklistElements.forEach((checklistElement, i) => {
    checklistElement.addEventListener("click", () => {
      currentProjectTodoList[i].toggleChecklist();
    });
  });
}

header();
mainGrid();

const mainGridElement = document.querySelector(".main-grid");

mainGridElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("project")) {
    console.log(projectList);
    const previousActiveProject = document.querySelector(".active");
    if (previousActiveProject) {
      previousActiveProject.classList.remove("active");
    }
    currentProject = e.target.getAttribute("project");
    console.log(currentProject);
    e.target.classList.add("active");
    const contentTitleElement = document.querySelector(".content-title");
    contentTitleElement.innerHTML = e.target.innerHTML;
    populateContentByProjectTodo();
  }
});
