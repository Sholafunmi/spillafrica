// hamburger 
const showSidebar = document.querySelector(".hamburger");
const sideMenuBar = document.querySelector(".side-menu-bar");
const closeSideBar = document.querySelector(".close-menu-bar");
const sideMenuItems = document.querySelector(".side-menu");
let bar = [];


showSidebar.addEventListener("click", function(){
sideMenuBar.style.transform = "translate(0%)"
}) 


// close side bar 
closeSideBar.addEventListener("click", function(){
    sideMenuBar.style.transform = "translate(100%)"
})

sideMenuItems.addEventListener("click", function(){
    sideMenuBar.style.transform = "translate(100%)"
})





// Replace the target date with the date of your event
const targetDate = new Date('2023-10-21T23:59:59').getTime();
// const targetDate = new Date('2023-12-31T23:59:59').getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update when the page loads
updateCountdown();





// REG FORM 
       