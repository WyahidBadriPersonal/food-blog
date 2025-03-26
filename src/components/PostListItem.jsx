import React from "react";
import Image from "./Image";
import { Link } from "react-router";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        {post.img ? (
          <Image
            src={post.img}
            className="rounded-2xl object-cover"
            alt="stock"
            w="400"
          />
        ) : (
          "No Image"
        )}
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Rated</span>
          <span className="text-yellow-400 flex">
            {Array(Math.floor(post.rate))
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            {Array(Math.ceil(post.rate - Math.floor(post.rate)))
              .fill(0)
              .map((_, i) => (
                <FaStarHalf key={i} />
              ))}
          </span>
          <span>·</span>
          <Link className="text-blue-700">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.short_desc || "No short description added!"}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-700">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
