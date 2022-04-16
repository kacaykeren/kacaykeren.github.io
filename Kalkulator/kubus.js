// nav
const nav = document.querySelector("header");
// const mobileNav = document.querySelector("nav.mobile-nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 15) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});



// menu
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
})

// calculator
const goButton = document.getElementById('goButton')

    goButton.addEventListener('click', () => {
        hitung()
        function hitung() {
            var r = document.getElementById("rusuk").value;
            var volume = r ** 3;
            var luasP = 6 * r ** 2;
            var panjangR = r * 12;
            var diagS = `${r}&#8730;2`;
            var diagR = `${r}&#8730;3`
            document.getElementById("hasilVolume").innerHTML = volume;
            document.getElementById("hasilLuasP").innerHTML = luasP;
            document.getElementById("hasilPR").innerHTML = panjangR;
            document.getElementById("hasilDiagS").innerHTML = diagS;
            document.getElementById("hasilDiagR").innerHTML = diagR;
        }
    })
