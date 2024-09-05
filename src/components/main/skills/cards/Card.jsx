import Atropos from "atropos/react";
import "atropos/atropos.css";

function Card({ title, src, astro, react }) {
  return (
    <>
      <Atropos
        className="my-atropos"
        activeOffset={80}
        shadow={false}
        rotateXMax={30}
        rotateYMax={30}
      >
        <div
          className={`flex skill-card flex-col gap-2 items-center justify-center cursor-pointer select-none p-3 bg-gray-200 dark:bg-color-skill dark:text-white rounded-md`}
        >
          <img
            src={src}
            alt={`img-${title}`}
            className={`${!astro ? "w-11" : "w-8"} ${react && "animate-spin animate-duration-[4s] animate-infinite"}`}
            title={title}
          />
          <h3 className="font-bold">{title}</h3>
        </div>
      </Atropos>
    </>
  );
}

export default Card;
