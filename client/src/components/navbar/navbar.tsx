import { buttonVariants } from '@/components/ui/button';
import useMediaQuery from '@/hooks/use-media-query';
import { Home, LayoutGrid, LogIn, PenSquare, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import ThemeToggle from './theme-toggle';
import UserProfile from './user-profile';
import { motion } from 'framer-motion';

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
    <motion.header
      className="py-1 sm:py-2 sticky top-0 z-10 bg-primary-50 dark:bg-neutral-900"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}>
      <div className="container flex items-center justify-between">
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
          {!isSmPlus ? (
            <UserProfile />
          ) : (
            <Link
              href="/auth"
              className={buttonVariants({ className: 'ms-2' })}>
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
          <ThemeToggle />
          {!isSmPlus && <MobileMenu />}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
