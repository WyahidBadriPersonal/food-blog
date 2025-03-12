import React from "react";
import { Link } from "react-router";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links  */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-purple-400 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=breakfast"
          className="hover:bg-purple-100 rounded-full px-4 py-2"
        >
          Breakfast
        </Link>
        <Link
          to="/posts?cat=brunch"
          className="hover:bg-purple-100 rounded-full px-4 py-2"
        >
          Brunch
        </Link>
        <Link
          to="/posts?cat=lunch"
          className="hover:bg-purple-100 rounded-full px-4 py-2"
        >
          Lunch
        </Link>
        <Link
          to="/posts?cat=dinner"
          className="hover:bg-purple-100 rounded-full px-4 py-2"
        >
          Dinner
        </Link>
      </div>
      <span className="text-xl font-medium">·</span>
      {/* search  */}
      <Search/>
    </div>
  );
};

export default MainCategories;
