import React from "react";
import { MdManageAccounts } from "react-icons/md";

const Members = () => {
  const allMembers = [
    {
      id: 1,
      position: "Total Student",
      number: 1100,
      backGround: "#FFD9DA",
    },
    {
      id: 2,
      position: "Graduated ",
      number: 500,
      backGround: "#93E1D8",
    },
    {
      id: 3,
      position: "Instructor",
      number: 122,
      backGround: "#99F7AB",
    },
  ];
  return (
    <section className="w-full lg:w-[570px] mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {allMembers?.map((members) => (
          <div className="flex justify-center  text-center" key={members.id}>
            <div
              style={{ backgroundColor: members.backGround }}
              className="pl-8 pr-8 pt-8 pb-8 rounded-md"
            >
              <div className="flex justify-center">
                <MdManageAccounts className="text-5xl pb-2"></MdManageAccounts>
              </div>
              <h1 className="text-4xl font-bold">{members.number}+</h1>
              <h1 className=" font-semibold">{members.position}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
