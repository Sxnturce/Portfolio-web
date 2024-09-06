import { useState, useEffect } from "react";
import Input from "../inputs/Input";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

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
    <section>
      <form
        method="POST"
        className="max-w-none md:max-w-[450px] mx-auto flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-[#ebebeb] font-bold text-4xl">Contáctame</h2>
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
    </section>
  );
}

export default Form;
