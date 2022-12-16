import "./news-post.styles.scss";

const NewsPost = ({ newsData }) => {
  const { title, description, image, source, details } = newsData;

  // console.log("source", source);
  // console.log("details", details);

  return (
    <div className="news-posts">
      <div className="post-info-text">
        <h3 className="post-title">{title}</h3>
        <p className="post-p">{description}</p>
        <span className="details">
          Source: {source}
          <a href={details} className="details-btn">
            See More
          </a>
        </span>
      </div>
      <div className="post-image-container">
        <img className="post-image" src={image} alt="post" />
      </div>
    </div>
  );
};

export default NewsPost;
