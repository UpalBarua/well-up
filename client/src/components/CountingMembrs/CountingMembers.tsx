import React from "react";
import CountUp from "react-countup";

const CountingMembers = () => {
  return (
    <section className="pt-14 w-full  lg:w-3/4 mx-auto">
      <h1 className="text-center font-bold text-[24px] pb-14">
        In Our Coaching Success
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 pl-4 pr-4 gap-14">
        <div className="pt-4 pb-4 pl-12 pr-4 text-center dark:shadow-gray-500 shadow shadow-primary-500">
          <div style={{ fontSize: "70px" }}>
            <CountUp
              className="text-green-500  font-mono"
              start={0}
              end={1500}
              duration={6}
            />
          </div>
          <h1 className="text-2xl font-bold text-secondary-500 font-mono">
            Total Student
          </h1>
        </div>
        <div className="pt-4 pb-4 pl-12 pr-4 text-center dark:shadow-gray-500 shadow shadow-primary-500">
          <div style={{ fontSize: "70px" }}>
            <CountUp
              className="text-green-500 font-mono"
              start={0}
              end={160}
              duration={8}
            />
          </div>
          <h1 className="text-2xl font-bold text-secondary-500 font-mono">
            Running Student
          </h1>
        </div>
        <div className="pt-4 pb-4 pl-12 pr-4 text-center dark:shadow-gray-500 shadow shadow-primary-500 ">
          <div style={{ fontSize: "70px" }}>
            <CountUp
              className="text-green-500 font-mono"
              start={0}
              end={210}
              duration={8}
            />
          </div>
          <h1 className="text-2xl font-bold text-secondary-500 font-mono">
            Got Hired
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CountingMembers;
