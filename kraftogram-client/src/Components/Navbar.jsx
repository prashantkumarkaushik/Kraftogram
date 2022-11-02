import { useContext } from "react";
import { BurgerContext } from "../contexts/Hamburger.context";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const { isActive, setIsActive } = useContext(BurgerContext);

  const handleClick = () => {
    // console.log(isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="sticky top-0 z-40">
      <div className="py-4 bg-background ">
        <div className="flex justify-between w-[95vw] mx-auto items-center ">
          <div className="flex items-center">
            <GiHamburgerMenu
              onClick={handleClick}
              className={`text-gray-100 text-3xl cursor-pointer`}
            />
            <span className=" text-2xl font-poppins font-bold px-4 text-gray-100">
              <span className="text-text-2 cursor-pointer">Krafto</span>
              <span className="">Gram</span>{" "}
            </span>
          </div>
          <div className=" hidden md:flex">
            <input
              type="text"
              className="border-solid border-2 border-gray-300 w-[43vw] rounded-lg"
            />
            <button className="text-3xl pl-2 text-gray-100">
              <AiOutlineSearch />
            </button>
          </div>
          <div>
            <CgProfile className="text-3xl text-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
