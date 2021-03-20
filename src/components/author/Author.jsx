import React from "react";
import AuthorPic from "./pexels-andrea-piacquadio-3772623.jpg";

const Author = () => {
  return (
    <div>
      <div className="author-card">
        <div className="author-text-container">
          <h5 className="max">Maxwell Jefferson</h5>
          <h1 className="title-book">The Passion Within</h1>
          <h2 className="author"> </h2>

          <p className="description-book">
            The Passion Within, written by Maxwell Jefferson, is a master piece
            in its own right being one of the citites top selling books.
            Jefferson has written books that inspire those looking for new
            motivations for years. It is this book that opitimises all of his
            efforts over the years in this new first edition. Maxwell
            gaurantee's you'll be glad you were a part of the journey to finding
            your Passion Within.
          </p>
        </div>
        <div className="author-pic-name-container">
          <img src={AuthorPic} alt="author" className="pic-author" />
          <h4 className="name-author">Maxwell Jefferson</h4>
        </div>
      </div>
    </div>
  );
};

export default Author;
