import { useState } from "react";
import statua from "@/assets/converted/statua.webp";
import Time from "./Time";
import Country from "./Country";

function Nav({ active }) {
  const [change, setChange] = useState(true);
  const [time, setTime] = useState(true);

  function handleCountry() {
    setChange(!change);
  }

  function handleTime() {
    setTime(!time);
  }
  return (
    <>
      <aside
        className={`fixed z-10 inset-0 bg-white px-10 ${!active ? "translate-x-full" : "translate-x-0"} transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-6 h-full">
          <ul className="flex flex-col justify-center items-start gap-8 [&>a]:text-gray-600 hover:[&>a]:text-black [&>a]:text-lg hover:[&>a] h-full ">
            <div className="w-full">
              <p
                className={`font-bold text-lg ${active ? "animate-fade-down" : ""} `}
              >
                Options
              </p>
              <hr className="bg-black h-1 w-full" />
            </div>
            <a href="#" className={`${active ? "animate-fade-left" : ""}`}>
              <li>Experience</li>
            </a>
            <a href="#" className={`${active ? "animate-fade-left" : ""}`}>
              <li>Proyects</li>
            </a>
            <a href="#" className={`${active ? "animate-fade-left" : ""}`}>
              <li>Blogs</li>
            </a>
            <a href="#" className={`${active ? "animate-fade-left" : ""}`}>
              <li>Skills</li>
            </a>
            <div className="w-full relative z-10 ">
              <p
                className={`font-bold text-lg ${active ? "animate-fade-down" : ""}`}
              >
                Other
              </p>
              <hr className="bg-black h-1 w-full" />
              <div
                className={`flex items-center justify-between mt-10 w-[200px] ${active ? "animate-fade-left" : ""}`}
              >
                <p className="font-bold text-lg">Language:</p>
                <Country type={change} event={handleCountry} />
              </div>
              <div
                className={`flex items-center justify-between w-[200px] mt-5 ${active ? "animate-fade-left" : ""}`}
              >
                <p className="font-bold text-lg">Theme:</p>
                <Time time={time} event={handleTime} />
              </div>
            </div>
          </ul>
          <img
            src={statua}
            className="absolute opacity-20 -bottom-3 -right-[4.5rem] transition-all ease-in-out duration-300 hover:scale-110 hover:-rotate-12 "
            alt=""
          />
        </div>
      </aside>
    </>
  );
}

export default Nav;
