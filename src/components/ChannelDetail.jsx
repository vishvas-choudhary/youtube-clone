import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function ChannelDetail() {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date&maxResults=50`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
        }}
        className="z-10 h-[300px]"
      />
      <ChannelCard channelDetail={ChannelDetail} marginTop="-110px" />
      <div className="p-4 flex">
        <div className="md:mr-[100px]" />
        <Videos videos={videos} />
      </div>
    </div>
  );
}
