let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Menu

let sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}
// Contact script 
const scriptURL = 'https://script.google.com/macros/s/AKfycby0Myk8JklTtKHMWyYzr6DsKuoOLeVCArdtfC8seH9awaJlI74amtLQNSnEs5l01cHx9w/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Message has been sent to Rashmitha";
            setTimeout(function () {
                message.innerHTML = ""
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
// message sent
