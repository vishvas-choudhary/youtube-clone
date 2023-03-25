import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="pl-4 sm:mr-10 shadow-none rounded-2xl border border-solid border-[#e3e3e3] bg-white w-[250px] md:w-[350px]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between"
      >
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit" className="p-[10px] text-red-600">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
