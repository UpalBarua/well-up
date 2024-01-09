import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDownRightFromCircle, CalendarClock, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
  id: number;
  duration: string;
  batch: string;
  course_name: string;
  details: string;
  instructor: string;
  amount: string;
  course_banner: string;
  instructor_pic: string;
};

function CourseCard({
  amount,
  batch,
  course_banner,
  course_name,
  details,
  duration,
  id,
  instructor,
  instructor_pic,
}: CourseCardProps) {
  return (
    <Link
      className="p-2 bg-white rounded-xl border shadow-sm"
      href={`/courses/${id}`}>
      <div className="relative w-full h-56">
        <Image
          src={course_banner}
          alt={course_name}
          className="object-cover object-center rounded-xl"
          fill
        />
      </div>
      <div className="p-2.5 pt-1 space-y-1">
        <div className="flex items-center gap-x-2.5 pt-2 text-sm">
          <div className="flex gap-x-2 items-center px-3 py-1 rounded-xl border">
            <CalendarClock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex gap-x-2 items-center px-3 py-1 rounded-xl border">
            <Wifi className="w-4 h-4" />
            <span>{batch}</span>
          </div>
          <div className="flex gap-x-2 items-center px-3 py-1 rounded-xl border">
            <ArrowDownRightFromCircle className="w-4 h-4" />
            <span>Enrolling</span>
          </div>
        </div>
        <h3 className="pt-2.5 text-lg font-medium">
          {course_name} Lorem ipsum dolor sit amet Lorem, ipsum
        </h3>
        <p className="leading-relaxed text-foreground/75">
          {details.length > 120 ? details.slice(0, 120) + '...' : details}
        </p>
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-x-2.5">
            <Avatar className="w-10 h-10">
              <AvatarImage src={instructor_pic} alt={instructor} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-medium">{instructor}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="line-through">৳{amount}</p>
            <p className="text-2xl font-medium">৳{amount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
