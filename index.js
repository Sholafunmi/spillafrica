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





// Replace the target date with the date of SPILL event
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

// To Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update when the page loads
updateCountdown();



// hero section animation 
document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});


// speaker content animation 
// Select the section
const aboutSection = document.querySelector('#speakerContent');

// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.2, // Trigger when 20% of the element is visible
};

// Callback function when the intersection occurs
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the "fade-in" class to the about section
            aboutSection.classList.add('fade-in');

            // Stop observing once the animation has occurred
            observer.unobserve(entry.target);
        }
    });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the about section
observer.observe(aboutSection);
