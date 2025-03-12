import Search from "./Search";
import { Link } from "react-router";

const PostListSideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Newest
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Trending
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-4 text-sm">
        <Link className="underline hover:text-blue-500" to="/posts">
          All
        </Link>
        <Link
          className="underline hover:text-blue-500"
          to="/posts?cat=breakfast"
        >
          Breakfast
        </Link>
        <Link className="underline hover:text-blue-500" to="/posts?cat=brunch">
          Brunch
        </Link>
        <Link className="underline hover:text-blue-500" to="/posts?cat=lunch">
          Lunch
        </Link>
        <Link className="underline hover:text-blue-500" to="/posts?cat=dinner">
          Dinner
        </Link>
      </div>
    </div>
  );
};

export default PostListSideMenu;
