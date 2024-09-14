import Swal from "sweetalert2";
import "@sweetalert2/theme-bulma"
import withReactContent from "sweetalert2-react-content";

function alerta(icon, msg, name, err) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon,
    title: msg || "Ocurrio un error",
    text: !err ? `${name} les responderemos los mas pronto posible 🙌` : "Por favor intente otra vez 😔",
    showConfirmButton: true,
  });
}

export default alerta