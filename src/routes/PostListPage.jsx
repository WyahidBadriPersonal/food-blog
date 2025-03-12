import PostList from "../components/PostList";
import PostListSideMenu from "../components/PostListSideMenu";
import { useState } from "react";
const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-2xl mb-8">Dinner</h1>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-purple-600 text-sm text-white py-2 px-4 rounded-xl mb-4"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`md:block ${open ? "block" : "hidden"}`}>
          <PostListSideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
