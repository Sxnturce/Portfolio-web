function animations() {
  const items = document.querySelectorAll(".observed");
  const imgs = document.querySelectorAll(".img-animate");
  const texts = document.querySelectorAll(".text-animate");
  const skills = document.querySelectorAll(".skill-card");
  const icons = document.querySelectorAll(".icons");
  const footerText = document.querySelector(".footer-text")
  const contIcons = document.querySelector(".container-icons")
  const form = document.querySelector(".form")

  skills.forEach((skill, index) => {
    skill.classList.add(`time-${index}`);
  });

  //Configuracion
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  //Callback que va tomar el observer (Fade left) 
  function cb(entries, observer) {
    entries.forEach((entries) => {
      const target = entries.target;
      if (entries.isIntersecting) {
        if (contains(target, "observed") || contains(target, "text-animate") || contains(target, "container-icons")) {
          target.classList.add("animate-fade-right");
        }
        if (contains(target, "img-animate") || contains(target, "form")) {
          target.classList.add("animate-fade-left");
        }
        if (contains(target, "skill-card")) {
          target.classList.add("animate-fade-down");
        }
        if (contains(target, "icons") || contains(target, "footer-text")) {
          target.classList.add("animate-fade-up");
        }
        observer.unobserve(target);
      }
    });
  }

  //Instanciar el observer
  const observe = new IntersectionObserver(cb, options);

  //Unimos todo en un solo array para usar un solo for each
  const allItems = [...items, ...imgs, ...texts, ...skills, ...icons, footerText, contIcons, form]
  allItems.forEach((el) => observe.observe(el));

  function contains(target, e) {
    return target.classList.contains(e)
  }

  //Desactivar el observer al acabar
  return () => {
    allItems.forEach((item) => observe.unobserve(item));
  };
}
export default animations