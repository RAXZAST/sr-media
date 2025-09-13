// Page loader
const loader = document.querySelector(".page-loader");
const loadPath = document.querySelector(".page-loader svg path")

window.addEventListener("load", function () {
    loadPath.style = "fill: var(--primary-color); stroke-width: 0";
    setTimeout(() => {
        loader.classList.add("hidden")
    }, 1000);
})


    //  Section 1 Custom video controls
const video = document.querySelector(".sec1 video");
const playBtn = document.querySelector(".sec1 .video button");
const playPause = document.querySelector("#play-pause-icon");
let binary = false;

playBtn.onclick = function () {
    if (binary == false) {
        playPause.style = "clip-path: polygon(10% 0, 10% 100%, 35% 100%, 35% 0, 65% 0, 65% 100%, 90% 100%, 90% 0);"
        video.play()
        binary = true
        playBtn.style = "opacity: 0; pointer-events: none"
    } else {
        video.pause()
        binary = false
        playPause.style = "clip-path: polygon(100% 50%, 10% 0, 10% 100%);"
        playBtn.style = "opacity: 1; pointer - events: visible"
    }
    
}

let binary2 = false;

video.addEventListener("click", function () {
    if (binary2 == false) {
        playBtn.style = "opacity: 1; pointer-events: visible"
        binary2 = true
    } else {
        playBtn.style = "opacity: 0; pointer-events: none"
        binary2 = false
    }
})

    // Section 4 active tab functionality
const tabButtons = document.querySelectorAll(".sec4 .tab-buttons button");
const tabContainer = document.querySelector(".sec4 .tab-buttons");

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");
const tab4 = document.querySelector("#tab4");

tabContainer.onclick = function (c) {
    if (c.target.matches("button")) {
        tabButtons.forEach(function (b) {
            b.classList.remove("active");
        });
        c.target.classList.add("active");

        const text = c.target.textContent.trim();
        tab1.classList.toggle("visible", text === "Youtube Videos");
        tab2.classList.toggle("visible", text === "Shorts");
        tab3.classList.toggle("visible", text === "SAAS Videos");
        tab4.classList.toggle("visible", text === "Ad Creative & VSL");
    }
}

    // Adding video controls while mousemove
const allVideos = document.querySelectorAll(".sec4 video");
const sec4 = document.querySelector(".sec4");

sec4.addEventListener("mousemove", function (k) {
    allVideos.forEach(function (v) {
        k.target.setAttribute("controls", "")
        v.removeAttribute("controls")
    })
})

const caseVideo = document.querySelector(".sec5 video");
function addControls() {
    caseVideo.setAttribute("controls", "");
}
function removeControls() {
    caseVideo.removeAttribute("controls");
}

    // Section 9 custom dropdown menu functionality
const dropdownContainer = document.querySelectorAll(".sec9 .container .dropdown")

dropdownContainer.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
        // Find the button inside the clicked dropdown
        const btn = dropdown.querySelector(".head button");
        if (btn) btn.classList.toggle("rotate");
        this.classList.toggle("open");
    });
    dropdown.setAttribute("style", `--height: ${dropdown.scrollHeight + 8}px; transition: 0.3s;`)
})

    // Contact form Validation
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const serviceType = document.querySelector("#service-type");
const message = document.querySelector("#message");
const bookButton = document.querySelector("#book-button");

const alertF = document.querySelector(".alert-bg");
const close = document.querySelector(".alert-bg button");

let nameData;
let emailData;
let serviceTypeData;
let messageData;

let messageSuccessHint = false;

bookButton.onclick = function () {
    if (messageSuccessHint == false) {
        let emailContain = email.value.includes("@")
        if (userName.value == "" || email.value == "" || serviceType.value == "" || message.value == "" || emailContain == false) {
            if (userName.value == "") {
                userName.classList.add("wrong")
            }if (email.value == "" || emailContain == false) {
                email.classList.add("wrong")
            }if (serviceType.value == "") {
                serviceType.classList.add("wrong")
            }if (message.value == "") {
                message.classList.add("wrong")
            }
        } else {
            alertF.style = "display: flex"
            bookButton.style = "filter: grayscale(50%); opacity: 0.5; pointer-events: visible; cursor: not-allowed !important;";
            bookButton.setAttribute("data-tooltip", "You have already booked a call");
            userName.setAttribute("readOnly", "");
            email.setAttribute("readOnly", "");
            serviceType.setAttribute("readOnly", "");
            message.setAttribute("readOnly", "");
            messageSuccessHint = true;

                // All inputs data for Backend developer
            nameData = userName.value.trim();
            emailData = email.value.trim();
            serviceTypeData = serviceType.value.trim();
            messageData = message.value.trim();
        }
    }
}

close.onclick = function () {
    alertF.style = "display: none";
    userName.value = "";
    email.value = "";
    serviceType.value = "";
    message.value = "";

    userName.classList.remove("wrong");
    email.classList.remove("wrong");
    serviceType.classList.remove("wrong");
    message.classList.remove("wrong");
}

    // Responsive side nav functionality
const closeNav = document.querySelector("#horizontal");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#horizontal #side");

menu.onclick = function () {
    nav.style = "transform: translateX(0%) !important";
    closeNav.style = "opacity: 1 !important; pointer-events: visible"
}
closeNav.onclick = function () {
    nav.style = "transform: translateX(100%) !important";
    closeNav.style = "opacity: 0 !important; pointer-events: none"
}

    // Swiper

document.addEventListener("DOMContentLoaded", function () {
  new Swiper('.sec3 .slider.swiper', {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    allowTouchMove: true, // enables mouse drag/swipe
    simulateTouch: true,
    grabCursor: true,
    // No navigation, no pagination
  });
});




const allSec = document.querySelectorAll("section");

allSec.forEach(function (e) {
    console.log(e.scrollWidth)
})