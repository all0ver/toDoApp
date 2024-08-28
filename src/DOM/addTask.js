import cross from '../img/cross.svg';
import plus from '../img/plus.svg';
export const addTask = () => {
  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");

  const form = `
    <form class="form">
      <input type="text" name="title" class="title" placeholder="Title" required>
      
      <textarea class="desc" placeholder="Description" rows="10" name="desc"></textarea>
      
      <div class='radioElements'>
      <input type="date" name="date" class="date" required>
      <div class='subRadio'>
      <label for="low" class="labelPriority lLow">LOW
      <input id="low" class="priority" name="priority" type="radio" value="low" required>
      </label>
      <label for="medium" class="labelPriority lMedium">MEDIUM
      <input id="medium" class="priority" name="priority" type="radio" value="medium" required>
      </label>
      <label for="high" class="labelPriority lHigh">HIGH
      <input id="high" class="priority" name="priority" type="radio" value="high" required>
      </label>
      </div>
      </div>

      
      <div class="listAndSubmit">
      <div class="listDiv">
      <label for="listId" class="listLabel">List:</label>
      <select id="listId" class="list" name="list" required>
      </select>
      </div>
      <button type="submit" class="addTaskFormBtn"><img src="${plus}" alt='add task'></button>
      </div>
      <img src="${cross}" class="formCross" alt='close'>
    </form>
  `;
  formDiv.innerHTML = form;
  document.body.appendChild(formDiv);
}
