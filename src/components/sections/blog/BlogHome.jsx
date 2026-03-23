import "../../../styles/blog/_blog-home.scss";
function BlogHome({ blog }) {
  return (
    <>
      <div className="blog-single">
        <div className="blog-img">
          <img src={blog?.blogImg} alt={blog?.blogAlt} />
        </div>
        <div className="blog-text">
          <h3>{blog?.blogTitleBottom}</h3>
          <p>{blog?.blogText2}</p>
        </div>
      </div>
    </>
  );
}
export default BlogHome;
