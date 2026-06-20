const navIcon = document.querySelector(".nav-icon");
const navBar = document.querySelector(".bar")
const head = document.querySelector("h1")

const btnadd = document.querySelector("#ad")
const task = document.querySelector(".each")
const input = document.querySelector("input")


const complete = document.querySelector(".completed")

navIcon.addEventListener("click", () => {
    navBar.innerHTML = `<h6>Home</h6>
                <h6>Tasks to do</h6>
                <h6>In Progress</h6>
                <h6>Done</h6>`
    navBar.style.backgroundColor = "whitesmoke";
    head.style.marginTop = "-55px";
})




// Assuming you have these globally defined:
// const input = document.querySelector("#input");
// const task = document.querySelector("#task");
// const complete = document.querySelector("#complete");

btnadd.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    // 1. Create the container div
    const eachTask = document.createElement("div");
    eachTask.classList.add("eachtask");

    // 2. Insert the internal HTML structure (Notice changed id="done" to class="done-btn")
    eachTask.innerHTML = `
        <p>${input.value}</p>
        <button class="done-btn">Done</button>
    `;

    // 3. Find the SPECIFIC "Done" button inside this new task
    const doneBtn = eachTask.querySelector(".done-btn");

    // 4. Attach the event listener directly to this specific button
    doneBtn.addEventListener("click", () => {
        complete.appendChild(eachTask);
        doneBtn.remove(); // Removes just this button
    });

    // 5. Append the entire new task to your task list
    task.appendChild(eachTask);

    // 6. Clear input
    input.value = "";
});

  
