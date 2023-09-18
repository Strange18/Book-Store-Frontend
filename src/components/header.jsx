import "./header_style.css";

function HeaderComponent() {
  return (
    <>
      <header>
        <div className="header__logo">Bookey</div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="searchbar">
          <form action="/" method="post">
            <input type="text" placeholder="search for books" />
          </form>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
