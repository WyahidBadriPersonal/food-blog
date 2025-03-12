import React from "react";
import { Link } from "react-router";
import Image from "../components/Image";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* <Breadcrumb /> */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>·</span>
        <span className="text-blue-700">Reviews & Blogs</span>
      </div>
      {/* <Introduction /> */}
      <div className="flex items-center justify-between">
        {/* titles  */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Bites of NYC
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Explore New York City's Culinary Culture
          </p>
        </div>
        {/* animated button  */}
        <Link to="write" className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
            // className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Discover New
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Learn More
              </textPath>
            </text>
          </svg>
          <button className="rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
            <Image
              src="/swit-small.webp"
              alt="Swit Logo"
              w={125}
              h={125}
              className={"rounded-full"}
            />
          </button>
        </Link>
      </div>
      {/* <MainCategories /> */}
      <MainCategories />
      {/* <Featured /> */}
      <FeaturedPosts />
      {/* <PostList /> */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recently Posted</h1>
        <PostList/>
      </div>
    </div>
  );
};

export default Homepage;
