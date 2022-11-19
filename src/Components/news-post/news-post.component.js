import "./news-post.styles.scss";

const NewsPost = () => {
  return (
    <div className="news-posts">
      <div className="post-info">
        <img
          className="post-image"
          src="https://source.unsplash.com/featured/30x30"
          alt="profile"
        />
        <div className="post-info-text">
          <h3 className="post-title">SoccerScores</h3>
          <p className="post-p">Who do you think will win today??</p>
        </div>
      </div>
      <div className="post-image-container">
        <img
          className="post-image"
          src="https://source.unsplash.com/featured/300x189"
          alt="post"
        />
      </div>
    </div>
  );
};

export default NewsPost;
