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
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    project
  ) {
    this.title = title ?? "New Todo";
    this.description = description ?? "";
    this.dueDate = dueDate ?? new Date();
    this.priority = priority ?? 0;
    this.notes = notes ?? "";
    this.checklist = checklist ?? [];
    this.project = project ?? "Inbox";
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
  checklist,
  currentProject
) {
  projectList[currentProject].addTodoItem(
    new todoItem(title, description, dueDate, priority, notes, checklist)
  );
}

const projectList = {};
addProject("Inbox");

export { projectList, addProject, addTodoItem };
