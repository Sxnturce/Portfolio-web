import spain from "@/assets/converted/spain.webp";
import uk from "@/assets/converted/uk.webp";

function Country({ type, event }) {
  return (
    <>
      <img
        src={type ? spain : uk}
        className="w-full max-w-10 cursor-pointer select-none"
        alt={`img-country`}
        onClick={event}
      />
    </>
  );
}

export default Country;
