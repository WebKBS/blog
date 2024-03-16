import Link from 'next/link';
import Navigation from '../Navigation';
import SideMenuButton from '../SideMenu/SideMenuButton';
import Sns from '../Sns';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-10 flex h-14 items-center border-b px-5 py-2 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between">
        <SideMenuButton className="md:hidden" />
        <h1 className="text-xl font-bold uppercase">
          <Link href="/">StoryLog</Link>
        </h1>
        <nav className="hidden ml-auto md:block">
          <Navigation className="mr-8 hidden font-semibold md:flex md:items-center md:gap-6" />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <Sns className="hidden md:flex md:items-center md:gap-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
