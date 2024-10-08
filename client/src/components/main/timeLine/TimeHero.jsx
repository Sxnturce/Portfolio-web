import TimeLine from "./options/TimeLine";

function TimeHero() {
  return (
    <>
      <section className="flex flex-col gap-6 w-full" id="experience">
        <h1 className=" text-[2.2rem] sm:text-[2.3rem] font-bold text-center lg:text-left text-[#242323] dark:text-color-smoke [&>span]:text-black transition-all duration-300 ease-in-out flex sm:justify-normal justify-center items-center gap-3">
          <span className="hidden sm:block">📖 </span>Professional Experience{" "}
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
    </>
  );
}

export default TimeHero;
