import { useEffect, useState } from "react";

import NewsPost from "../news-post/news-post.component";

import "./news.styles.scss";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    try {
      const getNewsData = async () => {
        const response = await fetch(
          "https://soccer-news-api.onrender.com"
        ).then((data) => data.json());

        setNewsData(response);
      };
      getNewsData();
    } catch (error) {
      console.log("could not fetch news data", error);
    }
  }, []);

  return (
    <div className="news-container">
      <h2>Top Headlines</h2>
      <div className="news-wrapper">
        {newsData ? (
          newsData.map((item) => {
            return (
              <NewsPost newsData={item} className="post" key={item.title} />
            );
          })
        ) : (
          <h1>Sorry, there was a problem loading top headlines</h1>
        )}
      </div>
    </div>
  );
};

export default News;
