import CourseCard from "@/components/CourseCard/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Code, Search } from "lucide-react";
import React from "react";

const Course = () => {
  const allCourse = [
    {
      id: 1,
      course_name: "Depth of marketing",
      course_banner:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
      course_instructor: "Ali Abdullah",
      seat: "150",
      duration: "7hr 30m",
      start: "21 january",
      batch: 13,
    },
    {
      id: 2,
      course_name: "Graphics Design",
      course_banner:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      course_instructor: "Samim Hossain",
      seat: "140",
      duration: "5hr 20m",
      start: "10 january",
      batch: 14,
    },
    {
      id: 3,
      course_name: "Ccna Networking",
      course_banner:
        "https://images.unsplash.com/photo-1528845922818-cc5462be9a63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
      course_instructor: "Akash Mohit",
      seat: "110",
      duration: "5hr 10m",
      start: "11 january",
      batch: 8,
    },
    {
      id: 4,
      course_name: "competitive programming",
      course_banner:
        "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwcm9ncmFtaW5nfGVufDB8fDB8fHww",
      course_instructor: "Niaz Morshed",
      seat: "130",
      duration: "8hr",
      start: "1 March",
      batch: 11,
    },
    {
      id: 5,
      course_name: "Video Editing",
      course_banner:
        "https://plus.unsplash.com/premium_photo-1663127040044-c30761143199?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2dyYW1pbmd8ZW58MHx8MHx8fDA%3D",
      course_instructor: "Jisan Mahmud",
      seat: "140",
      duration: "7hr 10m",
      start: "1 February",
      batch: 7,
    },
    {
      id: 6,
      course_name: "product-management",
      course_banner:
        "https://images.unsplash.com/photo-1617469955236-7f13d137a4f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      course_instructor: "Nihal Kumar",
      seat: "100",
      duration: "5hr 30m",
      start: "1 February",
      batch: 6,
    },
  ];
  return (
    <section className="mt-14">
      <div className="text-center font-bold">
        <h1 className="text-4xl">UPCOMING OUR COURSE</h1>
      </div>
      <div className="w-[300px] lg:w-[560px] mx-auto pt-4 pb-8">
        <div className="bg-sky-50 rounded-xl p-3 border border-neutral-50/50 shadow-sm space-y-2.5 dark:bg-neutral-950 dark:border-neutral-800/50">
          <form className="flex items-center gap-x-2">
            <Input type="text" className="" placeholder="Search Courses" />
            <Button size="icon" className="h-12 w-14">
              <Search />
            </Button>
          </form>
          <div className=" items-center gap-x-2.5 hidden lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-x-3 h-auto py-3 w-full"
                >
                  <Code className="h-5 w-5" />
                  <span className="capitalize font-semibold">Batch</span>
                  <ChevronDown className="ms-2.5 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[16.25rem]" side="bottom">
                <DropdownMenuItem className="font-semibold">
                  Online
                </DropdownMenuItem>
                <DropdownMenuItem className="font-semibold">
                  Offline
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-x-3 h-auto py-3 w-full"
                >
                  <Code className="h-5 w-5" />
                  <span className="capitalize font-semibold">Category</span>
                  <ChevronDown className="ms-2.5 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[16.25rem]" side="bottom">
                <DropdownMenuItem className="font-semibold">
                  Design
                </DropdownMenuItem>
                <DropdownMenuItem className="font-semibold">
                  Development
                </DropdownMenuItem>
                <DropdownMenuItem className="font-semibold">
                  networking
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-x-3 h-auto py-3 w-full"
                >
                  <Code className="h-5 w-5" />
                  <span className="capitalize font-semibold">Status</span>
                  <ChevronDown className="ms-2.5 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[16.25rem]" side="bottom">
                <DropdownMenuItem className="font-semibold">
                  Upcoming
                </DropdownMenuItem>
                <DropdownMenuItem className="font-semibold">
                  Running
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* here is course card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6 ml-4 lg:ml-10 ">
        {allCourse?.map((course) => (
          <CourseCard key={course?.id} course={course}></CourseCard>
        ))}
      </div>
    </section>
  );
};

export default Course;
