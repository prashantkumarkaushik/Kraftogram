import { AiOutlineHeart } from "react-icons/ai";
const Post = ({ id }) => {
  return (
    <div className="w-56 ">
      <div className="w-52 h-52 rounded-2xl flex justify-center m-auto relative bg-gray-300">
        <img
          className="w-52 h-52 rounded-2xl"
          src={`https://robohash.org/${id}`}
        />
        <AiOutlineHeart className="absolute bg-gray-50 rounded-xl w-14 p-2 h-10 text-2xl bottom-4 left-3 text-red-500" />
      </div>
    </div>
  );
};

export default Post;
