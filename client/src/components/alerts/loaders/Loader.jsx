function Loader({ visible }) {
  return (
    <>
      <div className={`${visible ? "block" : "hidden"} loader`}></div>
    </>
  );
}

export default Loader;
