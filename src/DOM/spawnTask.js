export const spawn = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const data = (JSON.parse(localStorage.getItem(key)));
    const title = data.title;
    const desc = data.desc;
    const date = data.date;
    const priority = data.priority;
    let done = data.done;
    console.log(data);
    const main = document.querySelector(".main");
    const task = document.createElement("div");
    task.classList.add("task");
    if (priority == 'low') {
      task.style.borderColor = "#008000";
    } else if (priority == 'medium') {
      task.style.borderColor = "#FFA500";
    } else if (priority == 'high') {
      task.style.borderColor = '#FF0000';
    }
    task.innerHTML += `      
        <div class="taskTopBar">
          <p class="taskTitle">${title}</p>
          <p class="taskDate">${date}</p>
        </div>

        <p class="taskDesc">${desc}</p>
        <input type="checkbox" name="done" value="false" class="taskCheckbox">`;
    main.appendChild(task);

    // text line-through
    const checkbox = task.querySelector(".taskCheckbox");
    checkbox.addEventListener("click", () => {
      checkbox.parentNode.classList.toggle("lineThrough");
      if (done == false) {
        done = true;
      } else {
        done = false;
      }
      console.log(title);
      console.log(done);
    })
  }
}
