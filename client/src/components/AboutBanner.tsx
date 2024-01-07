import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8  lg:pt-16  pt-16">
      <div className="pl-8">
        <h1 className="font-bold text-[26px] pb-3 text-orange-500">
          ABOUT <span className="text-sky-600">US</span>
          <hr className=" w-[150px]"></hr>
        </h1>
        <h1>
          <span className="text-[16px] font-semibold">Well-Up Technology</span>{" "}
          is an organization conducting professional training courses related to
          professional work and engineering. Which provides professional skill
          development training services to create skilled human resources and
          build skill careers to play a role in the era of industrial
          revolution. Our aim is to prepare the young society for the job market
          in the age of industrial revolution as well as to create technology
          based industrial entrepreneurs.
        </h1>
        <h1 className="pt-4">
          Currently, our organization provides training on more than 35 courses
          including timely ETABS, AutoCAD, 3ds max, Google sketch, SolidWorks,
          PLC, Web Design & Development, Python, CCNA, Graphic design in
          professional courses, with the aim of creating professional people,
          besides working in various projects. It is playing a role in creating
          a complete project by keeping it relevant.
        </h1>
      </div>

      <div className="pt-6">
        <Image
          height={400}
          width={550}
          className=" rounded-md "
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZnR3YXJlfGVufDB8fDB8fHww"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default AboutBanner;
