import Search from "./Search";
import { Link, useSearchParams } from "react-router";

const PostListSideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (e) => {
    if (searchParams.get("sort") === e.target.value) return;
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      sort: e.target.value,
    });
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") === category) return;
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      cat: category,
    });
  };
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
            onChange={handleFilterChange}
            value="newest"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Newest
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Trending
        </label>
        <label htmlFor="" className="flex ictems-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="cursor-pointer w-4 h-4 checked:bg-blue-500"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-4 text-sm">
        <span
          className="underline hover:text-blue-500 cursor-pointer"
          to="/posts"
          onClick={() => handleCategoryChange("all")}
        >
          All
        </span>
        <span
          className="underline hover:text-blue-500 cursor-pointer"
          to="/posts?cat=breakfast"
          onClick={() => handleCategoryChange("breakfast")}
        >
          Breakfast
        </span>
        <span
          className="underline hover:text-blue-500 cursor-pointer"
          to="/posts?cat=brunch"
          onClick={() => handleCategoryChange("brunch")}
        >
          Brunch
        </span>
        <span
          className="underline hover:text-blue-500 cursor-pointer"
          to="/posts?cat=lunch"
          onClick={() => handleCategoryChange("lunch")}
        >
          Lunch
        </span>
        <span
          className="underline hover:text-blue-500 cursor-pointer"
          to="/posts?cat=dinner"
          onClick={() => handleCategoryChange("dinner")}
        >
          Dinner
        </span>
      </div>
    </div>
  );
};

export default PostListSideMenu;
