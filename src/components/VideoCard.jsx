import { Link } from "react-router-dom";

import { AiFillCheckCircle } from "react-icons/ai";

import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div className="w-full md:w-[323px] h-[286px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          className="w-[358px] h-[180px] object-cover"
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <div className="bg-[#1e1e1e] h-[106px]">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h1 className="font-bold text-white p-2 text-base">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h1>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <h1 className="font-bold text-gray-400 py-1 px-2 text-sm">
            {snippet?.channelTitle || demoChannelTitle}
          </h1>
        </Link>
      </div>
    </div>
  );
}
