import NavLink from "./NavLink";

const Header = ({ className = "" }) => {
  return (
    <header className={`container mx-auto flex items-center gap-4 py-8 ${className}`}>
      <h2 className="text-white">Logo</h2>
      <nav className="text-white flex gap-4">
        <NavLink>About</NavLink>
        <NavLink>Tips & Tricks</NavLink>
        <NavLink>Search & Rescue</NavLink>
        <NavLink>FAQ</NavLink>
        <NavLink>Help</NavLink>
      </nav>
    </header>
  );
};

export default Header;
