import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Link({ type, msg }) {
  return (
    <>
      <a
        href="#"
        className="p-2 px-3 bg-gray-900 text-white font-medium rounded text-[1rem]  lg:text-lg cursor-pointer transition-all ease-in-out  hover:ring-2 ring-2  hover:animate-jump"
      >
        {msg}
        <FontAwesomeIcon icon={type ? faDownload : faGithub} className="ml-2" />
      </a>
    </>
  );
}

export default Link;
