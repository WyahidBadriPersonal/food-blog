import React from "react";
import Image from "../components/Image";
import { Link, useParams } from "react-router";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import DOMPurify from "dompurify";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const {slug} = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "Post not found";
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-4/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Rated</span>
            <span className="text-yellow-400 flex">
             {
              Array(Math.floor(data.rate))
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
             {
              Array(Math.ceil(data.rate - Math.floor(data.rate)))
              .fill(0)
              .map((_, i) => (
                <FaStarHalf key={i} />
              ))
             }
             
            </span>
            <span>Written</span>
            <span>·</span>
            <span className="text-blue-500">{format(data.createdAt)}</span>
          </div>
          <p className="font-medium text-gray-500">
            {data.short_desc || "No description submitted!"}
          </p>
        </div>
        {data.img ? <div className="hidden lg:block w-1/5">
          <Image src={data.img} alt="stock" w="600" className="rounded-2xl" />
        </div> : "No image uploaded"}
      </div>
      {/* content */}
      <div className="flex flex-col gap-12 md:flex-row">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          {/* <p>{data.content}</p> */}
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }} />
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-small font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="arthur.png"
                alt="arthur"
                className="rounded-full w-12 h-12 object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-500">Bites Of NYC</Link>
            </div>
            <p className="text-sm text-gray-500">
              New York Based Food Blog
            </p>
            <div className="flex gap-2">
              <Link>
                <FaTiktok />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data}/>
          <h1 className="mt-8 mb-4 text-small font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className="underline hover:text-blue-500" to="/posts">
              All
            </Link>
            <Link
              className="underline hover:text-blue-500"
              to="/posts?cat=breakfast"
            >
              Breakfast
            </Link>
            <Link
              className="underline hover:text-blue-500"
              to="/posts?cat=brunch"
            >
              Brunch
            </Link>
            <Link
              className="underline hover:text-blue-500"
              to="/posts?cat=lunch"
            >
              Lunch
            </Link>
            <Link
              className="underline hover:text-blue-500"
              to="/posts?cat=dinner"
            >
              Dinner
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-small font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id}/>
    </div>
  );
};

export default SinglePostPage;
