import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function Videos({ videos, direction }) {
  if (!videos?.length) return "Loading...";
  return (
    <div
      style={{ flexDirection: direction || "row" }}
      className="flex flex-wrap justify-start gap-4"
    >
      {videos.map((item, ind) => (
        <div key={ind}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}
