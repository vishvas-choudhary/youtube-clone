import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from "./";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="md:flex-grow-[2] h-[90vh] overflow-y-auto p-4">
      <h4 className="font-bold mb-4 text-white text-3xl">
        Search Results for: <span className="text-[#F31503]">{searchTerm}</span>{" "}
        videos
      </h4>

      <Videos videos={videos} />
    </div>
  );
}
