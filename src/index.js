import './css/style.css';

import { addNewItem } from './logic/add.js';

const lists = {};
lists["default"] = [];
lists["work"] = [];
const list = document.querySelector(".list");
Object.keys(lists).forEach(name => {
  list.innerHTML += "<option value='" + name + "'>" + name + "</option>";
});


const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  addNewItem(lists);
  console.log(lists);
})

