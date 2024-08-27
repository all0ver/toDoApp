import cross from '../img/cross.svg';
export const addTask = () => {
  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");
  formDiv.style.display = 'flex';
  const form = `
    <div class="form">
      <input type="text" name="title" class="title" placeholder="Title" required>
      
      <textarea class="desc" placeholder="Description" rows="10" name="desc"></textarea>
      
      <div class='radioElements'>
      <input type="date" name="date" class="date" required>
      <div class='subRadio'>
      <input id="low" class="priority" name="priority" type="radio" value="low" required></input>
      <label for="low" class="labelPriority lLow">LOW</label>
      <input id="medium" class="priority" name="priority" type="radio" value="medium" required></input>
      <label for="medium" class="labelPriority lMedium">MEDIUM</label>
      <input id="high" class="priority" name="priority" type="radio" value="high" required></input>
      <label for="high" class="labelPriority lHigh">HIGH</label>
      </div>
      </div>

      
      <label for="listId">List</label>
      <select id="listId" class="list" name="list">
      </select>
      
      <button type="button">Submit</button>
      <img src="${cross}" class="formCross">
    </div>
  `;
  formDiv.innerHTML = form;
  document.body.appendChild(formDiv);

  const modal = document.querySelector(".form");
  const close = document.querySelector(".formCross");

  const closeFunc = () => {
    formDiv.style.display = 'none';
  }
  formDiv.addEventListener("click", closeFunc);
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  close.addEventListener("click", closeFunc);
}      //<label for="priority">Priority</label>
//<select class="priority">
//  <option value="1">Low</option>
//  <option value="2">Medium</option>
//  <option value="3">High</option>
//</select>
