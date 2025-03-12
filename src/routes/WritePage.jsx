import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Sign in to write</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create A New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-white bg-purple-600 w-max">
          Add Cover Picture
        </button>
        <input type="text" placeholder="Title" className="text-4xl font-semibold bg-transparent outline-none"/>
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose A Category</label>
          <select name="cat" className="p-2 rounded-xl bg-white shadow-xl">
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A Short Description" className="p-4 rounded-xl bg-white shadow-xl"/>
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-xl" />
        <button className="bg-purple-600 text-white font-medium rounded-xl mt-4 p-2 w-36">Post</button>
      </form>
    </div>
  );
};

export default WritePage;
