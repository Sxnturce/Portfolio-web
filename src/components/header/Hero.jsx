import Link from "./options/Link";
import programer from "@/assets/converted/programer-2.webp";
import { useState } from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  return (
    <>
      <section className="w-11/12 mx-auto max-w-[1600px] relative h-full overflow-hidden max-h-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full  gap-0 sm:gap-12  md:gap-12 lg:gap-4 md:place-content-center">
          <section className="flex flex-col gap-8 justify-end md:justify-center relative z-[5] lg:px-4">
            <h1 className="text-[2.15rem] sm:text-[2.45rem] md:text-[2.5rem] lg:text-6xl font-bold text-center lg:text-left animate-fade-down dark:text-color-smoke">
              &lt; I'm{" "}
              <ReactTyped
                className="text-dark-color-hero dark:text-color-hero font-black"
                strings={["Sebastian", "Developer", "Creative", "Designer"]}
                typeSpeed={100}
                backSpeed={80}
                cursorChar=""
                loop
              />{" "}
              /&gt;
            </h1>

            <p className="text-[0.95rem] md:text-lg lg:text-left text-center animate-fade-right dark:text-color-smoke-high">
              A Software Engineering student from Peru, training to become a
              full-stack developer. Passionate about creating and designing scalable,
              reusable code to address business and personal challenges.
            </p>
            <div className="flex gap-8 justify-center lg:justify-normal">
              <Link type="download" msg={"Download CV"} />
              <Link
                type="github"
                msg={"Github"}
                url={"https://github.com/Sxnturce"}
              />
            </div>
          </section>
          <section className="flex items-center justify-center h-full">
            <img
              src={programer}
              alt=""
              className={`select-none w-full max-w-[300px] md:max-w-[350px] lg:max-w-[500px] drop-shadow-light-gray ${load ? "animate-subirBajar" : `animate-fade-down `} dark:drop-shadow drop-shadow-light-gray`}
            />
          </section>
        </div>
        <div className=" w-[200px] h-[200px] lg:w-[600px] lg:h-[450px] left-10 bottom-[200px] rounded-full absolute bg-[#44a4fd33] dark:bg-[#36363633]  blur-2xl opacity-30 animate-pulse"></div>
      </section>
    </>
  );
}

export default Hero;
