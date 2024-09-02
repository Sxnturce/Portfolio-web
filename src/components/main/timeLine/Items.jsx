function Items({ charge, date }) {
  return (
    <>
      <li className="list-none">
        <div className="relative mx-12 pb-8 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-1 md:gap-2">
          <div className="relative pb-2">
            <div>
              <span className="text-gray-800 -left-[42px] absolute rounded-full text-5xl">
                •
              </span>
              <h3 className="text-xl font-bold text-neutral-700">{charge}</h3>
              <time className="block mt-1 text-sm text-gray-500 ">{date}</time>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 pb-2 text-gray-700  text-pretty">
            <ul className="list-disc pl-0 sm:pl-5 marker:text-gray-900 flex flex-col gap-2">
              <li className="pl-1">
                Actively contributing to multiple open-source projects, including the
                BigCapital project, where I develop features and enhance financial
                technology solutions.
              </li>
              <li className="pl-1">
                Writing clean, efficient code across a variety of platforms,
                leveraging modern technologies and frameworks to solve complex
                problems.
              </li>
              <li className="pl-1">
                Identifying and resolving bugs, optimizing performance, and enhancing
                the scalability of software solutions across different projects.
              </li>
              <li className="pl-1">
                Participating in discussions, proposing new ideas, and helping
                onboard new contributors to foster growth within the open-source
                community.
              </li>
              <li className="pl-1">
                Continuously learning and applying best practices in software
                development to deliver innovative and reliable solutions.
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

export default Items;
