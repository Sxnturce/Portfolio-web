import { useState, useEffect } from "react";
import logoNav from "@/assets/converted/logoNav.webp";
import Input from "./inputs/Input";
function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const date = new Date().getFullYear();

  useEffect(() => {
    setErrName("");
    setErrEmail("");
    setErrMsg("");
  }, [name, email, msg]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setErrName("El nombre es obligatorio");
      return;
    }

    if (name.trim().length <= 3) {
      setErrName("El nombre es demasiado corto");
      return;
    }

    if (!email.trim()) {
      setErrEmail("El email es obligatorio");
      return;
    }

    if (!msg.trim()) {
      setErrMsg("El mensaje es obligatorio");
      return;
    }

    if (msg.trim().length <= 15) {
      setErrMsg("Su mensaje debe tener al menos 15 carácteres");
      return;
    }
    console.log("Todo bien");
  }
  return (
    <>
      <footer
        className="w-full bg-bg-nav mt-[8rem] border border-transparent dark:border-t dark:border-t-[#292929]"
        id="contact"
      >
        <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-[2fr,1.5fr]">
          <div className="w-11/12 mx-auto max-w-[1400px]">
            <a
              href="#"
              className="flex items-center gap-4 flex-grow basis-0 relative z-50 text-white"
            >
              <p className="text-4xl dark:text-white">
                High
                <span className="text-White dark:text-white font-bold">Skill</span>
              </p>
              <img
                src={logoNav}
                alt="logo-img"
                className="w-full max-w-10 invert-[1]"
              />
            </a>
          </div>
          <div>
            <form
              method="POST"
              className="max-w-none md:max-w-[450px] mx-auto flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center text-[#ebebeb] font-bold text-4xl">
                Contactame:
              </h2>
              <Input
                name={"Nombre"}
                err={errName}
                event={({ target: { value } }) => {
                  setName(value);
                }}
              />
              <Input
                name={"Email"}
                type={"email"}
                err={errEmail}
                event={({ target: { value } }) => {
                  setEmail(value);
                }}
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="msg" className="font-bold text-xl text-[#ebebeb]">
                  Mensaje:
                </label>
                <textarea
                  placeholder="Ingrese su mensaje"
                  onChange={({ target: { value } }) => {
                    setMsg(value);
                  }}
                  name="msg"
                  className="bg-gray-100 p-2 rounded-sm outline-none ring-2 dark:text-white ring-transparent focus:ring-2 focus:ring-gray-200 h-24 resize-none dark:bg-color-skill"
                />
                {errMsg && <p className="text-red-400 text-sm">{errMsg}</p>}
              </div>
              <input
                type="submit"
                value="Enviar"
                className="font-bold text-black dark:bg-[#2d2b2b] dark:text-white bg-text-smoke rounded-sm p-2 cursor-pointer uppercase active:translate-y-1 active:scale-[0.98] transition-all dark:hover:bg-[#202020] ease-in-out duration-300 hover:bg-zinc-950 hover:text-text-smoke"
              />
            </form>
          </div>
        </section>
        <section className="border-t border-t-[#3f3f3f] py-4">
          <h2 className="text-white text-center text-xl">
            High<span className="font-extrabold">Skill</span> &copy;{date}{" "}
            <span className="text-lg text-gray-400">version 1.0</span>
          </h2>
        </section>
      </footer>
    </>
  );
}

export default Footer;
