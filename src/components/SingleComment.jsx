import React from "react";
import Image from "./Image";
import { FaUserSecret } from "react-icons/fa";
import { format } from "timeago.js";
import { useUser, useAuth } from "@clerk/clerk-react";
import Loading from "./Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const SingleComment = ({ comment, postId }) => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();



  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment has been deleted");
    },
    onError: (error) => {
      toast.error("Something went wrong", error);
      console.log(error);
    },
  });

  if (!isLoaded) {
    return <Loading />;
  }

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.image ? (
          <Image
            src={comment.user.img}
            className="rounded-full w-10 h-10 object-cover"
            alt="johnny"
            w="40"
          />
        ) : (
          <FaUserSecret />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
        {user.id === comment.user.id || isAdmin && (
            <span className="text-sm text-red-500 cursor-pointer hover:underline hover:text-red-700" onClick={() => mutation.mutate()}>
              Delete
              {mutation.isPending && <span>(Deleting...)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default SingleComment;
