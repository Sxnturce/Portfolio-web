import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Link({ type, msg, url, small }) {
  return (
    <>
      <a
        href={!url ? "#" : url}
        className={`${small ? "p-1 text-[0-98rem]" : "p-2 text-[1rem]"} px-3 bg-gray-900 text-white font-medium rounded   lg:text-lg cursor-pointer transition-all ease-in-out hover:ring-2 ring-2 hover:animate-jump animate-duration-700 animate-delay-200`}
        target="_blank"
      >
        {msg}
        <FontAwesomeIcon
          icon={
            type === "download" ? faDownload : type === "github" ? faGithub : faLink
          }
          className="ml-2"
        />
      </a>
    </>
  );
}

export default Link;
