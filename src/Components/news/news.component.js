import NewsPost from "../news-post/news-post.component";

import "./news.styles.scss";

const News = () => {
  return (
    <div className="news-container">
      <h2>News</h2>
      <div className="news-wrapper">
        <NewsPost className="post" />
        <NewsPost className="post" />
      </div>
    </div>
  );
};

export default News;
