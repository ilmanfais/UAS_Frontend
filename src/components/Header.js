import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to="/" className="text-white font-bold text-2xl">
      Quran Web
    </Link>
  );
};

const Header = () => {

  return (
    <header className={`border-b border-slate-200 z-10 bg-gray-800 w-full`}>
      <nav className="w-full max-w-7xl mx-auto py-4 flex items-center flex-wrap gap-4 rounded-md justify-between h-full px-4 font-medium">
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
