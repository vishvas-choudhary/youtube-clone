import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <>Loading...</>;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="min-h-[95vh]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow">
          <div className="w-full sticky top-[86px]">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
            <h5 className="font-bold p-4 text-white text-2xl">{title}</h5>
            <div className="flex justify-between items-center text-white py-2 px-4">
              <Link to={`/channel/${channelId}`}>
                <h6 className="">{channelTitle}</h6>
              </Link>
              <div className="flex gap-5 items-center">
                <h1 className="opacity-80">
                  {parseInt(viewCount).toLocaleString()} views
                </h1>
                <h1 className="opacity-80">
                  {parseInt(likeCount).toLocaleString()} likes
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center px-4 py-10 md:py-2">
          <Videos videos={videos} direction={"column"} />
        </div>
      </div>
    </div>
  );
}
