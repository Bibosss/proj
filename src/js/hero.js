const heroNav = document.querySelector(".hero-navigation");
const heroBtn = document.querySelector(".hero-btn-menu");
const arrowContainer = document.querySelector(".icon-arrow-narrow-left");

heroBtn.addEventListener("click", () => {
    heroNav.classList.toggle("isOpen");
    arrowContainer.classList.toggle("arrow-hidden");
    heroBtn.classList.toggle("active");
});