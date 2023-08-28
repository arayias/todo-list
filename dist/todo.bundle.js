"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTodoItem: () => (/* binding */ addTodoItem),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   todoItem: () => (/* binding */ todoItem)
/* harmony export */ });
class project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addTodoItem(todoItem) {
    this.todoList.push(todoItem);
  }
}

class todoItem {
  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title ?? "New Todo";
    this.description = description ?? "";
    this.dueDate = dueDate ?? new Date();
    this.priority = priority ?? 0;
    this.notes = notes ?? "";
    this.checklist = false;
    this.project = project ?? "Inbox";
  }

  toggleChecklist() {
    this.checklist = !this.checklist;
  }
}

function addProject(projectByName) {
  projectList[projectByName] = new project(projectByName);
}

function addTodoItem(
  title,
  description,
  dueDate,
  priority,
  notes,
  currentProject
) {
  projectList[currentProject].addTodoItem(
    new todoItem(title, description, dueDate, priority, notes)
  );
}

let projectList = {};

if (localStorage.getItem("projectList") != null) {
  const parsedProjectList = JSON.parse(localStorage.getItem("projectList"));
  Object.keys(parsedProjectList).forEach((currProject) => {
    projectList[currProject] = new project(currProject);
    parsedProjectList[currProject].todoList.forEach((currTodoItem) => {
      projectList[currProject].addTodoItem(
        new todoItem(
          currTodoItem.title,
          currTodoItem.description,
          currTodoItem.dueDate,
          currTodoItem.priority,
          currTodoItem.notes
        )
      );
    });
  });
} else {
  addProject("Inbox");
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTs7QUFFMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvTGlzdCA9IFtdO1xuICB9XG5cbiAgYWRkVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kb0l0ZW0pO1xuICB9XG59XG5cbmNsYXNzIHRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUgPz8gXCJOZXcgVG9kb1wiO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiA/PyBcIlwiO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkgPz8gMDtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXMgPz8gXCJcIjtcbiAgICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3QgPz8gXCJJbmJveFwiO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tsaXN0KCkge1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gIXRoaXMuY2hlY2tsaXN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdEJ5TmFtZSkge1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0QnlOYW1lXSA9IG5ldyBwcm9qZWN0KHByb2plY3RCeU5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvSXRlbShcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIGN1cnJlbnRQcm9qZWN0XG4pIHtcbiAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLmFkZFRvZG9JdGVtKFxuICAgIG5ldyB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcylcbiAgKTtcbn1cblxubGV0IHByb2plY3RMaXN0ID0ge307XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpICE9IG51bGwpIHtcbiAgY29uc3QgcGFyc2VkUHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICBPYmplY3Qua2V5cyhwYXJzZWRQcm9qZWN0TGlzdCkuZm9yRWFjaCgoY3VyclByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdFtjdXJyUHJvamVjdF0gPSBuZXcgcHJvamVjdChjdXJyUHJvamVjdCk7XG4gICAgcGFyc2VkUHJvamVjdExpc3RbY3VyclByb2plY3RdLnRvZG9MaXN0LmZvckVhY2goKGN1cnJUb2RvSXRlbSkgPT4ge1xuICAgICAgcHJvamVjdExpc3RbY3VyclByb2plY3RdLmFkZFRvZG9JdGVtKFxuICAgICAgICBuZXcgdG9kb0l0ZW0oXG4gICAgICAgICAgY3VyclRvZG9JdGVtLnRpdGxlLFxuICAgICAgICAgIGN1cnJUb2RvSXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjdXJyVG9kb0l0ZW0uZHVlRGF0ZSxcbiAgICAgICAgICBjdXJyVG9kb0l0ZW0ucHJpb3JpdHksXG4gICAgICAgICAgY3VyclRvZG9JdGVtLm5vdGVzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufSBlbHNlIHtcbiAgYWRkUHJvamVjdChcIkluYm94XCIpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgYWRkVG9kb0l0ZW0sIHRvZG9JdGVtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=