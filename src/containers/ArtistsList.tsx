import React from "react";

import Pagination from "../components/Pagination";
import ArtistItem from "../components/ArtistItem";

interface ArtistsListProps {
  songsPerPage: number;
  totalSongs: number;
  paginate(pageNumber: number): void;
  currentPage: number;
  items: IArtist[];
}

const ArtistsList: React.FC<ArtistsListProps> = ({
  currentPage,
  paginate,
  songsPerPage,
  totalSongs,
  items,
}) => {
  return (
    <>
      <Pagination
        songsPerPage={songsPerPage}
        totalSongs={totalSongs}
        paginate={paginate}
        currentPage={currentPage}
      />
      <ArtistItem items={items} />
    </>
  );
};
export default ArtistsList;
