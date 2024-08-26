//import { add } from "date-fns";
import { toDoItem } from "./item.js";

export const addNewItem = (lists) => {
  const title = document.querySelector(".title").value;
  const desc = document.querySelector(".desc").value;
  const date = document.querySelector(".date").value;
  const priority = document.querySelector(".priority").value;
  const list = document.querySelector(".list").value;
  const newItem = new toDoItem(title, desc, date, priority);
  lists[list].push(newItem);
  localStorage.setItem(title, JSON.stringify(newItem));
  //console.log("list");
  //console.log(list);
  //console.log("local Storage:");
  //console.log(JSON.parse(localStorage.getItem(title)));
}
