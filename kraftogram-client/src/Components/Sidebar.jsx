import { useContext } from "react";
import { BurgerContext } from "../../src/contexts/Hamburger.context.jsx";
import { FaHome, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";

const Sidebar = () => {
  const { isActive } = useContext(BurgerContext);

  return (
    <div className="">
      <div
        className={`text-gray-100 w-[15vw] h-[100vh] bg-background pt-4 border-t-[1.5px] border-solid border-gray-400 ${
          isActive ? "w-[75px]" : ""
        } `}
      >
        <div
          className={`flex items-center text-xl ${
            isActive ? "justify-center" : "ml-7"
          }`}
        >
          <FaHome className={`${isActive ? "text-3xl my-3" : "text-2xl"} `} />
          <span className={` ${isActive ? "hidden" : "ml-2 py-3"}`}>Home</span>
        </div>
        <div
          className={`flex items-center text-xl ${
            isActive ? "justify-center" : "ml-7"
          }`}
        >
          <FaFire className={`${isActive ? "text-3xl my-3" : "text-2xl"} `} />
          <span className={` ${isActive ? "hidden" : "ml-2 py-3"}`}>
            Trending
          </span>
        </div>
        <div
          className={`flex items-center text-xl ${
            isActive ? "justify-center" : "ml-7"
          }`}
        >
          <MdVideoLibrary
            className={`${isActive ? "text-3xl my-3" : "text-2xl"} `}
          />
          <span className={` ${isActive ? "hidden" : "ml-2 py-3"}`}>DIY</span>
        </div>
        <div
          className={`flex items-center text-xl ${
            isActive ? "justify-center" : "ml-7"
          }`}
        >
          <IoTimerSharp
            className={`${isActive ? "text-3xl my-3" : "text-2xl"} `}
          />
          <span className={` ${isActive ? "hidden" : "ml-2 py-3"}`}>
            Challenges
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
