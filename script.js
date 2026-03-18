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
const scriptURL = 'https://script.google.com/macros/s/AKfycby0Myk8JklTtKHMWyYzr6DsKuoOLeVCArdtfC8seH9awaJlI74amtLQNSnEs5l01cHx9w/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['submit-to-google-sheet'];
  const message = document.getElementById('msg');

  if (!form) {
    console.error('Contact form not found. Check the form name attribute.');
    return;
  }

  if (!message) {
    console.error('Message element #msg not found.');
    return;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    message.textContent = 'Sending...';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        message.textContent = 'Message has been sent to Rashmitha.';
        form.reset();
        setTimeout(() => {
          message.textContent = '';
        }, 5000);
      })
      .catch(error => {
        console.error('Error!', error);
        message.textContent = 'Sorry, message not sent. Please try again or email directly.';
      });
  });
});
// message sent



// Slide window

// const projectList = document.querySelector('.project-list');
// const projects = document.querySelectorAll('.project');
// let currentIndex = 0;

// function slideNext() {
//     currentIndex = (currentIndex + 1) % projects.length;
//     updateSlide();
// }

// function updateSlide() {
//     const offsetX = -currentIndex * projects[0].clientWidth;
//     projectList.style.transform = `translateX(${offsetX}px)`;
// }

// // Auto slide every 3 seconds
// setInterval(slideNext, 3000);
