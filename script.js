let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
  window.addEventListener("scroll", closeNavOnScroll);
}
function closeNav() {
  sidenav.classList.remove("active");
}
function closeNavOnScroll() {
  if (sidenav.classList.contains("active")) {
    sidenav.classList.remove("active");
    window.removeEventListener("scroll", closeNavOnScroll);
  }
}


const modalTriggers = document.querySelectorAll('.modal-trigger');
const modal = document.getElementById("myModal");

modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        modal.style.display = "block"; 
    });
});

const closeBt = document.querySelector('.close');

closeBt.addEventListener('click', function() {
    modal.style.display = "none";
});
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
});



