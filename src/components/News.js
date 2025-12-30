import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  // Runs when category changes
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bb5a95ae0ede426099e77a005c5cda83`
    )
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      });
  }, [category]);
 
  return ( 
    <div>
      <p>{category} News</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",  
          gap: "15px"
        }}
      >
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
