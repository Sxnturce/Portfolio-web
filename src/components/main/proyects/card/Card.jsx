import Link from "../../../header/options/Link";
function Card({ img, title, description, children, url, difuminate, gh }) {
  return (
    <>
      <section className="w-full grid grid-cols-1 2md:grid-cols-[2fr,1.4fr] gap-6 proyect-card">
        <div className="flex flex-col gap-3 text-animate animate-duration-[1.5s]">
          <h2 className="text-[1.8rem] text-center sm:text-left font-extrabold text-[#282542]">
            {title}
          </h2>
          <p className="text-center sm:text-left">{description}</p>
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-wrap items-center justify-center sm:justify-normal">
              {children}
            </div>
            <div className="flex gap-6 items-center justify-center sm:justify-normal">
              <Link msg={"URL"} type={null} small={true} url={url} />
              <Link msg={"Github"} type={"github"} small={true} url={gh} />
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full flex justify-center items-center p-2 img-animate animate-duration-[1.5s]">
          <img
            src={img}
            alt="img-proyect"
            className={`${difuminate ? "img-proyect" : ""} hover:scale-125 transition-all scale-105 ease-in-out duration-500 hover:-rotate-6 object-cover rounded-xl`}
          />
        </div>
      </section>
    </>
  );
}

export default Card;
