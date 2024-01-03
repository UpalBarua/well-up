import Catagories from "@/components/Catagories/Catagories";
import Members from "@/components/Members/Members";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <main>
      <Members></Members>
      <Catagories></Catagories>
    </main>
  );
};

export default HomePage;
