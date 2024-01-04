import React from "react";
import { VscSymbolClass } from "react-icons/vsc";

const Catagories = () => {
  const allCatagories = [
    {
      id: 1,
      name: "Design and Development",
      course: 4,
    },
    {
      id: 2,
      name: "Competitive programming",
      course: 3,
    },
    {
      id: 3,
      name: "Head of marketing",
      course: 4,
    },
    {
      id: 4,
      name: "CCNA Networking",
      course: 2,
    },
  ];
  return (
    <section className="mt-14 ">
      <h1 className="text-center dark:text-white text-2xl font-bold mb-14">
        Course Catagories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center ml-8 mr-8">
        {allCatagories?.map((catagories) => (
          <div key={catagories?.id}>
            <div className="bg-gray-50 dark:bg-gray-900 dark:text-white dark:border-gray-600 border-2 p-4 rounded-md  h-[180px]">
              <VscSymbolClass className="text-4xl mb-2 dark:bg-gray-900  rounded-md bg-sky-100 text-blue-600"></VscSymbolClass>
              <h1 className="text-2xl font-bold">{catagories?.name}</h1>
              <h1 className=" font-semibold mt-2">
                {catagories?.course} courses
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catagories;
