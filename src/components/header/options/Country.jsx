function Country({ type, event }) {
  return (
    <>
      <img
        src={`/src/assets/converted/${type ? "spain" : "uk"}.webp`}
        className="w-full max-w-10 cursor-pointer select-none"
        alt={`img-country`}
        onClick={event}
      />
    </>
  );
}

export default Country;
