import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import ChannelDetail from "./ChannelDetail";

export default function ChannelCard({ channelDetail, marginTop }) {
  return (
    <div
      style={{ marginTop }}
      className="rounded-[20px] flex justify-center items-center w-full md:w-[323px] h-[286px] mx-auto"
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center items-center text-center text-white">
          <img
            className="rounded-full h-[180px] w-[180px] mb-4 border border-solid border-[#e3e3e3]"
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={ChannelDetail?.snippet?.title}
          />
          <h1 className="font-bold text-lg">{channelDetail?.snippet?.title}</h1>
          {channelDetail?.statistics?.subscriberCount && (
            <h1>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </h1>
          )}
        </div>
      </Link>
    </div>
  );
}
