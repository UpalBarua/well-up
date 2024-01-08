import {
  CalendarDays,
  CheckCircle,
  Clock,
  CreditCard,
  MessageCircleQuestion,
  ShoppingCart,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

function CourseDetails() {
  return (
    <main className="container grid grid-cols-1 sm:grid-cols-12 gap-5 relative pt-2">
      <section className="col-span-8 space-y-6">
        <div className="space-y-3">
          <h1 className="text-2xl font-medium tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reprehenderit itaque dignissimos a sint quia commodi rerum
            obcaecati, laboriosam accusamus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corrupti, iusto. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Animi voluptatibus minus quos ab
            aliquid quae fuga in vel doloremque facilis possimus et cumque,
            officia odit quod aut molestiae iure. Ipsa?
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight">
            Course Instructor
          </h3>
          <div className="border rounded-xl flex items-center gap-x-4 px-4 py-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Niaz Abir</h4>
              <p className="max-w-[16rem]">
                Senior engineer at xyz ltd // Mess Shovapoti // Famous chief
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight">
            What you'll learn
          </h3>
          <div className="border rounded-xl flex items-center gap-x-4 p-6">
            <ul className="grid grid-cols-2 gap-2.5">
              {Array(8)
                .fill(' ')
                .map((_, i) => (
                  <li className="flex items-center gap-x-3" key={i}>
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight">Study Plan</h3>
          <div className="border rounded-xl flex items-center gap-x-4 p-2.5">
            <ul className="w-full">
              {Array(10)
                .fill('')
                .map((_, i) => (
                  <li className="border-b py-3 px-2" key={i}>
                    <div className="flex items-center gap-x-3 pb-2">
                      <span className="text-sm">DAY {i + 1}</span>
                      <Badge variant="outline">class</Badge>
                    </div>
                    <span className="font-medium">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit.
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="p-2 space-y-2 max-w-sm rounded-xl border bg-background col-span-4 sticky top-0 h-max mb-10">
        <div className="relative w-full h-56">
          <Image
            className="rounded-xl object-center object-cover"
            src="https://source.unsplash.com/random?code"
            alt="course thumbnail"
            quality={95}
            fill
          />
        </div>
        <div className="p-2 space-y-5">
          <div className="space-y-2">
            <div className="flex gap-x-3 items-center">
              <span className="text-3xl font-bold">৳6,000</span>
              <span className="line-through">৳12,000</span>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="flex gap-x-2 items-center px-2.5 text-sm font-medium py-1.5 rounded-xl bg-primary/25">
                <Clock className="w-4 h-4" />
                <span>19 Days Left</span>
              </div>
              <div className="flex gap-x-2 items-center px-2.5 text-sm font-medium py-1.5 rounded-xl bg-primary/25">
                <Users className="w-4 h-4" />
                <span>64 Seats Left</span>
              </div>
            </div>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex gap-x-3 items-center">
                <Users className="w-5 h-5" />
                <span>500 People completed this course.</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <Trophy className="w-5 h-5" />
                <span>Certificate of completion.</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <CalendarDays className="w-5 h-5" />
                <span>6 months duration.</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <MessageCircleQuestion className="w-5 h-5" />
                <span>Quiz and assignments.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <Button size="lg" className="h-11">
              <CreditCard className="w-4 h-4" />
              <span>Purchase Now</span>
            </Button>
            <Button size="lg" variant="outline" className="h-11">
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CourseDetails;
