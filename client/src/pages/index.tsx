import CategoryCard from '@/components/category-card';
import CourseCard from '@/components/course-card';
import Hero from '@/components/hero';
import MilestoneCard from '@/components/milestone-card';
import { FileBox, Trophy, UserRound, UsersRound } from 'lucide-react';

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
] as const;

const allFeaturesCourses = [
  {
    id: 1,
    duration: '6h 50m',
    batch: 'Offline',
    course_name: 'Expert in Graphics',
    details:
      'It is a course where you learn how you use Graphics fundamental in a project.Explore Real time project Design',
    instructor: 'Shawon Hasan',
    amount: '5,500',
    course_banner:
      'https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    duration: '8h 50m',
    batch: 'Offline',
    course_name: 'Maker of Networking',
    details:
      'It is a course where you learn how you use networking fundamental in a project.Explore router and uses. ',
    instructor: 'Kamrul hasan',
    amount: '6,0000',
    course_banner:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    duration: '7h 50m',
    batch: 'Offline',
    course_name: 'Head of Marketing',
    details:
      'It is a course where you learn how you use marketing fundamental in a project.Explore communication. ',
    instructor: 'Asif Akbar',
    amount: '6,5000',
    course_banner:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    duration: '8h 50m',
    batch: 'Offline',
    course_name: 'Maker of Networking',
    details:
      'It is a course where you learn how you use networking fundamental in a project.Explore router and uses. ',
    instructor: 'Kamrul hasan',
    amount: '6,0000',
    course_banner:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    duration: '7h 50m',
    batch: 'Offline',
    course_name: 'Head of Marketing',
    details:
      'It is a course where you learn how you use marketing fundamental in a project.Explore communication. ',
    instructor: 'Asif Akbar',
    amount: '6,5000',
    course_banner:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    duration: '5h 50m',
    batch: 'Offline',
    course_name: 'Master of javascript',
    details:
      'It is a course where you learn how you use javascript fundamental in a project.Explore es6 and dom manipulation.',
    instructor: 'Niaz abir',
    amount: '6,0000',
    course_banner:
      'https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor_pic:
      'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D',
  },
] as const;

const mileStones = [
  {
    Icon: <UsersRound className="w-12 h-12" />,
    number: 600,
    text: 'Enrolled Students',
  },
  {
    Icon: <Trophy className="w-12 h-12" />,
    number: 450,
    text: 'Graduated Students',
  },
  {
    Icon: <FileBox className="w-12 h-12" />,
    number: 20,
    text: 'Professional Courses',
  },
  {
    Icon: <UserRound className="w-12 h-12" />,
    number: 50,
    text: 'Experienced Mentors',
  },
] as const;

const HomePage = () => {
  return (
    <main className="container space-y-28">
      <Hero />
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-4 gap-x-3">
          {mileStones.map((milestone) => (
            <MilestoneCard key={milestone.text} {...milestone} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="pb-10 text-2xl font-medium text-center dark:text-white">
          Course Catagories
        </h2>
        <div className="grid grid-cols-1 gap-4 mx-auto max-w-5xl sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl">
        <h2 className="pb-10 text-2xl font-medium text-center dark:text-white">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {allFeaturesCourses?.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* <CountingMembers></CountingMembers> */}
      {/* <Members></Members> */}
      {/* <FeaturedCourses></FeaturedCourses> */}
    </main>
  );
};

export default HomePage;
