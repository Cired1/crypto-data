const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container pb-3 pt-3">
        <p className="text-light text-center mb-0">© Bryan Abundis</p>
        <p className="text-light text-center mb-0">
          <small>
            Information provided by{" "}
            <a
              href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3"
              target="_blank"
              rel="noreferrer"
              className="text-light fw-bold"
            >
              CoinStats API
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
