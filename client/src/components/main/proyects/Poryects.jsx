import Card from "./card/Card";
import Hard from "./card/Hard";
import rickyMorty from "@/assets/converted/proyect-1.webp";
import footlux from "@/assets/converted/proyect-4.webp";
import html from "@/assets/converted/html-logo.webp";
import css from "@/assets/converted/css-logo.webp";
import js from "@/assets/converted/javascript-logo.webp";
import sass from "@/assets/converted/sass-logo.webp";
import astro from "@/assets/converted/astro.webp";
import typescript from "@/assets/converted/typescript-logo.webp";
import express from "@/assets/converted/express-logo.webp";
import mongo from "@/assets/converted/MongoDB.svg";
import mysql from "@/assets/converted/MySQL.svg";
import nodejs from "@/assets/converted/nodejs.svg";
import react from "@/assets/converted/react-logo.webp";
import shopNest from "@/assets/converted/ShopNest.webp";
import InvenTrack from "@/assets/converted/InvenTrack.webp";
import tailwind from "/iconos/tailwind.svg";

function Proyects() {
  return (
    <>
      <section className="flex flex-col gap-6" id="proyects">
        <h2 className="text-center lg:text-left text-[2.8rem] font-bold dark:text-color-smoke flex sm:justify-normal justify-center items-center gap-3">
          <span className="hidden sm:block">🔩</span> Proyects
        </h2>
        <div className="flex flex-col gap-14">
          <Card
            img={footlux}
            title={"Footlux"}
            difuminate={true}
            gh={"https://github.com/Sxnturce/Sxnturce.github.io"}
            url={"https://sxnturce.github.io/"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum porro sint, ut, reprehenderit exercitationem commodi voluptatum, fugit voluptates a perferendis sapiente perspiciatis tempore quis magnam pariatur. Laudantium, quas dolore. "
            }
          >
            <Hard img={html} msg={"HTML"} />
            <Hard img={sass} msg={"Sass"} />
            <Hard img={js} msg={"JavaScript"} />
          </Card>
          <Card
            img={rickyMorty}
            title={"Rick y Morty API"}
            gh={"https://github.com/Sxnturce/RickyMorty"}
            url={"https://ricky-morty-gamma.vercel.app/"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum porro sint, ut, reprehenderit exercitationem commodi voluptatum, fugit voluptates a perferendis sapiente perspiciatis tempore quis magnam pariatur. Laudantium, quas dolore."
            }
          >
            <Hard img={astro} msg={"Astro"} astro={true} />
            <Hard img={react} msg={"React"} react={true} />
            <Hard img={css} msg={"CSS"} />
          </Card>
          <Card
            img={InvenTrack}
            title={"InvenTrack"}
            gh={"https://github.com/Sxnturce/InvenTrack"}
            url={"https://inven-track-tau.vercel.app/"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum porro sint, ut, reprehenderit exercitationem commodi voluptatum, fugit voluptates a perferendis sapiente perspiciatis tempore quis magnam pariatur. Laudantium, quas dolore. "
            }
          >
            <Hard img={react} msg={"React"} react={true} />
            <Hard img={tailwind} msg={"Tailwind"} />
            <Hard img={nodejs} msg={"NodeJS"} />
            <Hard img={express} msg={"express"} />
            <Hard img={mysql} msg={"Mysql"} />
          </Card>
          <Card
            img={shopNest}
            title={"ShopNest"}
            gh={"https://github.com/Sxnturce/ShopNest"}
            url={"https://shop-nest-two.vercel.app/"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum porro sint, ut, reprehenderit exercitationem commodi voluptatum, fugit voluptates a perferendis sapiente perspiciatis tempore quis magnam pariatur. Laudantium, quas dolore. "
            }
          >
            <Hard img={react} msg={"React"} react={true} />
            <Hard img={tailwind} msg={"Tailwind"} />
            <Hard img={typescript} msg={"TypeScript"} />
            <Hard img={nodejs} msg={"NodeJS"} />
            <Hard img={express} msg={"express"} />
          </Card>
        </div>
      </section>
    </>
  );
}

export default Proyects;
