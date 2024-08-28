export class toDoItem {
  constructor(title, description, date, priority) {
    this.title = title;
    this.desc = description;
    this.date = date;
    this.priority = priority;
    this.done = false;
  }
}
