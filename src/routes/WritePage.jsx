import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";


const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    img && setValue(prev => prev + `<p><image src="${img.url}"></p>`)
  },[img]);
  useEffect(() => {
    video && setValue(prev => prev + `<p><iframe class="ql-video" src="${video.url}"></p>`)
  },[video]);

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
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      rate: formData.get("rate"),
      short_desc: formData.get("short_desc"),
      content: value,
    };

    mutation.mutate(newPost);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create A New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="p-2 shadow-md rounded-xl text-sm text-white bg-purple-600 w-max">
            Add Cover Picture
          </button>
        </Upload>
        <img src={cover.url} alt="Cover Preview" className="w-20 h-20"/>
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
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              📸
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              🎥
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-xl"
            value={value}
            onChange={setValue}
            readOnly={(progress > 0 && progress < 100)}
          />
        </div>
        <button
          disabled={mutation.isPending || (progress > 0 && progress < 100)}
          className="bg-purple-600 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:opacity-50"
        >
          {mutation.isPending ? "Posting..." : "Post"}
        </button>
        {"Upload Progress: " + progress + "%"}
        {/* {mutation.isError && <div>{mutation.error.message}</div>} */}
      </form>
    </div>
  );
};

export default WritePage;
