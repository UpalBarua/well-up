import React from "react";
import image1 from "../../public/images/outlet (1).jpg";
import image2 from "../../public/images/outlet (2).jpg";
import image3 from "../../public/images/outlet (3).jpg";
import image4 from "../../public/images/outlet (4).jpg";
import image5 from "../../public/images/outlet (5).jpg";
import image6 from "../../public/images/outlet (6).jpg";
import image7 from "../../public/images/outlet (7).jpg";
import image8 from "../../public/images/outlet (1).jpg";
// import image1 from "../../public/images/outlet (8).jpg";
import image9 from "../../public/images/outlet (9).jpg";
// import image1 from "../../public/images/outlet (1).jpg";
// import image1 from "../../public/images/outlet (1).jpg";
import Image from "next/image";

const AboutOutlet = () => {
  return (
    <section className="py-6 pt-16 dark:text-gray-50">
      <h1 className="text-center text-[30px] pb-8 font-bold text-orange-500">
        A GLIMPSE INTO OUR WORKSPACE
        <hr className=" w-1/2 mx-auto"></hr>
      </h1>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <Image
          src={image1}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow shadow-primary-500 min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image2}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image3}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image4}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image5}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image6}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image8}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image7}
        />
        <Image
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image9}
        />
        {/* <Image
              src="https://source.unsplash.com/random/302x302/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            /> */}
      </div>
    </section>
  );
};

export default AboutOutlet;
