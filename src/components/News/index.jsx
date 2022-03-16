import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./articlesList";
import swal from "sweetalert";

const HEADLINE_API =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=e3222aca48e54226acaaed39e88986b9";

function News() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles(HEADLINE_API);
  }, []);

  const getArticles = (API) => {
    setLoading(true);
    axios.get(API).then((res) => {
      const news = res.data;
      setArticles(news.articles);
      setLoading(false);
    });
  };

  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleonSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getArticles(
        `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&apiKey=e3222aca48e54226acaaed39e88986b9`
      );

      setSearchTerm("");
      setLoading(true);
    } else {
      getArticles(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=e3222aca48e54226acaaed39e88986b9`
      );
      swal("!!!", "Berita yang anda cari kosong.", "warning");
    }
  };

  return (
    <div>
      <div style={{ paddingTop: 40 }}>
      <form onSubmit={handleonSubmit} className="container">
        <input
          className="form-control mt-5 mb-2"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnchange}
        />
      </form>
      </div>
      {loading && <p style={{ textAlign: "center" }}>Loading</p>}
      <div className="container">
        <div className="row all-news">
          {articles.map((article) => (
            <ArticleList key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
