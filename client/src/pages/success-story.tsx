import React from "react";
import Marquee from "react-fast-marquee";

const Success = () => {
  const successStory = [
    {
      id: 1,
      story: "https://www.youtube.com/embed/w2JLJ4YdYIM?si=POZraabwrbBZkdzS",
    },
    {
      id: 2,
      story: "https://www.youtube.com/embed/xDGqWLaJ_uk?si=WvSVpeJtSssZGcJz",
    },
    {
      id: 3,
      story: "https://www.youtube.com/embed/uYDQYmpHA9I?si=SRi-lBvkq4dL_gei",
    },
    {
      id: 4,
      story: "https://www.youtube.com/embed/b-IlerW4yCI?si=XNIX0bnSzyiKBdkD",
    },
  ];

  const textReviews = [
    {
      id: 1,
      name: "asim roy",
      batch: "Python Developer",
      back: "#FFA9E7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbOTGGFzdWOAb6R1S5vujgZ4zHoQs16CD4yN3vq6U5g&s",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 2,
      name: "Jisan ahmed",
      batch: "Graphics Designer",
      back: "#BB999C",
      image:
        "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 3,
      name: "samir mahmud",
      batch: "web developer",
      back: "#E88D67",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 4,
      name: "shawon khan",
      batch: "web developer",
      back: "#9999C3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwv3-SNd4gRD40Hcbo5gw9IPmPvMo5C6w5_BLq_zdTOdBIL25bx0cP9zYAQ&s",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 5,
      name: "upal Barua",
      batch: "networking",
      back: "#C6D2ED",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl6lM1ApDmjv2b17QD77iKBxZDmzVjebXEQ&usqp=CAU",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 6,
      name: "Jisan talukder",
      batch: "web developer",
      back: "#AFD2E9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOXZyXR4-UPEVKjTONTA6OrZJetX-8Od-H9hPp-oSRokFtK8fCGwgn5QlSA&s",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 7,
      name: "jesmin akter",
      batch: "web developer",
      back: "#CFFFB0",
      image:
        "https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 8,
      name: "mahesh kumar",
      batch: "web developer",
      back: "#C9B1BD",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREI7PP7E1phTXhJ5aWcHJzAU8oV_aTC0B1nMgQ2jd_TrPoKgjJONFnyDTrGw&s",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 9,
      name: "ummhe rumki ",
      batch: "graphic Designer ",
      back: "#D5DFE5",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
    {
      id: 10,
      name: "neha Sharma",
      batch: "web developer",
      back: "#97D2FB",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb1jQTMdIb_CwV5-nyBke4VZ3ESYjQil-Eg&usqp=CAU",
      review:
        "This is a great course for of all .Instructor is very great.His explanation is to good. ",
    },
  ];
  return (
    <section className="mt-14">
      <h1 className="text-center font-bold text-2xl mb-14">
        OUR SUCCESS_STORY
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-8 mt-8  gap-8">
        {successStory?.map((success) => (
          <div key={success?.id}>
            <div>
              <iframe
                width="560"
                height="315"
                src={success?.story}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className=" shadow-xl shadow-blue-300"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* text review section */}

      <div className="mb-14 mt-14">
        <Marquee>
          {textReviews?.map((reviews) => (
            <div key={reviews?.id}>
              <div
                style={{ backgroundColor: reviews?.back }}
                className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
              >
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {reviews?.review}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                  <img
                    src={reviews?.image}
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold leadi">{reviews?.name}</p>
                  <p className="text-sm uppercase">{reviews?.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Success;
