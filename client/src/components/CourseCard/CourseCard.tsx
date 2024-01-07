import React from "react";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { CgNametag } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const {
    id,
    course_name,
    course_banner,
    course_instructor,
    seat,
    start,
    batch,
    duration,
  } = course;

  return (
    <div>
      <div className="rounded-md shadow-md h-[485px] sm:w-96 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={course_banner}
          alt=""
          className="object-cover object-center w-full h-72 "
        />
        <div className="flex rounded-md gap-3 mt-2 mb-2 ml-2 dark:text-black">
          <button className="rounded-md bg-sky-200 font-bold px-2 py-1">
            Batch {batch}
          </button>
          <div className="flex gap-2 rounded-md items-center  bg-sky-200 font-bold px-2 py-1">
            <FaPersonDotsFromLine></FaPersonDotsFromLine>
            <button>Seat {seat}</button>
          </div>
          <div className="flex rounded-md gap-2 items-center  bg-sky-200 font-bold px-2 py-1">
            <MdOutlineVideoLibrary></MdOutlineVideoLibrary>
            <button>{duration}</button>
          </div>
        </div>

        <div className="pl-2 ">
          <div className="flex gap-2 font-bold pb-2 text-[1.2rem] items-center">
            <CgNametag className="text-[1.2rem]"></CgNametag>
            <h1>{course_name}</h1>
          </div>
          <div className="flex gap-2 font-semibold  items-center">
            <h1>Mentor : {course_instructor}</h1>
          </div>
          <h1 className="font-semibold ">Start from :{start}</h1>
        </div>
        <div className="pl-2 pt-2">
          <button className="px-4 py-2 bg-sky-300 rounded-md text-black font-bold ">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
