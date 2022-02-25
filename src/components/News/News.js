import { useEffect, useState } from "react";
import newService from "../../services/newService";
import Card from "../Card/Card";
import Select from "../Select/Select";
import { newsOptions } from "../../data";

const News = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("latest");

  useEffect(() => {
    newService.getNews(filter)
      .then((data) => setNews(data.news))
  }, [filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-4">Latest News</h2>
      <Select
        data={newsOptions}
        handleChange={handleFilter}
        name="sort"
        title="Sort news by:"
      />
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
