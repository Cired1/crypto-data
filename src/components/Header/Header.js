
const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-dark container">
        <div className="navbar-brand d-flex align-items-center gap-3">
          <img
            src="assets/icon.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="icon"
          />
          Crypto Data
        </div>
      </nav>
    </header>
  );
};

export default Header;
