document.addEventListener("scroll", function() {
  const elements = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.8;
  
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
