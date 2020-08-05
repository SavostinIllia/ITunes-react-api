import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/ITunes-logo.png";
import axios from "axios";

import ArtistErrorText from "../components/ArtistErrorText";
import SearchInput from "../components/SearchInput";
import Loader from "../components/Loader";
import ArtistsList from "../containers/ArtistsList";

interface ArtistSearchPageProps {}

const HeaderSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
const HeaderLogoWrapper = styled.a``;
const HeaderLogo = styled.img`
  width: 100px;
`;
const LogoTitle = styled.h1`
  text-align: unset;
  font-size: 35px;
  margin-left: 20px;
  color: #fff;
  @media (max-width: 540px) {
    text-align: center;
    margin-left: 0px;
  }
`;
const ArtistWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1340px;
  margin-left: 40px;
  margin: 0 auto;
  justify-content: center;
  font-family: "Montserrat";
`;

const ArtistSearchPage: React.FC<ArtistSearchPageProps> = () => {
  const [artist, setArtist] = useState<IArtist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [songsPerPage] = useState<number>(6);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      const iTunesUrl: string = "https://itunes.apple.com/search?term=";
      if (!query) {
        return;
      }
      setIsLoading(true);
      const result = await axios(`${iTunesUrl}${query}&limit=86&media=music`);
      const fetchedItems: IArtist[] = result.data.results;

      if (fetchedItems.length === 0) {
        setShowError(true);
        setIsLoading(false);
        setArtist([]);
        return;
      }
      setArtist(fetchedItems);
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
    <>
      <HeaderSection>
        <HeaderLogoWrapper href="/">
          <HeaderLogo src={logo}></HeaderLogo>
        </HeaderLogoWrapper>
        <LogoTitle> ITunes Search API</LogoTitle>
      </HeaderSection>
      <SearchInput
        getQuery={(query: React.SetStateAction<string>) => setQuery(query)}
      />
      {showError ? <ArtistErrorText errorText="No Artist Found !" /> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <ArtistWrapper>
          <ArtistsList
            songsPerPage={songsPerPage}
            totalSongs={artist.length}
            paginate={paginate}
            currentPage={currentPage}
            items={currentSongs}
          />
        </ArtistWrapper>
      )}
    </>
  );
};
export default ArtistSearchPage;
