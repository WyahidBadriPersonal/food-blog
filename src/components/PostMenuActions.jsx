import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CiBookmark, CiStar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Loading from "./Loading";

const PostMenuActions = ({ post }) => {
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
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post has been deleted");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Something went wrong", error);
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        { postId: post._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Post has been saved");
      queryClient.invalidateQueries({ queryKey: ["savedPost"] });
    },
    onError: (error) => {
      toast.error("Something went wrong");
      console.log(error);
    },
  });

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/posts/feature`,
        { postId: post._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Post has been featured");
      queryClient.invalidateQueries({ queryKey: ["post", post.slug] });
    },
    onError: (error) => {
      toast.error("Something went wrong");
      console.log(error);
    },
  });

  const handleFeature = () => {
    featureMutation.mutate();
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleSave = () => {
    if (!user) {
      toast.error("You must be logged in to save a post");
      return navigate("/login");
    }
    saveMutation.mutate();
  };
  if (!isLoaded) {
    return <Loading />;
  }
  const isSaved =
    savedPosts?.data?.some((savedPost) => savedPost === post._id) || false;
  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-small font-medium">Actions</h1>

      {isPending ? (
        "Loading..."
      ) : error ? (
        "An error has occurred" + error
      ) : (
        <div
          className={`flex items-center gap-2 py-2 text-sm cursor-pointer hover:text-blue-500 ${
            isSaved ? "text-blue-500" : ""
          }`}
          onClick={handleSave}
        >
          <CiBookmark size={30} />
          <span>{isSaved ? "Saved!" : "Save Post"}</span>
        </div>
      )}
      {isAdmin && (
        <div
          className={`flex items-center gap-2 py-2 text-sm ${
            post.isFeatured && "text-orange-400"
          } cursor-pointer hover:text-orange-700`}
          onClick={handleFeature}
        >
          <CiStar size={30} />{" "}
          <span>{post.isFeatured ? "Featured" : "Feature"}</span>
          {featureMutation.isPending && (
            <span className="text-xs">Featuring...</span>
          )}
        </div>
      )}

      {isAdmin && (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer text-red-400 hover:text-red-700"
          onClick={handleDelete}
        >
          <MdDelete size={30} className="" />
          <span>Delete Post</span>
          {deleteMutation.isLoading && (
            <span className="text-xs">Deleting...</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;
