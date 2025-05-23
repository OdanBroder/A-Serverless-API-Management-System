// components/NovelGrid.tsx
import { Manga } from "../types/manga/mangaDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MEDIA_URl } from "./config";
const MangaGrid = ({ mangas }: { mangas: Manga[] }) => {
  if (!mangas.length)
    return <p className="text-gray-500">Không có truyện nào để hiển thị.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {mangas.map((manga) => (
        <div
          key={manga._id}
          className="bg-white shadow-md p-3 rounded-lg flex flex-col justify-between min-h-[360px]"
        >
          <Link to={`/manga/${manga._id}`} className="flex flex-col h-full">
            <div className="w-full aspect-[5/7] overflow-hidden rounded">
              <img
                src={MEDIA_URl+manga.cover_image}
                alt={manga.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between mt-2">
              <div>
                <h3
                  className="font-bold text-base text-gray-900 line-clamp-2 text-center"
                  title={manga.title}
                >
                  {manga.title}
                </h3>
                <p className="text-sm text-gray-700 text-center font-semibold">
                  {manga.author}
                </p>
                <p className="text-sm text-gray-600 italic text-center">
                  {manga.genres[0]?.name || "Đang cập nhật"}
                </p>
                <p className="text-sm text-gray-600 text-center">{manga.status}</p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3">
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" />
                  {manga.numViews || 0}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCommentDots} className="w-3.5 h-3.5" />
                  {manga.numComments || 0}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} className="w-3.5 h-3.5 text-red-400" />
                  {manga.numFavorites || 0}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MangaGrid;
