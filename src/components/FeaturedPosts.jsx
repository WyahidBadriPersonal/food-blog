import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      {/* first post  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="BARK_BBQ.jpeg"
          className="rounded-3xl object-cover"
          alt="BBQ"
          w="400"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-700 lg:text-lg">Dinner</Link>
          <span className="text-gray-500">1 week ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Bark BBQ Brooklyn, NYC
        </Link>
      </div>
      {/* other posts  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="aspect-square w-1/3">
            <Image
              src="OCEANPRIME_1.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
              alt="Steakhouse"
            />
          </div>
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-700">Dinner</Link>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </div>
            {/* title  */}
            <Link
              to="/test"
              className="text-sm sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Ocean Prime Manhattan, NYC
            </Link>
          </div>
        </div>
        {/* third  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="aspect-square w-1/3 ">
            <Image
              src="OCEANPRIME_2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              alt="Steakhouse"
              w="298"
            />
          </div>
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-700">Dinner</Link>
              <span className="text-gray-500 text-sm">5 day ago</span>
            </div>
            {/* title  */}
            <Link
              to="/test"
              className="text-sm sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Ocean Prime Manhattan, NYC
            </Link>
          </div>
        </div>
        {/* fourth  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="aspect-square w-1/3">
            <Image
              src="GRACE_STREET.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              alt="Dessert"
              w="298"
            />
          </div>
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-700">Lunch</Link>
              <span className="text-gray-500 text-sm">1 month ago</span>
            </div>
            {/* title  */}
            <Link
              to="/test"
              className="text-sm sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Grace Street Manhattan, NYC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
