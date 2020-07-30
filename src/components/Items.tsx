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
  min-height: 500px;
  position: relative;
`;

const ArtsitImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
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
  const noRenderFullName = (title: string, type: string): JSX.Element => {
    if (!title) {
      return <ArtistDescription>{type}No Album Name</ArtistDescription>;
    }
    if (title.length >= 49) {
      let slicedTitle: string = title.slice(0, 51);
      let newsliced: Array<string> = new Array(slicedTitle);
      newsliced.push("...");
      slicedTitle = newsliced.join(" ");
      return (
        <ArtistDescription title={title}>
          <strong>{type}</strong>
          {slicedTitle}
        </ArtistDescription>
      );
    } else {
      return (
        <ArtistDescription>
          <strong> {type}</strong>
          {title}
        </ArtistDescription>
      );
    }
  };

  const thumbUrl = (url: string): JSX.Element => {
    let slicedUrl: string = url.slice(0, -13);
    let newUrl: Array<string> = new Array(slicedUrl);
    newUrl.push("600x600bb.jpg");
    slicedUrl = newUrl.join("");
    return <ArtsitImg src={slicedUrl} />;
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <ArtistCard key={index}>
            {thumbUrl(item.artworkUrl100)}
            <ArtistDescription>
              <strong>Artist Name :</strong> {item.artistName}
            </ArtistDescription>
            {noRenderFullName(item.trackName, "Track Name : ")}
            {noRenderFullName(item.collectionName, "Album Name : ")}
            <ArtistPreviewDemo
              controls
              src={item.previewUrl}
            ></ArtistPreviewDemo>
            <ArtistDescription>
              <strong>Music type : </strong>
              {item.primaryGenreName}
            </ArtistDescription>
          </ArtistCard>
        );
      })}
    </>
  );
};

export default Items;
