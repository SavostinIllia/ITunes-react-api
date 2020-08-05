import React from "react";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";

interface IArtistItemProps {
  items: IArtist[];
}

const ArtistCard = styled.div`
  flex: 0 0 45%;
  max-width: 350px;
  background: transparent;
  border: 1.6px solid #fff;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  min-height: 560px;
  position: relative;
  @media (max-width: 1224px) {
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    flex: 0 0 40%;
    max-width: unset;
    min-height: 640px;
  }
  @media (max-width: 700px) {
    min-height: 640px;
    flex: 0 0 80%;
    max-width: 400px;
  }
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
      transform: scale(0.95);
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

const ArtistTitleBold = styled.strong`
  font-weight: bold;
  margin-right: 7px;
`;

const ArtistItem: React.FC<IArtistItemProps> = ({ items }) => {
  const noRenderFullName = (title: string, type: string): JSX.Element => {
    if (!title) {
      return <ArtistDescription>{type}No Album Name</ArtistDescription>;
    }
    if (title.length >= 49) {
      let slicedTitle: string = title.slice(0, 51);
      const newsliced: Array<string> = new Array(slicedTitle);
      newsliced.push("...");
      slicedTitle = newsliced.join(" ");
      return (
        <ArtistDescription title={title}>
          <ArtistTitleBold>{type}</ArtistTitleBold>
          {slicedTitle}
        </ArtistDescription>
      );
    } else {
      return (
        <ArtistDescription>
          <ArtistTitleBold> {type}</ArtistTitleBold>
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
              <ArtistTitleBold>Artist Name :</ArtistTitleBold> {item.artistName}
            </ArtistDescription>
            {noRenderFullName(item.trackName, "Track Name : ")}
            {noRenderFullName(item.collectionName, "Album Name : ")}
            <ArtistPreviewDemo
              controls
              src={item.previewUrl}
            ></ArtistPreviewDemo>
            <ArtistDescription>
              <ArtistTitleBold>Music type : </ArtistTitleBold>
              {item.primaryGenreName}
            </ArtistDescription>
            <ButtonComponent
              type="text"
              href={item.collectionViewUrl}
              target="_blank"
              text="More about Album"
            />
          </ArtistCard>
        );
      })}
    </>
  );
};

export default ArtistItem;
