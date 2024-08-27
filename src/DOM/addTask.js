import cross from '../img/cross.svg';
export const addTask = () => {
  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");
  formDiv.style.display = 'flex';
  const form = `
    <div class="form">
      <input type="text" name="title" class="title" placeholder="Title">
      
      <textarea class="desc" placeholder="Description" rows="10"></textarea>
      
      <label for="date">Date:</label>
      <input type="date" name="date" class="date">
      
      <label for="priority">Priority</label>
      <select class="priority">
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>

      <input class="priority" name="priority" type="radio">Low</input>
      <input class="priority" name="priority" type="radio">Medium</input>
      <input class="priority" name="priority" type="radio">High</input>

      
      <label for="list">List</label>
      <select class="list">
      </select>
      
      <button type="button">Submit</button> <!-- Use button type="button" if not using a form -->
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
  formDiv.addEventListener("click",closeFunc);
  modal.addEventListener("click",(event) => {
    event.stopPropagation();
  } );
  close.addEventListener("click", closeFunc);
}
