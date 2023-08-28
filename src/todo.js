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

export { projectList, addProject, addTodoItem, todoItem };
