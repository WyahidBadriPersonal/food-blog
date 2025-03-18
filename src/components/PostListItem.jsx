import React from "react";
import Image from "./Image";
import { Link } from "react-router";
import { FaStar, FaStarHalf } from "react-icons/fa";
import {format} from "timeago.js"

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
      {post.img ? <Image
          src={post.img}
          className="rounded-2xl object-cover"
          alt="stock"
          w="400"
        /> : "No Image"}
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Rated</span>
          <span className="text-yellow-400 flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </span>
          <span>·</span>
          <Link className="text-blue-700">Dinner</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>
          {post.short_desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae!"}
        </p>
        <Link to={`/${post.slug}`} className="underline text-blue-700">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
