import { useState, useEffect } from "react";
import clientAxios from "../../../config/axios";
import generateToken from "../../../helpers/Token.js";
import Input from "../inputs/Input";
import alerta from "../../alerts/Alerta.js";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    sessionStorage.removeItem("session");
  }, []);

  useEffect(() => {
    setErrName("");
    setErrEmail("");
    setErrMsg("");
  }, [name, email, msg]);

  async function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const token = sessionStorage.getItem("session") || generateToken();

    if (!name.trim()) {
      setErrName("El nombre es obligatorio.");
      return;
    }

    if (name.trim().length <= 3) {
      setErrName("El nombre es demasiado corto.");
      return;
    }

    if (!email.trim()) {
      setErrEmail("El email es obligatorio.");
      return;
    }

    if (!msg.trim()) {
      setErrMsg("El mensaje es obligatorio.");
      return;
    }

    if (msg.trim().length <= 15) {
      setErrMsg("Su mensaje debe tener al menos 15 carácteres.");
      return;
    }

    if (!sessionStorage.getItem("session")) {
      sessionStorage.setItem("session", token);
    } else {
      setErrName("Solo puedes enviar un mensaje, por favor recarga la pagina.");
      return;
    }

    try {
      const client = await clientAxios.post("/portfolio", {
        name,
        email,
        msg,
      });
      const mensage = client.data.msg;
      alerta("success", mensage, name);
      target.reset();
      clearInputs();
    } catch (e) {
      const msgErr = e.response?.data?.err;
      alerta("error", msgErr, name, true);
      sessionStorage.removeItem("session");
    }
  }

  function clearInputs() {
    setName("");
    setEmail("");
    setMsg("");
  }
  return (
    <section>
      <form
        method="POST"
        className="max-w-none md:max-w-[450px] mx-auto flex flex-col gap-5 form"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-[#ebebeb] font-bold text-4xl">Contáctame</h2>
        <Input
          name={"Name"}
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
