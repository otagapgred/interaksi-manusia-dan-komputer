//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#menu-pan").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const makanan = document.querySelector("#menu-pan");

document.addEventListener("click", function (e) {
  if (!makanan.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

let stack = document.querySelector(".hero .stack");

[...stack.children].reverse().forEach((i) => stack.append(i));

stack.addEventListener("click", swap);

function swap(e) {
  let cards = document.querySelector(".cards:last-child");
  if (e.target !== cards) return;
  cards.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    cards.style.animation = "";
    stack.prepend(cards);
  }, 700);
}
