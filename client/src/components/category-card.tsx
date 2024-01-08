import { Paintbrush2 } from 'lucide-react';
import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  courseCount: number;
};

const CategoryCard = ({ name, courseCount }: CategoryCardProps) => {
  return (
    <Link
      href="/"
      className="bg-background rounded-xl p-5 border space-y-4 shadow-sm hover:bg-primary hover:text-white group transition-colors duration-300">
      <div className="bg-primary/25 p-2.5 rounded-xl w-max group-hover:border-white transition-colors duration-300 border-2 border-transparent">
        <Paintbrush2 className="text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="font-medium pb-1">{name}</h4>
      <span>{courseCount} courses</span>
    </Link>
  );
};

export default CategoryCard;
