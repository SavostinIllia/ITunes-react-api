import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import Items from "./components/Items";
import Pagination from "./components/Pagination";
import styled from "styled-components";
import Header from "./components/Header";

export interface IArtists {
  trackName: string;
  artworkUrl100: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
}

const AppWrapper = styled.section`
  background: linear-gradient(135deg, #ff6932 20%, #d600fc 50%, #3cf2fc 80%);
  min-height: 100vh;
  height: 100%;
`;
const ArtsitsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1340px;
  margin-left: 40px;
  margin: 0 auto;
  justify-content: center;
`;

const App: React.FC = () => {
  const [artist, setItems] = useState<IArtists[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [songsPerPage] = useState<number>(9);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) {
        return;
      }
      setIsLoading(true);
      const result = await axios(
        `https://itunes.apple.com/search?term=${query}&limit=200&media=music`
      );
      const fetchedItems = result.data.results;
      if (fetchedItems.length === 0) {
        setShowError(true);
        setIsLoading(false);
        setItems([]);
        return;
      }
      setItems(fetchedItems);
      setIsLoading(false);
      setShowError(false);
    };
    fetchItems();
  }, [query]);

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = artist.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <AppWrapper>
      <Header />
      <SearchInput getQuery={(query: string) => setQuery(query)} />
      {showError ? <p>No Artsists here</p> : null}
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <ArtsitsWrapper>
          <Items items={currentSongs} />
          <Pagination
            songsPerPage={songsPerPage}
            totalSongs={artist.length}
            paginate={paginate}
          />
        </ArtsitsWrapper>
      )}
    </AppWrapper>
  );
};

export default App;
