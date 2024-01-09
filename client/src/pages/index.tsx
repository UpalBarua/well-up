import CategoryCard from '@/components/category-card';
import CourseCard from '@/components/course-card';
import Hero from '@/components/hero';
import MilestoneCard from '@/components/milestone-card';
import TestimonialCard from '@/components/testimonial-card';
import { FileBox, Trophy, UserRound, UsersRound } from 'lucide-react';
import Image from 'next/image';

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
    Icon: <UsersRound className="w-10 h-10 text-primary" />,
    number: 600,
    text: 'Enrolled Students',
  },
  {
    Icon: <Trophy className="w-10 h-10 text-primary" />,
    number: 450,
    text: 'Graduated Students',
  },
  {
    Icon: <FileBox className="w-10 h-10 text-primary" />,
    number: 20,
    text: 'Professional Courses',
  },
  {
    Icon: <UserRound className="w-10 h-10 text-primary" />,
    number: 50,
    text: 'Experienced Mentors',
  },
] as const;

const testimonials = [
  {
    id: 1,
    name: 'asim roy',
    batch: 'Python Developer',
    back: '#FFA9E7',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbOTGGFzdWOAb6R1S5vujgZ4zHoQs16CD4yN3vq6U5g&s',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 2,
    name: 'Jisan ahmed',
    batch: 'Graphics Designer',
    back: '#BB999C',
    image:
      'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 3,
    name: 'samir mahmud',
    batch: 'web developer',
    back: '#E88D67',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 4,
    name: 'shawon khan',
    batch: 'web developer',
    back: '#9999C3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwv3-SNd4gRD40Hcbo5gw9IPmPvMo5C6w5_BLq_zdTOdBIL25bx0cP9zYAQ&s',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 5,
    name: 'upal Barua',
    batch: 'networking',
    back: '#C6D2ED',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl6lM1ApDmjv2b17QD77iKBxZDmzVjebXEQ&usqp=CAU',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 6,
    name: 'Jisan talukder',
    batch: 'web developer',
    back: '#AFD2E9',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOXZyXR4-UPEVKjTONTA6OrZJetX-8Od-H9hPp-oSRokFtK8fCGwgn5QlSA&s',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 7,
    name: 'jesmin akter',
    batch: 'web developer',
    back: '#CFFFB0',
    image:
      'https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 8,
    name: 'mahesh kumar',
    batch: 'web developer',
    back: '#C9B1BD',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREI7PP7E1phTXhJ5aWcHJzAU8oV_aTC0B1nMgQ2jd_TrPoKgjJONFnyDTrGw&s',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 9,
    name: 'ummhe rumki ',
    batch: 'graphic Designer ',
    back: '#D5DFE5',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
  },
  {
    id: 10,
    name: 'neha Sharma',
    batch: 'web developer',
    back: '#97D2FB',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb1jQTMdIb_CwV5-nyBke4VZ3ESYjQil-Eg&usqp=CAU',
    review:
      'This is a great course for of all .Instructor is very great.His explanation is to good. ',
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
          Famous Courses
        </h2>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {allFeaturesCourses?.map((course) => (
            <CourseCard key={course.id} {...course} />
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
      <section className="pb-10 mx-auto max-w-5xl">
        <h2 className="pb-10 text-2xl font-medium text-center dark:text-white">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>
      <section className="pb-10 mx-auto max-w-5xl grid grid-cols-2 items-center gap-x-8">
        <div className="order-2">
          <h2 className="text-2xl font-medium dark:text-white pb-5">
            Services we provide, Lorem ipsum.
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="border rounded-xl bg-background shadow-sm space-y-1 leading-relaxed p-5">
              <h3 className="font-medium">Service One</h3>
              <p className="text-foreground/75">
                Lorem ipsum dolor, Accusantium officia corporis, deleniti dolor
                architecto repellat!
              </p>
            </div>
            <div className="border rounded-xl bg-background shadow-sm space-y-1 leading-relaxed p-5">
              <h3 className="font-medium">Service One</h3>
              <p className="text-foreground/75">
                Lorem ipsum dolor, Accusantium officia corporis, deleniti dolor
                architecto repellat!
              </p>
            </div>
            <div className="border rounded-xl bg-background shadow-sm space-y-1 leading-relaxed p-5">
              <h3 className="font-medium">Service One</h3>
              <p className="text-foreground/75">
                Lorem ipsum dolor, Accusantium officia corporis, deleniti dolor
                architecto repellat!
              </p>
            </div>
            <div className="border rounded-xl bg-background shadow-sm space-y-1 leading-relaxed p-5">
              <h3 className="font-medium">Service One</h3>
              <p className="text-foreground/75">
                Lorem ipsum dolor, Accusantium officia corporis, deleniti dolor
                architecto repellat!
              </p>
            </div>
            <div className="col-span-full border rounded-xl bg-background shadow-sm space-y-1 leading-relaxed p-5">
              <h3 className="font-medium">Service One</h3>
              <p className="text-foreground/75">
                Lorem ipsum dolor, sit amet consectetu corporis, deleniti dolor
                architecto repellat!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 gap-2.5 h-[30rem]">
          <div className="relative col-span-6 row-span-6 row-start-2">
            <Image
              src="https://source.unsplash.com/random/?code"
              alt="hero image"
              className="object-cover object-center rounded-xl"
              fill
            />
          </div>
          <div className="relative col-span-5 col-start-7 row-span-6">
            <Image
              src="https://source.unsplash.com/random/?construction"
              alt="hero image"
              className="object-cover object-center rounded-xl"
              fill
            />
          </div>
          <div className="relative col-span-5 col-start-2 row-span-full row-start-8">
            <Image
              src="https://source.unsplash.com/random/?blueprint"
              alt="hero image"
              className="object-cover object-center rounded-xl"
              fill
            />
          </div>
          <div className="relative col-span-full col-start-7 row-span-5">
            <Image
              src="https://source.unsplash.com/random/?electrician"
              alt="hero image"
              className="object-cover object-center rounded-xl"
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
