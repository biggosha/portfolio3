const submitButton = document.getElementById("submit-button");
const emailInput = document.getElementById("email");
const msg = document.getElementById("message");

submitButton.addEventListener("mouseover", (button) => {
    let email = emailInput.value;
    let validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!validate) {
        if (submitButton.style.left == "0%") {
            submitButton.style.left = "85%";
            submitButton.style.background = "white";
            msg.style.color = "white";
            msg.innerHTML = "Please enter a valid E-mail!";
        } else {
            submitButton.style.left = "0%";
            msg.style.color = "white";
            msg.innerHTML = "Please enter a valid E-mail!";
            submitButton.style.background = "white";
        }
    } else {
        msg.innerHTML = "";
        submitButton.style.background = "white";
    }
});

function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scriptURL ="https://script.google.com/macros/s/AKfycbygBjLR21YCI9wVZ60Cr6JGUcBYQVljBmz2R1NqL3E0PZ_0pS5QA50QjRke0I9aM6_8/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.style.color = "white";
            msg.innerHTML = "Message sent.";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => {
            msg.style.color = "white";
            msg.innerHTML =
                "Message not sent. Reason: " +
                error.message +
                ". Check console for more info.";
        });
});
