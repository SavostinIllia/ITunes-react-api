import React from "react";
import { IArtists } from "../App";
import styled from "styled-components";

interface IArtistProps {
  items: IArtists[];
}

const ArtistCard = styled.div`
  flex-basis: calc(30% - 40px);
  background: transparent;
  border: 1.6px solid #fff;
  margin-bottom: 30px;
  text-align: center;
  margin-left: 40px;
  border-radius: 5px;
  padding: 20px;
  min-height: 390px;
  position: relative;
`;

const ArtsitImg = styled.img`
  width: 150px;
  height: 150px;
`;

const ArtistDescription = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;
const ArtistPreviewDemo = styled.video`
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const Items: React.FC<IArtistProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        console.log(item);
        return (
          <ArtistCard key={index}>
            <ArtsitImg src={item.artworkUrl100} />
            <ArtistDescription>{item.artistName}</ArtistDescription>
            <ArtistDescription>{item.trackName}</ArtistDescription>
            <ArtistDescription>{item.collectionName}</ArtistDescription>
            <ArtistPreviewDemo
              controls
              src={item.previewUrl}
            ></ArtistPreviewDemo>
          </ArtistCard>
        );
      })}
    </>
  );
};

export default Items;
