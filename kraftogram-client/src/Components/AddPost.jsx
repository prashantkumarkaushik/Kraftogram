import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import PostServices from "../Services/PostServices";

const AddPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    PostTitle: "",
    PostDate: new Date(),
    PostDesc: "",
    PostImage: null,
    PostLikes: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({ ...post, [e.target.name]: value });
  };

  const savePost = (e) => {
    console.log("clickeddd!!!!!");
    e.preventDefault();
    PostServices.savePost(post)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={savePost}>
        <div>
          <input
            type="text"
            name="PostTitle"
            placeholder="Add a post Title"
            value={post.PostTitle}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            name="PostDesc"
            placeholder="Add a post Desc"
            value={post.PostDesc}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            type="file"
            name="PostImage"
            value={post.PostImage}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            name="PostLikes"
            placeholder="likes"
            value={post.PostLikes}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="cursor-pointer bg-background w-32 text-text-2 rounded-lg h-8 text-center">
          <input type="submit" name="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
