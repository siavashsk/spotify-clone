import LikeButton from "@/components/likeButton";
import MediaItem from "@/components/mediaItem";
import { Song } from "@/types";

interface Props {
  songs: Song[];
}

const SearchContent: React.FC<Props> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} />
          </div>

          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
