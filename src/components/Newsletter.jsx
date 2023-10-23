import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <p className="news-info">
            Sign up for our newsletter and be the first to know about new
            products, exclusive promotions and offers.
          </p>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
