import { CiBookmark } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const PostMenuActions = () => {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-small font-medium">Actions</h1>

      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer hover:text-blue-500">
        <CiBookmark size={30}/>
        <span>Save Post</span>
      </div>

      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer text-red-400 hover:text-red-700">
        <MdDelete size={30} className=""/>
        <span>Delete Post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
