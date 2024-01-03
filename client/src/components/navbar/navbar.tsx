import { buttonVariants } from '@/components/ui/button';
import useMediaQuery from '@/hooks/use-media-query';
import { Home, LayoutGrid, LogIn, PenSquare, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import ThemeToggle from './theme-toggle';
import UserProfile from './user-profile';

export const navLinks = [
  {
    Icon: <Home className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />,
    title: 'Home',
    href: '/',
  },
  {
    Icon: (
      <LayoutGrid className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
    ),
    title: 'Courses',
    href: '/courses',
  },
  {
    Icon: (
      <UsersRound className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
    ),
    title: 'Mentors',
    href: '/mentors',
  },
  {
    Icon: (
      <PenSquare className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
    ),
    title: 'Blog',
    href: '/blog',
  },
] as const;

const Navbar = () => {
  const isSmPlus = useMediaQuery('(min-width: 640px)');

  return (
    <header className="flex items-center justify-between container py-1 sm:py-2 max-w-6xl sticky top-0 z-10 bg-primary-50 dark:bg-neutral-900">
      <Link href="/" className="flex items-center gap-x-2">
        <Image
          src="/images/logo.png"
          alt="well-up logo"
          quality={90}
          height={24}
          width={24}
        />
        <span className="font-bold text-lg tracking-tight">Well-Up</span>
      </Link>
      <div className="flex items-center gap-x-2">
        {isSmPlus && (
          <nav className="items-center gap-x-2 flex">
            {navLinks.map(({ Icon, href, title }) => (
              <Link
                key={href}
                href={href}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}>
                <span>{Icon}</span>
                <span>{title}</span>
              </Link>
            ))}
          </nav>
        )}
        {true ? (
          <UserProfile />
        ) : (
          <Link href="/auth" className={buttonVariants({ className: 'ms-2' })}>
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Link>
        )}
        <ThemeToggle />
        {!isSmPlus && <MobileMenu />}
      </div>
    </header>
  );
};

export default Navbar;
