gsap.registerPlugin(ScrollTrigger);

// 2 bannanas move

gsap.from(".bannan_png2", {
  keyframes: {
    y: [800, 200, -10, 30, 0],
  },
  rotate: 180,
  ease: "elastic",
  duration: 7,
  markers: true,
  scrollTrigger: {
    trigger: ".div2",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.to(".div1", {
  duration: 10,
  keyframes: {
    "10%": { background: "#FFD700" },
    "20%": { background: "#F0E68C" },
    "30%": { background: "#FFC72C" },
    "60%": { background: "#FEBE10" },
    "100%": { background: "#FFFF00" },
    rotate: 360,
  },
  scrollTrigger: {
    trigger: ".div",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

/// muliple bannana

gsap.to(".bananna", {
  keyframes: {
    y: [0, 200, -10, 30, 0],
    easeEach: "none.inOut",
  },
  duration: 3,
  stagger: 0.5,
  markers: true,
  scrub: 0.5,
  scrollTrigger: {
    trigger: ".div2",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.to(".bananna2", {
  duration: 4,
  rotate: 1000,
  x: 700,
  markers: true,
  scrollTrigger: {
    trigger: ".div4",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.to(".bananna3", {
  keyframes: {
    y: [0, 400, -10, 30, 0],
    easeEach: "none.inOut",
  },
  rotate: 180,
  duration: 3,
  stagger: 0.5,
  markers: true,
  rotate: 600,
  scrollTrigger: {
    trigger: ".div7",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.to(".text_box2", {
  keyframes: {
    x: [500, 0, 0],

    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".text_box2",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 0.5,
  },
});

gsap.to(".text_box3", {
  keyframes: {
    x: [5000, 0, 0],

    ease: "none",
    easeEach: "none",
  },
  duration: 10,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".text_box3",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 0,
  },
});

gsap.to(".div3", {
  duration: 10,
  keyframes: {
    "10%": { background: "black" },
    "20%": { background: "red" },
    "30%": { background: "yellow" },
    "60%": { background: "black" },
    "100%": { background: "yellow" },
    rotate: 360,
  },
  scrollTrigger: {
    trigger: ".div3",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".colorscheme", {
  duration: 20,
  keyframes: {
    "10%": { background: "#FFD700" },
    "20%": { background: "#F0E68C" },
    "30%": { background: "#FFC72C" },
    "60%": { background: "#FEBE10" },
    "100%": { background: "#FFFF00" },
  },
  pin: true,
  scrollTrigger: {
    trigger: ".div4",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.from(".bannan_png2", {
  keyframes: {
    y: [100, 0, -10, 30, 0],
  },
  rotate: 180,
  ease: "elastic",
  duration: 7,
  markers: true,
  scrollTrigger: {
    trigger: ".div2",
    start: "top 80%",
    end: "top 30%",
  },
});

let masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  let image = mask.querySelector("img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: "restart none none reset",
      scrub: 1,
    },
  });

  tl.set(mask, { autoAlpha: 0.8 });

  tl.from(mask, 1.5, {
    xPercent: -300,
    ease: Bounce.out,
    pin: true,
    pinSpaceing: true,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 0.5,
    delay: -1.5,
    ease: Power2.out,
  });
});

gsap.to(".coverslide", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide2", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide3", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide4", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide5", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide6", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide7", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide8", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.to(".coverslide9", {
  keyframes: {
    x: [500, 0, 0],
    ease: "none",
    easeEach: "none",
  },
  duration: 4,
  stagger: 0.5,
  markers: true,
  scrollTrigger: {
    trigger: ".changeshades",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
});

// "10%": { background: "#FFD700" },
// "20%": { background: "#F0E68C" },
// "30%": { background: "#FFC72C" },
// "60%": { background: "#FEBE10" },
// "100%": { background: "#FFFF00" },

// gsap.to("flying_bananna"{

//   X; 500, duration: 2
// )

// gsap.to(".banannaskin", {

//     keyframes: {
//  "50%": {opacity = "0"}},
//   rotate: 180,
//   ease: "Bounce.easeOut",
//   duration: 3,
//   markers: true,
//   scrollTrigger: {
//     trigger: ".banannaskin",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 1,
//   },
// });

// gsap.to(".div2", {
//   duration: 2,
//   keyframes: {
//     "25%": { background: "blue" },
//     "50%": { background: "grey" },
//     "100%": { background: "purple", rotate: 360, opacity: 10 },
//   },
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 0.5,
//   },
// });

// gsap.to(".text_box2", {
//   keyframes: {
//     x: -500,
//     ease: "none",
//     easeEach: "power2.inOut",
//     rotate: 180,
//     ease: "elastic",
//     duration: 10,
//     markers: true,
//     scrollTrigger: {
//       trigger: ".div2",
//       start: "top 80%",
//       end: "bottom 30%",

//     },
//   },
// });

//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 0,
//     pin: true,
//     pinSpaceing: true,
//     toggleActions: "restart restart restart restart",

//     markers: true,
//     toggleClass: "red",
