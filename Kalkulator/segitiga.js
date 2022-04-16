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
        hitung();

        function hitung() {
            let a = document.getElementById("alas").value;
            let t = document.getElementById("tinggi").value;
            let h = document.getElementById("hipotenusa").value;
            var siku = document.getElementById("siku").checked;
            var luas;
            var keliling;

            function hitungLuas() {
                luas = 1/2 * a * t;
            };
            
            function hitungPhytagoras() {
                if (a == t) {
                    h = `${a}&#8730;2`
                } else {
                    h = (a ** 2 + t ** 2) ** 0.5;
                }
            };
            function hitungKeliling() {
                if (a == t && siku == true) {
                    keliling = `${1*a + 1*t} + ${h}`;
                } else {
                    keliling = 1*a + 1*t + 1*h;
                }
                
            };

            if (siku == true) {
                hitungPhytagoras();
                hitungLuas();
                hitungKeliling();
            } else {
                hitungLuas();
                if (h == '') {
                    h = "Hipotenusa Diperlukan";
                    keliling = "Hipotenusa Diperlukan";
                } else {
                    hitungKeliling();
                };
            };

            
            document.getElementById("hasilLuas").innerHTML = luas;
            document.getElementById("hasilKeliling").innerHTML = keliling;
            document.getElementById("hasilPhytagoras").innerHTML = h;
        }
    });
