
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobilenav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
 mobilenav.classList.add('open');
});
times.addEventListener('click', function(){
    mobilenav.classList.remove('open');
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();


