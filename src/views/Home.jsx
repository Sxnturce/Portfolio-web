import { useEffect } from "react";
import TimeHero from "../components/main/timeLine/TimeHero";
import Proyects from "../components/main/proyects/Poryects";
import Skill from "../components/main/skills/Skill";

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".observed");
    const imgs = document.querySelectorAll(".img-animate");
    const texts = document.querySelectorAll(".text-animate");
    const skills = document.querySelectorAll(".skill-card");

    skills.forEach((skill, index) => {
      skill.classList.add(`time-${index}`);
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    function callb(entries, observer) {
      entries.forEach((entries, index) => {
        const target = entries.target;
        if (entries.isIntersecting) {
          target.classList.add("animate-fade-left");
          observer.unobserve(target);
        }
      });
    }

    function cb(entries, observer) {
      entries.forEach((entries) => {
        const target = entries.target;
        if (entries.isIntersecting) {
          target.classList.add("animate-fade-right");
          observer.unobserve(target);
        }
      });
    }

    function cbSkills(entries, observer) {
      entries.forEach((entries) => {
        const target = entries.target;
        if (entries.isIntersecting) {
          target.classList.add("animate-fade-down");
          observer.unobserve(target);
        }
      });
    }

    const observe = new IntersectionObserver(cb, options);
    const observeText = new IntersectionObserver(cb, options);
    const observeCard = new IntersectionObserver(callb, options);
    const observeSkill = new IntersectionObserver(cbSkills, options);

    items.forEach((it) => {
      observe.observe(it);
    });
    imgs.forEach((img) => {
      observeCard.observe(img);
    });
    texts.forEach((text) => {
      observeText.observe(text);
    });
    skills.forEach((skill) => {
      observeSkill.observe(skill);
    });

    return () => {
      items.forEach((item) => observe.unobserve(item));
      imgs.forEach((img) => observeCard.unobserve(img));
      skills.forEach((skill) => observeCard.unobserve(skill));
    };
  }, []);
  return (
    <>
      <TimeHero />
      <Proyects />
      <Skill />
    </>
  );
}

export default Home;
