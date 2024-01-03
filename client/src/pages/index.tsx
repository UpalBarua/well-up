import Catagories from "@/components/Catagories/Catagories";
import FeaturedCourses from "@/components/FeaturedCourses/FeaturedCourses";
import Members from "@/components/Members/Members";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <main>
      <Members></Members>
      <Catagories></Catagories>
      <FeaturedCourses></FeaturedCourses>
    </main>
  );
};

export default HomePage;
