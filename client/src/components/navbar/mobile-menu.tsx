import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { navLinks } from './navbar';

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-2 mt-2">
        {navLinks.map(({ Icon, href, title }) => (
          <DropdownMenuItem key={href}>
            <Link
              href={href}
              className="flex items-center gap-x-2.5 py-1 px-0.5 font-medium">
              <span>{Icon}</span>
              <span>{title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
