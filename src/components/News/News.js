import { useEffect, useState } from "react";
import { getNews } from "../../services/getNews";
import Card from "../Card/Card";

const News = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("latest");

  useEffect(() => {
    getNews(filter).then((data) => setNews(data.news));
  }, [filter]);

  return (
    <>
      <h2 className="text-center mb-4 mt-4">Latest News</h2>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 mb-4">
      <label htmlFor="sort">Sort news by: </label>
        <select
          name="sort"
          className="form-select w-25"
          style={{minWidth: "250px"}}
          aria-label="Sort News"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="handpicked">Handpicked</option>
          <option value="trending">Trending</option>
          <option value="bullish">Bullish</option>
          <option value="bearish">Bearish</option>
        </select>
      </div>

      <section className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {news.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            img={note.imgURL}
            link={note.link}
            source={note.source}
          />
        ))}
      </section>
    </>
  );
};

export default News;
