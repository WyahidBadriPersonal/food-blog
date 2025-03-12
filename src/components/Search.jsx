import { GiKnifeFork } from "react-icons/gi";
const Search = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <GiKnifeFork />
      <input
        type="text"
        placeholder="Search Restaurants"
        className="bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
