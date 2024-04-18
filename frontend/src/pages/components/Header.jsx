import NavLink from "./NavLink";
import Logo from "../../components/Logo";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`container mx-auto flex items-center justify-between gap-4 py-8 ${className}`}
    >
      <div className="text-white flex gap-4">
        <Logo />
        <NavLink>Search & Rescue</NavLink>
      </div>
      <div className="text-white flex gap-4">
        <NavLink to="#">About</NavLink>
        <NavLink to="#tips-tricks">Tips & Tricks</NavLink>
        <NavLink to="#previous-disasters">Previous Disasters</NavLink>
        <NavLink>FAQ</NavLink>
      </div>
    </header>
  );
};

export default Header;
