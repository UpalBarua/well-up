import CountingMembers from '@/components/CountingMembrs/CountingMembers';
import FeaturedCourses from '@/components/FeaturedCourses/FeaturedCourses';
import Members from '@/components/Members/Members';
import CategoryCard from '@/components/category-card';
import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';
import { VscSymbolClass } from 'react-icons/vsc';

const categories = [
  {
    name: 'Web Development and Design',
    courseCount: 9,
  },
  {
    name: 'Data Science and Machine Learning',
    courseCount: 5,
  },
  {
    name: 'Web Development and Design',
    courseCount: 9,
  },
  {
    name: 'Data Science and Machine Learning',
    courseCount: 5,
  },
  {
    name: 'Mobile App Development',
    courseCount: 3,
  },
  {
    name: 'Mobile App Development',
    courseCount: 3,
  },
  {
    name: 'Business and Entrepreneurship',
    courseCount: 4,
  },
  {
    name: 'Engineering (Civil and Electrical)',
    courseCount: 6,
  },
];

const HomePage = () => {
  return (
    <main className="container">
      <Hero />
      <section>
        <h2 className="text-center dark:text-white text-2xl font-medium pb-10">
          Course Catagories
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center dark:text-white text-2xl font-medium pb-10">
          Featured Courses
        </h2>
      </section>
      <CountingMembers></CountingMembers>
      {/* <Members></Members> */}
      {/* <FeaturedCourses></FeaturedCourses> */}
    </main>
  );
};

export default HomePage;
