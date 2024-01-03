import Navbar from '@/components/navbar/navbar';
import ThemeToggle from '@/components/theme-toggle';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
