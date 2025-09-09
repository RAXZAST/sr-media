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
        if (event.target.matches("button")) {
            event.target.classList.toggle("rotate")
            this.classList.toggle("open");
        }
    });
    dropdown.setAttribute("style", `--height: ${dropdown.scrollHeight + 8}px; transition: 0.3s;`)
})

