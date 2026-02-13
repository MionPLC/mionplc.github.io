// Optional small animation on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50 
        ? "rgba(0,0,0,0.9)" 
        : "rgba(0,0,0,0.6)";
});
