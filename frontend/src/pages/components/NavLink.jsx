const NavLink = ({ to = "/", children }) => {
  return <a href={to}>{children}</a>;
};

export default NavLink;
