import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const UserProfile = () => {
  return (
    <Link href="/profile" className={buttonVariants({ variant: 'ghost' })}>
      <Avatar className="h-7 w-7">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="font-medium hidden sm:block">Niaz Abir</span>
    </Link>
  );
};

export default UserProfile;
