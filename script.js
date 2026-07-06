/* ============================
   ACTIVE NAVIGATION
============================ */

const sections = document.querySelectorAll("section[id], div[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");

if(sections.length){

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

}
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

    mobileNav.classList.toggle("active");

    overlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

}
overlay.addEventListener("click",()=>{

    menuToggle.classList.remove("active");

    mobileNav.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

    menuToggle.classList.remove("active");

    mobileNav.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});

});
/* ==========================================
   CONSULTATION FORM
========================================== */

const form = document.getElementById("consultForm");

if (form) {

    emailjs.init({
        publicKey: "JQNKRXUA8AB_kcVmm"
    });

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_82w12ja",
            "template_sanqo6c",
            this
        )
        .then(() => {

            console.log("Email sent!");

            document.getElementById("formBox").style.display = "none";
            document.getElementById("successBox").style.display = "block";

        })
        .catch((error) => {

            console.log(error);
            alert(error.message || "Something went wrong.");

        });

    });

}

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        },500);

    }

});
/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section =>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}
/* ==========================
   SCROLL REVEAL PORTFOLIO
========================== */

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

item.classList.add("active");

}

});

});

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let duration = 2000;

        if(target <= 10){
            duration = 2100;
        }

        if(target <= 5){
            duration = 2150;
        }

        const increment = target / (duration / 16);

        let current = 0;

        function updateCounter(){

            current += increment;

            if(current < target){

                counter.textContent = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent = target + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.5
});

counters.forEach(counter => counterObserver.observe(counter));
/*==========================
LIGHTBOX
==========================*/

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
/*=========================================
TOP BUTTON
=========================================*/
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});
/*=========================================
SCROLL NAV
=========================================*/
const navbar = document.querySelector("nav");

if(navbar){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

}
/* ==========================================
   SCROLL REVEAL
========================================== */

const animatedElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

function revealOnScroll() {

    animatedElements.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ==========================================
   CURSOR GLOW
========================================== */
const glow = document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

}