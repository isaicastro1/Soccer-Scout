import NewsPost from "../news-post/news-post.component";

import "./news.styles.scss";

const News = () => {
  return (
    <>
      <h2>News</h2>
      <div className="news-container">
        <NewsPost className="post" />
        <NewsPost className="post" />
        <NewsPost className="post" />
      </div>
    </>
  );
};

export default News;
