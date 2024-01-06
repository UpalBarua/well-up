import Navbar from '@/components/navbar/navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default RootLayout;
