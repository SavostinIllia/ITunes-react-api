import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import Items from "./components/Items";
import Pagination from "./components/Pagination";
import styled from "styled-components";
import Header from "./components/Header";

const App: React.FC = () => {
  const [items, setItems] = useState(() => {
    return [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [songsPerPage] = useState<number>(10);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) {
        return;
      }
      setIsLoading(true);
      const result = await axios(
        `https://itunes.apple.com/search?term=${query}&limit=200`
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
  const currentSongs = items.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const AppWrapper = styled.section`
    background: linear-gradient(135deg, #ff6932 20%, #d600fc 50%, #3cf2fc 80%);
    min-height: 100vh;
    height: 100%;
  `;

  return (
    <AppWrapper>
      <Header />
      <SearchInput getQuery={(query: string) => setQuery(query)} />
      {showError ? <p>No Artsists here</p> : null}
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Items items={currentSongs} isLoading={isLoading} />
          <Pagination
            songsPerPage={songsPerPage}
            totalSongs={items.length}
            paginate={paginate}
          />
        </>
      )}
    </AppWrapper>
  );
};

export default App;
