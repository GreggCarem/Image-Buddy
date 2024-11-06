import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__center">
          <img
            className="header__logo__left"
            src="/images/Logo.png"
            alt="Hello"
          />
          <h1 className="header__h1">-Image Buddy-</h1>
          <img
            className="header__logo__right"
            src="/images/Logo.png"
            alt="Hello"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
