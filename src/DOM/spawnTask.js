export const spawn = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const data = (JSON.parse(localStorage.getItem(key)));
    const title = data.title;
    const desc = data.desc;
    const date = data.date;
    const priority = data.priority;
    const done = data.done;
    console.log(data);
    //console.log(title);
    //console.log(desc);
    //console.log(date);
    //console.log(priority);
    const main = document.querySelector(".main");
    const task = document.createElement("div");
    task.innerHTML += `<p>${title}</p>
      <p>${desc}, ${date}, ${priority}, ${done}
      `;
    main.appendChild(task);
  }
}
