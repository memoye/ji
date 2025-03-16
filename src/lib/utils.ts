export function setupAnimations() {
  const animatedElements =
    document.querySelectorAll<HTMLElement>("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  animatedElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.animationDelay = `${index * 100}ms`;
    observer.observe(element);
  });
}
