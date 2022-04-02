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
});

// calculator
const goButton = document.getElementById('goButton')

    goButton.addEventListener('click', () => {
        hitung()

        function hitung() {
            let r = document.getElementById("radius").value;
            let d = document.getElementById("diameter").value;
            var luas;
            var keliling;
            let pi = 3.14;

            if (r == "") {
                r = 1/2 * d;
            } else {
                d = 2 * r;
            };
            
            if ( r % 7 == 0 ) {
                pi = 22/7;
            } else if ( r % 7 !== 0 ) {
                pi = 3.14;
            };

            luas = pi * r * r;
            keliling = pi * d;

            document.getElementById("hasilLuas").innerHTML = luas;
            document.getElementById("hasilKeliling").innerHTML = keliling;
        }
    });
