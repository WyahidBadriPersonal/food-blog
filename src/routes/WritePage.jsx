import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {IKContext} from "imagekitio-react"

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Sign in to write</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newPost = {
      title: formData.get("title"),
      category: formData.get("category"),
      rate: formData.get("rate"),
      content: value,
    };
    console.log(newPost);

    mutation.mutate(newPost);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create A New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* <button className="p-2 shadow-md rounded-xl text-sm text-white bg-purple-600 w-max">
          Add Cover Picture
        </button> */}
        <IKContext
          publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          authenticator={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        >
          {/* ...child components */}
        </IKContext>
        <input
          type="text"
          placeholder="Title"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose A Category
          </label>
          <select name="category" className="p-2 rounded-xl bg-white shadow-xl">
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose A Rating
          </label>
          <select name="rate" className="p-2 rounded-xl bg-white shadow-xl">
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>
        <textarea
          name="short_desc"
          placeholder="A Short Description"
          className="p-4 rounded-xl bg-white shadow-xl"
        />
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">🖼️</div>
            <div className="cursor-pointer">🎥</div>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-xl"
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          disabled={mutation.isPending}
          className="bg-purple-600 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:opacity-50"
        >
          {mutation.isPending ? "Posting..." : "Post"}
        </button>
        {mutation.isError && <div>{mutation.error.message}</div>}
      </form>
    </div>
  );
};

export default WritePage;
