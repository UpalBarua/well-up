import Image from 'next/image';

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
    <div className="p-2 shadow bg-white border rounded-xl">
      <div className="relative w-full h-56">
        <Image
          src={course_banner}
          alt={course_name}
          className="object-cover object-center rounded-xl"
          fill
        />
      </div>
      <div className="p-2 pt-3 space-y-2">
        <h3 className="text-lg font-medium">
          {course_name} Lorem ipsum dolor sit amet Lorem, ipsum
        </h3>
        <p className="leading-relaxed text-foreground/75">
          {details.length > 120 ? details.slice(0, 120) + '...' : details}
        </p>

        {/* <div className="flex gap-4 mt-2 ">
          <button className="font-semibold">Duration : {duration}</button>
          <button className="font-semibold">Batch : {batch}</button>
        </div> */}

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center gap-x-2.5">
            <div className="relative h-8 w-8">
              <Image
                alt={instructor}
                src={instructor_pic}
                className="object-cover rounded-full border"
                fill
              />
            </div>
            <p className="font-medium">{instructor}</p>
          </div>
          <p className="text-2xl font-medium">৳{amount}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
