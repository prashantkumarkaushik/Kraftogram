import Navbar from "./Navbar";
import PostSection from "./Posts.section";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <PostSection />
      </div>
    </div>
  );
};

export default Home;
