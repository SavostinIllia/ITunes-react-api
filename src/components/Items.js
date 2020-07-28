import React from "react";

const Items = ({ items, isLoading }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div>
            <p>
              {index} : {item.trackName}
            </p>
            <img src={item.artworkUrl100} />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
