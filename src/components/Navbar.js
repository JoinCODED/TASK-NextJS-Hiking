import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav
      className="bg-secondary py-10 font-sans font-bold uppercase"
      id="mainNav"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-xl">
            Hike
          </a>

          <div className="hidden md:block" id="navbarResponsive">
            <ul className="flex space-x-4">
              <li>
                <NavLink href="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/trips">
                  Trips
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
