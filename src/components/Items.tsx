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
  min-height: 560px;
  position: relative;
`;

const ArtistLinkImg = styled.a`
  display: inline-block;
  position: relative;
  min-height: 200px;
  min-width: 200px;
  overflow: hidden;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
  }
`;

const ArtsitImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  transition: 0.3s ease-in-out;
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

const ArtistMoreButton = styled.a`
  text-align: left;
  display: block;
  width: auto;
  margin-right: auto;
  font-size: 18px;
  color: #fff;
  border: 1.5px solid #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 28px;
  text-decoration: none;
  position: absolute;
  bottom: 90px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 5px 5px 5px rgba(55, 55, 55, 0.5);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
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
            <ArtistLinkImg href={item.artistViewUrl} target="_blank">
              {thumbUrl(item.artworkUrl100)}
            </ArtistLinkImg>
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
            <ArtistMoreButton href={item.collectionViewUrl} target="_blank">
              More about Album
            </ArtistMoreButton>
          </ArtistCard>
        );
      })}
    </>
  );
};

export default Items;
