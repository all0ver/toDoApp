import './css/style.css';
import './css/addTask.css';

import { addNewItem } from './logic/add.js';
import { addTask } from './DOM/addTask.js';

const lists = {};
lists["default"] = [];

const addTaskBtn = document.querySelector(".addTaskBtn");
addTaskBtn.addEventListener("click", () => {
  addTask();
  lists["work"] = [];
  const list = document.querySelector(".list");
  Object.keys(lists).forEach(name => {
    list.innerHTML += "<option value='" + name + "'>" + name + "</option>";
  });
})


//const btn = document.querySelector("button");
//btn.addEventListener("click", () => {
//  addNewItem(lists);
//  console.log(lists);
//})
// reading data from local storage
//console.log(Object.keys(JSON.parse(localStorage.getItem("czfz"))))
