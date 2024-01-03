import ThemeToggle from '@/components/theme-toggle';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <nav>navbar</nav>
      <ThemeToggle />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
