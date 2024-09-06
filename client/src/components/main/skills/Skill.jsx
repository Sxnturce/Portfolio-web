import Card from "./cards/Card";
import html from "@/assets/converted/html-logo.webp";
import css from "@/assets/converted/css-logo.webp";
import js from "@/assets/converted/javascript-logo.webp";
import sass from "@/assets/converted/sass-logo.webp";
import astro from "@/assets/converted/astro.webp";
import react from "@/assets/converted/react-logo.webp";
import next from "@/assets/converted/nextjs-logo.webp";
import express from "@/assets/converted/express-logo.webp";
import typescript from "@/assets/converted/typescript-logo.webp";
import tailwind from "/iconos/tailwind.svg";
import node from "/iconos/nodejs.svg";
import bootstrap from "/iconos/bootstrap.svg";
import vite from "/vite.svg";
import php from "/iconos/PHP.svg";
import mysql from "/iconos/MySQL.svg";
import mongo from "/iconos/MongoDB.svg";

function Skill() {
  return (
    <>
      <section className="flex flex-col gap-12" id="skills">
        <h2 className="text-center lg:text-left text-[2.3rem] font-bold dark:text-color-smoke flex justify-center sm:justify-normal items-center gap-2 sm:gap-3">
          <span className="font-black text-emerald-600 animate-movement inline-block animate-infinite text-3xl sm:text-[2.3rem]">
            &lt;/&gt;
          </span>{" "}
          Technologies
        </h2>
        <section className="grid container-skills grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-4 xl:gap-6 px-2 ">
          <Card title={"HTML"} src={html} />
          <Card title={"CSS"} src={css} />
          <Card title={"JavaScript"} src={js} />
          <Card title={"Tailwind"} src={tailwind} />
          <Card title={"Sass"} src={sass} />
          <Card title={"Bootstrap"} src={bootstrap} />
          <Card title={"TypeScript"} src={typescript} />
          <Card title={"Astro"} src={astro} astro={true} />
          <Card title={"React"} src={react} react={true} />
          <Card title={"Next"} src={next} />
          <Card title={"NodeJS"} src={node} />
          <Card title={"Express"} src={express} />
          <Card title={"Vite"} src={vite} />
          <Card title={"PHP"} src={php} />
          <Card title={"MySQL"} src={mysql} />
          <Card title={"Mongo"} src={mongo} />
        </section>
      </section>
    </>
  );
}

export default Skill;
