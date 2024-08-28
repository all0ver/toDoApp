import './css/style.css';
import './css/addTask.css';
import './css/task.css';

import { addNewItem } from './logic/add.js';
import { addTask } from './DOM/addTask.js';
import { spawn } from './DOM/spawnTask.js';

const lists = {};
lists["default"] = [];
lists["work"] = [];

const addTaskBtn = document.querySelector(".addTaskBtn");
addTaskBtn.addEventListener("click", () => {
  addTask();

  const formDiv = document.querySelector(".formDiv");
  formDiv.style.display = 'flex';

  const list = document.querySelector(".list");
  list.innerHTML = '';
  Object.keys(lists).forEach(name => {
    list.innerHTML += "<option value='" + name + "'>" + name + "</option>";
  });

  const closeFunc = () => {
    formDiv.style.display = 'none';
    return;
  }

  const addTaskFormBtn = document.querySelector('.addTaskFormBtn');
  addTaskFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addNewItem();
    closeFunc();
    return;
  })

  const close = document.querySelector(".formCross");
  const modal = document.querySelector(".form");


  formDiv.addEventListener("click", closeFunc);
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  close.addEventListener("click", closeFunc);
})


//reading data from local storage
//console.log(Object.keys(JSON.parse(localStorage.getItem("czfz"))))
//localStorage.clear();
spawn();
