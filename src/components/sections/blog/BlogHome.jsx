import "../../../styles/blog/_blog-home.scss";
function BlogHome({ img, imgAlt, title, text }) {
  return (
    <>
      <div className="blog-single">
        <div className="blog-img">
          <img src={img} alt={imgAlt} />
        </div>
        <div className="blog-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
export default BlogHome;
