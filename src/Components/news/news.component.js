import { useEffect, useState } from "react";

import NewsPost from "../news-post/news-post.component";
import Spinner from "../spinner/spinner.component";

import "./news.styles.scss";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getNewsData = async () => {
        const response = await fetch("https://soccer-api.herokuapp.com/news", {
          method: "get",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }).then((data) => data.json());
        setNewsData(response);
        setIsLoading(false);
      };
      getNewsData();
    } catch (error) {
      console.log("could not fetch news data", error);
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://onefootball.com/proxy-web-experience/en/matches?date=2023-02-14"
    )
      .then((data) => data.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="news-container">
          <h2>TOP HEADLINES</h2>
          <div className="news-wrapper">
            {newsData ? (
              newsData.map((item) => {
                return (
                  <NewsPost newsData={item} className="post" key={item.title} />
                );
              })
            ) : (
              <h1 style={{ width: "100vw", height: "100vh" }}>
                Sorry, there was a problem loading top headlines
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
