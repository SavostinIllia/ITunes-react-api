import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import Items from "./components/Items";
import Pagination from "./components/Pagination";
import styled from "styled-components";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorText from "./components/ErrorText";

export interface IArtists {
  trackName: string;
  artworkUrl100: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
  primaryGenreName: string;
  collectionViewUrl: string;
  artistViewUrl: string;
}

const AppWrapper = styled.section`
  background: linear-gradient(135deg, #ff6932 20%, #d600fc 50%, #3cf2fc 80%);
  min-height: 100vh;
  height: 100%;
  font-family: "Montserrat";
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
  const [songsPerPage] = useState<number>(6);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) {
        return;
      }
      setIsLoading(true);
      const result = await axios(
        `https://itunes.apple.com/search?term=${query}&limit=300&media=music`
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
      setCurrentPage(1);
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
      <SearchInput getQuery={(query) => setQuery(query)} />
      {showError ? <ErrorText /> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <ArtsitsWrapper>
          <Pagination
            songsPerPage={songsPerPage}
            totalSongs={artist.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <Items items={currentSongs} />
        </ArtsitsWrapper>
      )}
    </AppWrapper>
  );
};

export default App;
