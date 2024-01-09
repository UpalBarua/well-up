import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  batch: string;
  image: string;
  review: string;
};

function TestimonialCard({ name, image, review }: TestimonialCardProps) {
  return (
    <div className="">
      <div className="relative p-6 space-y-4 leading-relaxed rounded-xl border shadow-sm bg-background">
        <Quote className="w-8 h-8 text-primary" />
        <p>{review}</p>
      </div>
      <div className="flex items-center gap-x-2.5 py-4 px-2 text-sm">
        <Avatar className="w-9 h-9">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{name}</h4>
          <span className="text-foreground/75">MERN stack development</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
