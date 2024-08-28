//import { add } from "date-fns";
import { toDoItem } from "./item.js";

export const addNewItem = () => {
  const title = document.querySelector(".title").value;
  const desc = document.querySelector(".desc").value;
  const date = document.querySelector(".date").value;
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const newItem = new toDoItem(title, desc, date, priority);
  localStorage.setItem(title, JSON.stringify(newItem));
}
