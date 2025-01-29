const abc = document.getElementById("abc");
const body = document.querySelector('body');
abc.addEventListener("click", () => {

    if (body.classList.toggle("dark-mode")) {
        abc.textContent = "Light Mode";
    } else {
        abc.textContent = "Dark Mode";
    }
});