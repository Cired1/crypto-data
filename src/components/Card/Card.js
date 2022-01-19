const Card = ({ title, img, link, source }) => {
  return (
    <div className="card" style={{ width: "200px" }}>
      <a href={link} target="_blank" rel="noreferrer" className="text-decoration-none">
        <img src={img} className="card-img-top" style={{height: "100px", objectFit: "cover"}} alt={title} />
        <div className="card-body">
          <h6 className="card-title">{title.length > 70 ? title.substring(0, 70) + "...": title}</h6>
          <p className="card-text">
            <small className="text-muted">{source}</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
