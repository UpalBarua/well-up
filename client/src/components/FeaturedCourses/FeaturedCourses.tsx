import React from "react";

const FeaturedCourses = () => {
  const allFeaturesCourses = [
    {
      id: 1,
      duration: "6h 50m",
      batch: "Offline",
      course_name: "Expert in Graphics",
      details:
        "It is a course where you learn how you use Graphics fundamental in a project.Explore Real time project Design",
      instructor: "Shawon Hasan",
      amount: "5,500",
      course_banner:
        "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor_pic:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      duration: "8h 50m",
      batch: "Offline",
      course_name: "Maker of Networking",
      details:
        "It is a course where you learn how you use networking fundamental in a project.Explore router and uses. ",
      instructor: "Kamrul hasan",
      amount: "6,0000",
      course_banner:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor_pic:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      duration: "7h 50m",
      batch: "Offline",
      course_name: "Head of Marketing",
      details:
        "It is a course where you learn how you use marketing fundamental in a project.Explore communication. ",
      instructor: "Asif Akbar",
      amount: "6,5000",
      course_banner:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor_pic:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      duration: "5h 50m",
      batch: "Offline",
      course_name: "Master of javascript",
      details:
        "It is a course where you learn how you use javascript fundamental in a project.Explore es6 and dom manipulation.",
      instructor: "Niaz abir",
      amount: "6,0000",
      course_banner:
        "https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor_pic:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <section className="pt-14 dark:bg-gray-900">
      <h1 className="mb-14 text-2xl font-bold text-center dark:text-white">
        Featured Courses
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {allFeaturesCourses?.map((course) => (
          <div key={course?.id}>
            <div className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
              <div className="h-[480px]  ">
                <div className="space-y-2">
                  <img
                    src={course?.course_banner}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">
                      {course?.course_name}
                    </h3>
                  </a>
                  <p className=" dark:text-gray-400">{course?.details}</p>
                </div>

                <div className="flex gap-4 mt-2 ">
                  <button className="font-semibold">
                    Duration : {course?.duration}
                  </button>
                  <button className="font-semibold">
                    Batch : {course?.batch}
                  </button>
                </div>

                <div className="flex pt-4 justify-between pb-4 border-bottom">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-4">
                      <img
                        alt=""
                        src={course?.instructor_pic}
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <p className="text-[15px] font-semibold">
                          {course?.instructor}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold text-[18px] mt-4">
                    {course?.amount} BDT
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
