import { useEffect, useState } from "react";

import NewsPost from "../news-post/news-post.component";

import { hasLetters, isGerman, isGreek } from "../../utils/checkWords";

import "./news.styles.scss";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const getNewsData = async () => {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=espn&pageSize=10&apiKey=9dc3d33ecf3e4e2aa1888ed5bdc14520"
        ).then((data) => data.json());

        setNewsData(response.articles);
      };
      getNewsData();
    } catch (error) {
      console.log("could not fetch news data", error);
    }
  }, []);

  useEffect(() => {
    let allNews = [];

    if (!newsData.length) return;

    newsData.map((item, idx) => {
      return (allNews[idx] = {
        title: item.title,
        description: item.description,
        source: item.source.name,
        image: item.urlToImage,
        details: item.url,
      });
    });

    const isEnglish = allNews.filter((item) => {
      if (item.description) {
        return (
          (hasLetters(item.description) && !isGerman(item.description)) ||
          !isGreek(item.description)
        );
      }
      return null;
    });

    while (isEnglish.length > 4) {
      isEnglish.pop();
    }

    setNews(isEnglish);
  }, [newsData]);

  return (
    <div className="news-container">
      <h2>Top Headlines</h2>
      <div className="news-wrapper">
        {news ? (
          news.map((item) => {
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
