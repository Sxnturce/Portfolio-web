import Items from "./Items";

function TimeLine({ title, place, charge, date }) {
  return (
    <>
      <div className="w-full observed animate-duration-[1.5s]">
        <h2 className="text-[#282542] text-[1.3rem] sm:text-[1.4rem] font-extrabold">
          {title}
        </h2>
        <h3 className="flex items-center text-md text-gray-500  mt-1 mb-4">
          <svg
            className="size-4 ml-1 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135-4.244-4.243A9 9 0 0 1 18.364 4.636zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
          {place}
        </h3>
        <Items charge={charge} date={date} />
      </div>
    </>
  );
}

export default TimeLine;
