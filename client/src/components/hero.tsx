import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Code, Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-x-12 items-center pt-5 pb-10 mx-auto max-w-6xl lg:pb-28 lg:pt-8">
      <div className="space-y-2.5 lg:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl lg:leading-[1.125] dark:text-white">
          Empowering Futures, Elevating Skills, Welcome to{' '}
          <span className="text-primary">Well-Up!</span>
        </h1>
        <p className="leading-relaxed text-neutral-500 max-w-[90%] dark:text-neutral-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam
          incidunt dolores nostrum voluptatibus eligendi velit iusto laboriosam,
          official.
        </p>
        <div className="bg-white rounded-xl p-3 border border-neutral-50/50 shadow-sm space-y-2.5 dark:bg-neutral-950 dark:border-neutral-800/50">
          <form className="flex gap-x-2 items-center">
            <Input type="text" className="" placeholder="Search Courses" />
            <Button size="icon" className="w-14 h-12">
              <Search />
            </Button>
          </form>
          <div className=" items-center gap-x-2.5 hidden lg:flex">
            <Select>
              <SelectTrigger className="h-12">
                <Code className="w-5 h-5" />
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-12">
                <Code className="w-5 h-5" />
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-12">
                <Code className="w-5 h-5" />
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
  );
};

export default Hero;
