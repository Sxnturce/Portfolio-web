function Hard({ msg, img, astro, react }) {
  return (
    <>
      <div className="flex gap-[0.5rem] bg-gray-200 dark:bg-color-skill rounded-md items-center justify-between p-2 hover:ring-2 ring-sky-200 cursor-pointer transition-all ease-in-out">
        <p className="font-bold text-black dark:text-white  text-sm">{msg}</p>
        <img
          src={img}
          alt="skill"
          className={`${!astro ? "w-5" : "w-[0.95rem]"} ${react && "animate-spin animate-duration-[4s] animate-infinite"} `}
        />
      </div>
    </>
  );
}

export default Hard;
