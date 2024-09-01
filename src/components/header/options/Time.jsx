import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Time({ time, event }) {
  return (
    <>
      <div className={`w-8 flex items-center justify-center`}>
        <FontAwesomeIcon
          icon={time ? faMoon : faSun}
          onClick={event}
          className={`cursor-pointer text-[1.75rem] ${time ? "text-gray-700" : "text-yellow-300"} `}
        />
      </div>
    </>
  );
}

export default Time;
