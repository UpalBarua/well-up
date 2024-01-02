type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <nav>navbar</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
