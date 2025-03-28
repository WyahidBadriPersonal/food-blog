import React from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router";

const fetchPost = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 10, ...searchParamsObj },
  });
  return response.data;
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more reviews...</h4>}
      endMessage={
        <p>
          <b>End</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
