const navIcon = document.querySelector(".nav-icon");
const navBar = document.querySelector(".bar")

navIcon.addEventListener("click", () => {
    navBar.innerHTML=`<h6>Home</h6>
                <h6>Tasks to do</h6>
                <h6>In Progress</h6>
                <h6>Done</h6>`
    navBar.style.backgroundColor = "whitesmoke";           
})