import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-end  h-[3rem] item-center text-white  shadow-[0px_-2px_10px_rgba(0,0,0,1)] text-[30px] px-[200px] bg-[#1f1f1f] font-sans ">
        <ul className="flex flex-row text-[25px] gap-5">
          
          <NavLink to="/level1">
            <li className="cursor-pointer hover:text-gray-600 ">Level1</li>
          </NavLink>
      
          <Link to="/level3">
            <li className="cursor-pointer hover:text-gray-600">Level3</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
