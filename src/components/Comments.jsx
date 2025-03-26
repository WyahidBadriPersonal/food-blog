import SingleComment from "./SingleComment";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const user = useUser();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Comment has been posted");
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error("Something went wrong", error);
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);

    const data = {
      desc: formDate.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          placeholder="Share your thoughts or experience"
          className="w-full p-4 rounded-xl"
          name="desc"
        />
        <button className="bg-purple-600 px-4 py-3 text-white font-medium rounded-xl">
          Post
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "An error has occurred: " + error.message
      ) : (
        <>
          {mutation.isPending && (
            <SingleComment
              comment={{
                desc: `${mutation.variables.desc} Positng...`,
                createdAt: Date.now(),
                user: { 
                  img: user.imageUrl,
                  username: user.username
                },
              }}
            />
          )}
          {data.map((comment) => (
            <SingleComment key={comment._id} comment={comment} postId={postId}/>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
