//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#menu-pan").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const makanan= document.querySelector('#menu-pan')

document.addEventListener('click', function(e){
    if(!makanan.contains(e.target) && !navbarNav.contains(e.target) )
    navbarNav.classList.remove('active')
})