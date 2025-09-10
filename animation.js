// Section 1 all elements intro animation
window.addEventListener("load", function () {
    gsap.from(".sec1 *", {
        transform: "translateY(-20%)",
        opacity: 0,
        stagger: 0.1,
        duration: 2
    })
})

gsap.from(".sec2 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.05,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec2 *",
    }
})

gsap.from(".sec3 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.05,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec3 *",
    }
})

gsap.from(".sec4 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.05,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec4 *",
    }
})

gsap.from(".sec5 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.01,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec5 *",
    }
})
gsap.from(".sec9 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.01,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec9 *",
    }
})
gsap.from(".sec10 *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec10 *",
    }
})
gsap.from("footer *", {
    transform: "translateY(20%)",
    opacity: 0,
    stagger: 0.03,
    duration: 1,
    scrollTrigger:{
        scroller: "body",
        trigger: "footer *",
    }
})

    // Video container rotate on scroll animation
gsap.from(".video", {
    transform: "rotateX(20deg)",
    scrollTrigger: {
        scrub: 1,
        scroller: "body",
        trigger: ".video",
        start: "top 70%",
        end: "top: 20%"
    }
})

    // Section 2 paragraph highlight animation on scroll
let h2 = document.querySelector(".sec2 h2")

const arr = "Tired of boring video content that don’t stand out? It’s time to upgrade the game with us!".split(" ");
function generateText(text) {
    text.forEach(data => {
        const span = document.createElement("span");
        span.classList.add("char")
        span.textContent = data;
        h2.appendChild(span)

    });
}
generateText(arr)

gsap.from(".char", {
    color: "#7c7c7cff",
    stagger: 0.3,
    scrollTrigger: {
        scrub: true,
        scroller: "body",
        trigger: "h2",
        start: "top 90%",
        end: "bottom: 40%"
    }
})

    // Section 2 review values counting animation on scroll
const reviewContainer = document.querySelector(".review-container");

const review1 = document.querySelector("#review1 h1");
const review2 = document.querySelector("#review2 h1");
const review3 = document.querySelector("#review3 h1");

let count1 = 0;
let count2 = 0;
let count3 = 0;

function countingAnimation() {
    function animate1(){
        setTimeout(animate1, 2)
        if (count1 < 200) {
            count1++
            review1.textContent = count1 + "%";
        }
    }
    function animate2(){
        setTimeout(animate2, 200)
        if (count2 < 5) {
            count2++
            review2.textContent = count2 + "%";
        }
    }
    function animate3(){
        setTimeout(animate3, 20)
        if (count3 < 50) {
            count3++
            review3.textContent = count3 + "%";
        }
    }
    animate1()
    animate2()
    animate3()
}

const observer = new IntersectionObserver((e)=> {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            countingAnimation();
        }
    });
}, {
    threshold: 0.5
});

observer.observe(reviewContainer)


    // Section 5 analytics counting and grow animation
gsap.from(".sec5 .container .bottom .analytics .pillars", {
    height: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec5 .container .bottom",
        start: "top 100%",
    }
})

let bottomCount1 = 0;
let bottomCount2 = 0;

const pillarText1 = document.querySelector("#pillar-text1");
const pillarText2 = document.querySelector("#pillar-text2");

function countingAnimation2() {
    function animate1() {
        setTimeout(animate1, 1.5)
        if (bottomCount1 < 250) {
            bottomCount1++
            pillarText1.textContent = bottomCount1 + "%";
        }
    }
    function animate2() {
        setTimeout(animate2, 1)
        if (bottomCount2 < 200) {
            bottomCount2++
            pillarText2.textContent = bottomCount2 + "%";
        }
    }
    animate1();
    animate2();
}

const observer2 = new IntersectionObserver((e)=> {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            countingAnimation2();
        }
    });
}, {
    threshold: 0.5
});

observer2.observe(pillarText1)

    // Section 6 cards slide animation
const cardsContainer = document.querySelector(".sec6 .cards");

const observer3 = new IntersectionObserver((e) => {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            gsap.to(".sec6 .cards", {
                gap: 50,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            })
        } else {
            gsap.to(".sec6 .cards", {
                gap: 300,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            })
        }
    });
}, {
    threshold: 0.2
});

observer3.observe(cardsContainer)
    
    // Section 7 path trail animation on scroll
/
gsap.to(".sec7 .container .line span", {
    top: "calc(100% - 100px)",
    ease: "linear",
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec7 .container .line",
        scrub: 0,
        start: "top 50%",
        end: "bottom 50%"
    }
})

    // Section 7 All ST animation
        // st1
