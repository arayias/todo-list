import "./style.css";

function header() {
  const body = document.querySelector("body");
  const element = document.createElement("header");
  element.innerHTML = "TodaLoo";
  body.appendChild(element);
}

function mainGrid() {
  const body = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("main-grid");
  body.appendChild(element);

  element.appendChild(sidebar());
  element.appendChild(content());
}

function sidebar() {
  const element = document.createElement("div");
  element.classList.add("sidebar");
  element.innerHTML = "Sidebar";
  return element;
}

function content() {
  const element = document.createElement("div");
  element.classList.add("content");
  element.innerHTML = "Content";
  return element;
}

header();
mainGrid();
