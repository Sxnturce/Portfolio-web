function Input({ type, name, event, value, err }) {
  const lower = name.toLowerCase();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${lower}`} className="font-bold text-xl text-[#ebebeb]">
        {name}:
      </label>
      <input
        type={(type && "email") || "text"}
        placeholder="Ingrese su nombre"
        onChange={event}
        value={value}
        id={`${lower}`}
        name={`${lower}`}
        className="bg-gray-100 dark:bg-color-skill py-[0.18rem] dark:text-white px-3 rounded-sm outline-none ring-2 ring-transparent focus:ring-2 focus:ring-gray-200"
      />
      {err && <p className="text-red-400 text-sm">{err}</p>}
    </div>
  );
}

export default Input;
