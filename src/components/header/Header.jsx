import { useState } from "react";
import Hero from "./Hero";
import Time from "./options/Time";
import Country from "./options/Country";
import Button from "./options/Button";
import Nav from "./options/Nav";

function Header() {
  const [change, setChange] = useState(true);
  const [time, setTime] = useState(true);
  const [slider, setSlider] = useState(false);

  function handleCountry() {
    setChange(!change);
  }

  function handleTime() {
    setTime(!time);
  }
  return (
    <>
      <header className="w-full h-screen">
        <nav className=" fixed w-full top-0 bg-white p-4 z-30">
          <div className="w-11/12 max-w-[1400px] mx-auto flex justify-between items-center">
            <a
              href="#"
              className="flex items-center gap-4 flex-grow basis-0 relative z-50"
            >
              <p className="text-2xl">
                High
                <span className="text-black font-bold">Skill</span>
              </p>
              <img
                src="/src/assets/converted/logoNav.webp"
                alt="logo-img"
                className="w-full max-w-10"
              />
            </a>
            <ul className="lg:flex items-center hidden gap-8 [&>a]:text-gray-600 hover:[&>a]:text-black [&>a]:text-lg hover:[&>a]">
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Blogs</li>
              </a>
              <a href="#">
                <li>Proyects</li>
              </a>
              <a href="#">
                <li>Skills</li>
              </a>
            </ul>
            <div className="lg:flex hidden flex-grow basis-0 justify-end gap-5 items-center">
              <Button />
              <Country type={change} event={handleCountry} />
              <Time time={time} event={handleTime} />
            </div>
            <label
              className={`burger block lg:hidden ${slider && "[&>span]:bg-black"}`}
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
