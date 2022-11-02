import { AiOutlineHeart } from "react-icons/ai";
const Post = () => {
  return (
    <div className="w-56 ">
      <div className="w-52 flex justify-center m-auto relative">
        <img
          className="w-52 h-52 rounded-3xl "
          src="https://www.hercottage.com/wp-content/uploads/2018/07/40-Fun-Toilet-Paper-Roll-Crafts-Ideas-for-Kids-to-Make-2-1.jpg"
        />
        <AiOutlineHeart className="absolute bg-gray-50 rounded-xl w-14 p-2 h-10 text-2xl bottom-4 left-3 text-red-500" />
      </div>
    </div>
  );
};

export default Post;
