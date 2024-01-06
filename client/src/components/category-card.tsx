import { ChevronRight, Paintbrush2 } from 'lucide-react';

type CategoryCardProps = {
  name: string;
  courseCount: number;
};

const CategoryCard = ({ name, courseCount }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-50/50 p-2 shadow-sm flex items-center gap-x-4">
      <div className="h-full aspect-square bg-primary-100 rounded-xl flex items-center justify-center">
        <Paintbrush2 className="h-8 w-8" />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <span className="text-neutral-600">{courseCount} courses</span>
      </div>
    </div>
  );
};

export default CategoryCard;
