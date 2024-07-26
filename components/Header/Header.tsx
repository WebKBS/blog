import Navigation from "../Navigation";
import SideMenuButton from "../SideMenu/SideMenuButton";
import Sns from "../Sns";
import HeaderLogo from "./HeaderLogo";
import ThemeToggleButton from "./ThemeToggleButton";
import TranslateButton from "@/components/Buttons/TranslateButton";
import GoogleTranslate from "@/components/Google/GoogleTranslate";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-14 items-center border-b px-4 md:px-5 py-2 backdrop-blur-2xl bg-background/75">
      <div className="flex w-full items-center justify-between max-w-screen-xl mx-auto">
        <SideMenuButton className="md:hidden" />
        <HeaderLogo />
        <nav className="hidden ml-auto md:block">
          <Navigation className="mr-8 hidden font-semibold md:flex md:items-center md:gap-6" />
        </nav>
        <div className="flex items-center gap-2 relative">
          <ThemeToggleButton />
          <Sns className="hidden md:flex md:items-center md:gap-2" />
          <TranslateButton />
          <GoogleTranslate />
        </div>
      </div>
    </header>
  );
};

export default Header;
