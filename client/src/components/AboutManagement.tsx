import Image from "next/image";
import React from "react";

const AboutManagement = () => {
  const AllManagement = [
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      position: "Ceo",
    },
    {
      id: 2,
      name: "Abu Sufian",
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      position: "Assistant Manager",
    },

    {
      id: 3,
      name: "Jisan Mahmud",
      image:
        "https://images.unsplash.com/photo-1610611666931-8789fd05e006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZXJzb258ZW58MHwwfDB8fHww",
      position: "Product Executive",
    },
    {
      id: 4,
      name: "Fahan Nayem",
      image:
        "https://plus.unsplash.com/premium_photo-1690296204289-14e517830d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      position: "Associate Manager",
    },
    {
      id: 5,
      name: "Niaz Morshed",
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      position: "Senior Executive",
    },
    {
      id: 6,
      name: "Mohita sen",
      image:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MHwwfHx8MA%3D%3D",
      position: "Visualizer",
    },
  ];
  return (
    <section className="mt-14">
      <h1 className="text-center text-[30px] pb-8 font-bold text-orange-500">
        Meet Our Management Team
        <hr className=" w-1/2 mx-auto"></hr>
      </h1>

      <div className="grid grid-cols-1 ml-8 mr-8 lg:grid-cols-3 gap-8">
        {AllManagement?.map((management) => (
          <div key={management?.id}>
            <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100 transition duration-300 border-b-2 border-r-2 border-transparent hover:border-sky-500">
              <Image
                src={management?.image}
                height={300}
                width={400}
                alt=""
                className="flex-shrink-0 object-cover  rounded-sm  dark:bg-gray-500 aspect-square"
              />
              <div>
                <h2 className="text-xl font-semibold">{management?.name}</h2>
                <span className="block pb-2 text-sm dark:text-gray-400">
                  {management?.position} of Well-up Technology.
                </span>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutManagement;
