import { useState, useEffect } from "react";
import logoNav from "@/assets/converted/logoNav.webp";
import Hero from "./Hero";
import Time from "./options/Time";
import Country from "./options/Country";
import Button from "./options/Button";
import Nav from "./options/Nav";

function Header() {
  const [change, setChange] = useState(true);
  const [time, setTime] = useState(true);
  const [slider, setSlider] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const theme = localStorage.getItem("theme");
      setTime(!theme);
    }
  }, []);

  function handleTime() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", true);
      setTime(false);
      return;
    }
    localStorage.removeItem("theme");
    setTime(true);
  }

  function handleCountry() {
    setChange(!change);
  }
  return (
    <>
      <header className="w-full h-dvh">
        <nav className=" fixed w-full top-0 bg-bg-white dark:bg-bg-nav p-4 z-30 transition-colors duration-200 dark:border-b dark:border-b-border-smoke">
          <div className="w-11/12 max-w-[1400px] mx-auto flex justify-between items-center">
            <div className="flex-grow basis-0">
              <a href="#" className="flex items-center gap-4 relative z-50 w-max">
                <p className="text-2xl dark:text-white">
                  High
                  <span className="text-black dark:text-white font-bold">Skill</span>
                </p>
                <img
                  src={logoNav}
                  alt="logo-img"
                  className="w-full max-w-10 dark:invert-[1]"
                />
              </a>
            </div>
            <ul className="lg:flex items-center hidden gap-8 [&>a]:text-gray-400 dark:[&>a]:text-[#808080] hover:[&>a]:text-black [&>a]:text-lg dark:hover:[&>a]:text-white [&>a]:transition-colors [&>a]:duration-200 ">
              <a href="#experience">
                <li>Experience</li>
              </a>
              <a href="#proyects">
                <li>Proyects</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
            <div className="lg:flex hidden flex-grow basis-0 justify-end gap-5 items-center">
              <Button />
              <Country type={change} event={handleCountry} />
              <Time time={time} event={handleTime} />
            </div>
            <label
              className={`burger block lg:hidden ${slider && "[&>span]:bg-black"} dark:[&>span]:bg-white`}
              htmlFor="burger"
              onChange={() => {
                setSlider(!slider);
              }}
            >
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </nav>
        <Nav active={slider} />
        <Hero />
      </header>
    </>
  );
}

export default Header;
