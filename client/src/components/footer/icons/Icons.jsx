import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Icons({ src, ico }) {
  return (
    <a
      href={src}
      target="_blank"
      className={`icons rounded-full h-4 w-4 bg-color-smoke dark:bg-color-skill dark:text-white p-5 flex  items-center justify-center`}
    >
      <FontAwesomeIcon icon={ico} className="text-2xl" />
    </a>
  );
}

export default Icons;
