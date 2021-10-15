gsap.from(".ani", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".ani",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
gsap.from(".ani2", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ani2",
    start: "top 50%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

gsap.from(".ani3", {
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".ani3",
    start: "top 50%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
