const Post2 = ({ postUrl, userImg }) => {
  return (
    <div className="w-60 h-60 mb-4 cursor-pointer mr-3">
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-60 hover:scale-105 hover:rounded-t-lg duration-700 transition-all h-40 rounded-t-lg"
          src={`${postUrl}`}
        />
      </div>
      <div className="relative -top-8 z-10 -right-40 rounded-full w-14 bg-gray-200  border-2 border-solid border-gray-800">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={`${userImg}`}
        />
      </div>
      <div className="relative -top-16 h-24 rounded-b-lg bg-background">
        <p className="text-sm text-gray-400 pl-3 pt-2">Author Name</p>
        <p className="text-lg px-2 text-gray-200">
          Title of the Post najfnha anfhkjhak
        </p>
      </div>
    </div>
  );
};

export default Post2;
