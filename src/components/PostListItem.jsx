import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="stock"
          className="rounded-2xl object-cover"
          alt="stock"
          w="400"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Demo post New York, NY
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-700">Nameless author</Link>
          <span>·</span>
          <Link className="text-blue-700">Dinner</Link>
          <span>3 hours ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          numquam consequuntur fugit natus harum at impedit praesentium alias
          vitae voluptate, cumque, pariatur soluta, aspernatur dolorum esse
          inventore atque quisquam porro.
        </p>
        <Link to="/test" className="underline text-blue-700">Read More</Link>
      </div>
    </div>
  );
};

export default PostListItem;
