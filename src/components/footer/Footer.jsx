import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__h1">Image Buddy</h1>

      <div className="footer__links">
        <a href="https://es.linkedin.com/in/gregoire-careme-77269a265">
          <img
            className="footer__linkedin"
            src="/images/LinkedIn.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href=" https://github.com/GreggCarem
"
        >
          <img
            className="footer__github"
            src="/images/GitHub.png"
            alt="GitHub"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
