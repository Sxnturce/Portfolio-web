import { useEffect } from "react";
import TimeLine from "../components/main/timeLine/TimeLine";
import Skill from "../components/main/skills/Skill";

function Home() {
  useEffect(() => {
    const item = document.querySelectorAll(".observed");

    function cb(entries, observer) {
      entries.forEach((entries) => {
        const target = entries.target;
        if (entries.isIntersecting) {
          target.classList.add("animate-fade-right");
          observer.unobserve(target);
        }
      });
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observe = new IntersectionObserver(cb, options);
    item.forEach((it) => {
      observe.observe(it);
    });

    return () => {
      item.forEach((it) => observe.unobserve(it));
    };
  }, []);
  return (
    <>
      <section
        className="flex flex-col gap-6 mx-auto w-full lg:max-w-[1200px]"
        id="experience"
      >
        <h1 className=" text-[2.2rem] sm:text-[2.7rem] font-bold text-center lg:text-left text-[#242323] [&>span]:text-black transition-all duration-300 ease-in-out">
          <span className="font-black"></span>Professional Experience{" "}
          <span className="font-black"></span>
        </h1>
        <TimeLine
          title={"Open Source Projects"}
          place={"Lima Surco"}
          charge={"Freelance Developer"}
          date={"October 2023 - Present"}
        />
        <TimeLine
          title={"React Junior Developer"}
          place={"Lima, Surco"}
          charge={"Home Office"}
          date={"July 2024 - Present"}
        />
        <TimeLine
          title={"Software Engineer"}
          place={"Lima, San borja"}
          charge={"Home office"}
          date={"October 2024"}
        />
      </section>
      <Skill />
    </>
  );
}

export default Home;
