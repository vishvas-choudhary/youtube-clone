import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

import { logo } from "../utils/constants";

export default function Navbar() {
  return (
    <div className="flex items-center p-4 sticky bg-black top-0 justify-between w-full">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-11" />
      </Link>
      <SearchBar />
    </div>
  );
}
