import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, description, image, url }) => {
  return (
    <div className="news-card" onClick={() => window.open(url, "_blank")}>
      <img
        src={image || "https://dummyimage.com/300x180/000/fff"}
        alt="News"
      />

      <div className="news-content">
        <h4>{title}</h4>
        <p>{description || "No description for this news"}</p>
        <span className="read-more">Read More →</span>
      </div>
    </div>
  );
};

export default NewsItem;
