import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bb5a95ae0ede426099e77a005c5cda83`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
      });
  }, [category]);

  return (
    <div className="news-section">
      <h2 className="category-title">{category.toUpperCase()} NEWS</h2>

      <div className="news-grid">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
