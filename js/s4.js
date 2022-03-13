gsap.registerPlugin(ScrollTrigger)

const intro = document.getElementById("intro");
const helper = document.getElementById("helper");
const container = document.getElementById("container");

gsap.to(container, {
  x: () => -(container.offsetWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: intro,
    start: "bottom top",
    invalidateOnRefresh: true,
    markers: true,
    scrub: 1,
    end: () => "+=" + (container.offsetWidth - innerWidth)
  }
})