import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Sidebar, Videos } from "./";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=50`
    ).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="sm:h-auto md:h-[92vh] border-r border-solid border-[#3d3d3d] sm:px-0 md:px-4">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="md:flex-grow-[2] h-[90vh] overflow-y-auto p-4">
        <h4 className="font-bold mb-4 text-white text-3xl">
          {selectedCategory} <span className="text-[#F31503]">videos</span>
        </h4>

        <Videos videos={videos} />
      </div>
    </div>
  );
}
