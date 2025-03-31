import React from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useSearchParams } from "react-router";
import { useAuth, useUser } from "@clerk/clerk-react";


const SavedPostsList = () => {
    const { isLoaded, user } = useUser();

    const { getToken } = useAuth();
    const navigate = useNavigate();
  
    const queryClient = useQueryClient();
  
    const {
      isPending,
      error,
      data: savedPosts,
    } = useQuery({
      queryKey: ["savedPost"],
      queryFn: async () => {
        const token = await getToken();
        return axios.get(`${import.meta.env.VITE_API_URL}/users/my-posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      },
    });

    if(!isLoaded) {
        return <div>Loading...</div>
    }


    console.log(savedPosts)
    if(!savedPosts?.data) {
        return navigate("/")
    }
  return (

      <div>
        {savedPosts?.data?.map((post) => (
          <PostListItem key={post._id} post={post} />
        ))}
      </div>

  );
};

export default SavedPostsList;
