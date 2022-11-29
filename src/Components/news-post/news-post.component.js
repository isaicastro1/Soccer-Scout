import "./news-post.styles.scss";

const NewsPost = () => {
  return (
    <div className="news-posts">
      <div className="post-info">
        <img
          className="post-image"
          src="https://picsum.photos/40/40"
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
          src="https://picsum.photos/210/130"
          alt="post"
        />
      </div>
    </div>
  );
};

export default NewsPost;