const st1 = document.querySelector(".container #st1")
const observerSt1 = new IntersectionObserver((e) => {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            gsap.to("#st1 .elem .wrapper #img2", {
                right: 0,
                rotate: -15,
                top: 0
            });
            gsap.to("#st1 .elem .wrapper #img1", {
                left: 0,
                top: 0
            });
            gsap.to("#st1 .elem .wrapper #img3", {
                right: 0,
                bottom: 0
            });
            gsap.to("#st1 .elem .wrapper #img4", {
                left: 0,
                bottom: 0
            });
        } else {
            gsap.to("#st1 .elem .wrapper #img2", {
                right: 70,
                rotate: -10,
                top: 50
            });
            gsap.to("#st1 .elem .wrapper #img1", {
                left: 50,
                top: 40
            });
            gsap.to("#st1 .elem .wrapper #img3", {
                right: 70,
                bottom: 30
            });
            gsap.to("#st1 .elem .wrapper #img4", {
                left: 70,
                bottom: 30
            });
        }
    });
}, {
    threshold: 0.5
});

observerSt1.observe(st1)

        // st2
const st2 = document.querySelector(".container #st2")
const observerSt2 = new IntersectionObserver((e) => {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            gsap.to(".elem .top", {
                gap: 0
            });
            gsap.to(".container .elem #script", {
                bottom: -50
            })
        } else {
            gsap.to(".elem .top", {
                gap: 100
            });
            gsap.to(".container .elem #script", {
                bottom: -100
            })
        }
    });
}, {
    threshold: 0.5
});

observerSt2.observe(st2)

        // st3
const st3 = document.querySelector("#st3")
const observerSt3 = new IntersectionObserver((e) => {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            gsap.to("#st3 .elem #tools", {
                top: 0
            });
            gsap.to("#st3 .elem #ae", {
                top: "30%",
                right: "20%"
            });
            gsap.to("#st3 .elem #pr", {
                top: 0,
                left: "30%"
            });
        } else {
            gsap.to("#st3 .elem #tools", {
                top: 70
            });
            gsap.to("#st3 .elem #ae", {
                top: "70%",
                right: "30%"
            });
            gsap.to("#st3 .elem #pr", {
                top: 100,
                left: "40%"
            });
        }
    });
}, {
    threshold: 0.3
});

observerSt3.observe(st3)

        // st4
gsap.to("#st4 .elem .wrapper .slider", {
    left: "-70%",
    scrollTrigger: {
        scroller: "body",
        trigger: "#st4 .elem .wrapper .slider",
        scrub: 1,
        start: "top 80%",
        end: "top 20%"
    }
})

        // st5
const st5 = document.querySelector("#st5")
const observerSt5 = new IntersectionObserver((e) => {
    e.forEach(function (i) {
        if (i.isIntersecting) {
            gsap.to("#st5 .elem .wrapper #yt", {
                right: 0,
                top: "10%"
            })
            gsap.to("#st5 .elem .wrapper #ist", {
                left: 0,
                top: 0
            })
            gsap.to("#st5 .elem .wrapper #ttk", {
                left: 0,
                bottom: "10%"
            })
        } else {
            gsap.to("#st5 .elem .wrapper #yt", {
                right: 100,
                top: "40%"
            })
            gsap.to("#st5 .elem .wrapper #ist", {
                left: 50,
                top: 50
            })
            gsap.to("#st5 .elem .wrapper #ttk", {
                left: 50,
                bottom: "30%"
            })
        }
    });
}, {
    threshold: 0.5
});

observerSt5.observe(st5)

    // Section 7 all STs text animation
gsap.from(".sec7 .st #text1 *", {
    transform: "translateY(40%)",
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec7 .st #text1 *",
    }
})
gsap.from(".sec7 .st #text2 *", {
    transform: "translateY(40%)",
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec7 .st #text2 *",
    }
})
gsap.from(".sec7 .st #text3 *", {
    transform: "translateY(40%)",
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec7 .st #text3 *",
    }
})
gsap.from(".sec7 .st #text4 *", {
    transform: "translateY(40%)",
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec7 .st #text4 *",
    }
})
gsap.from(".sec7 .st #text5 *", {
    transform: "translateY(40%)",
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger:{
        scroller: "body",
        trigger: ".sec7 .st #text5 *",
    }
})

    // Section 2 cards move animation on scrool
gsap.to(".sec2 .text-container .cards", {
    gap: "50vw",
    opacity: 1,
    ease: "linear",
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec2 .text-container .cards",
        scrub: 1,
        start: "top 90%",
        end: "top: 70%",
    }
})