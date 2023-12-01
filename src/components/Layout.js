import BottomNavigation from "./BottomNavigation";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 py-6 w-full max-w-7xl mx-auto">{children}</main>
      <BottomNavigation />
    </>
  );
};

export default Layout;
