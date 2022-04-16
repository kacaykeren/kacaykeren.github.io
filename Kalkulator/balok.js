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
            var p = document.getElementById("panjang").value;
            var l = document.getElementById("lebar").value;
            var t = document.getElementById("tinggi").value;
            var volume = p * l * t;
            var luasP = 2 * (p * l + p * t + l * t);
            var panjangR = 4 * (p*1 + l*1 + t*1);
            var diagR = (p ** 2 + l ** 2 + t ** 2) ** 0.5;
            document.getElementById("hasilVolume").innerHTML = volume;
            document.getElementById("hasilLuasP").innerHTML = luasP;
            document.getElementById("hasilPR").innerHTML = panjangR;
            document.getElementById("hasilDiagR").innerHTML = diagR;
        }
    })
