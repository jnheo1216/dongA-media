gsap.registerPlugin(ScrollTrigger); // 스크롤 플러그인 안정화
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top", 
    pin: true,
    pinSpacing: false,
  });
});
ScrollTrigger.create({
  snap: 1 / 4
});

gsap.to(".map_news_box1", {
    scrollTrigger: {
      trigger: "#triggerbox1",
      toggleActions: "restart reverse restart reverse" // 보면 떠나면 다시보면 다시떠나면
    },
    y: -300, 
    duration: 2, 
})
gsap.to(".map_news_box2", {
    scrollTrigger: {
      trigger: "#triggerbox2",
      toggleActions: "restart reverse restart reverse"
    },
    y: -300, 
    duration: 2, 
})
gsap.to(".map_news_box3", {
    scrollTrigger: {
      trigger: "#triggerbox3",
      toggleActions: "restart reverse restart reverse"
    },
    y: -300, 
    duration: 2, 
})
gsap.to(".map_news_box4", {
    scrollTrigger: {
      trigger: "triggerbox4",
      toggleActions: "restart reverse restart reverse"
    },
    y: -300, 
    duration: 2, 
})

let sbutton = document.getElementById('scroll-button');
sbutton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#map_news1').scrollIntoView(true);
})

