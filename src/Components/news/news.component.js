import { useEffect, useState } from "react";

import NewsPost from "../news-post/news-post.component";

import "./news.styles.scss";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [news, setNews] = useState([]);

  const allNews = [];

  useEffect(() => {
    const getNewsData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?category=sports&apiKey=9dc3d33ecf3e4e2aa1888ed5bdc14520"
      );
      const data = await response.json();
      setNewsData(data.articles);
    };
    getNewsData();
  }, []);

  useEffect(() => {
    newsData &&
      newsData.map((item) => {
        return allNews.push({
          title: item.title,
          description: item.description,
          source: item.source.name,
          image: item.urlToImage,
          details: item.url,
        });
      });
    setNews(allNews);
    console.log(allNews);
  }, [newsData]);

  return (
    <div className="news-container">
      <h2>News</h2>
      <div className="news-wrapper">
        {news &&
          news.map((item) => {
            return (
              <NewsPost newsData={item} className="post" key={item.title} />
            );
          })}
      </div>
    </div>
  );
};

export default News;
