import React, { useState, useEffect } from "react";
import axios from "axios"; // install and import axios
import moment from "moment"; // install and import moment for date formatting
import SmallArticle from "./SmallArticle";

function IndexLandingPage({props}) {
  const [news, setNews] = useState([]); // state for news data
  const [loading, setLoading] = useState(false); // state for loading indicator
  const [error, setError] = useState(null); // state for error message
  const [query, setQuery] = useState(""); // state for search query
  const [category, setCategory] = useState("general"); // state for category
  useEffect(() => {
    // function to fetch news data
    async function fetchNews() {
      try {
        setLoading(true); // show loading indicator
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${query}&apiKey=f736862a0e634754ad2df9eaf663eb6c`
        ); // replace with your API endpoint and key
        setNews(response.data.articles); // update news state with data
      } catch (err) {
        setError(err.message); // update error state with message
      } finally {
        setLoading(false); // hide loading indicator
      }
    }

    fetchNews(); // call the function
  }, [query, category]); // run when query or category changes

  if (loading) return <p>Loading...</p>; // render loading indicator
  if (error) return <p>Error: {error}</p>; // render error message
  function searchHandler() {
    setQuery(query);
  }
  return (
    <div className="news-app mt-10">
      <h1>News App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          placeholder="Search news..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchHandler}>Search</button>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div>
        <div className="  text-4xl font-semibold font-serif mt-5 px-5">
          Featured Article
        </div>
        {news.map((article) => (
          <>
            <div className="  h-full mx-5  flex  flex-wrap ">
              <div className="half w-1/2 h-full ">
                <div className="img h-2/3  mx-20 ">
                  <img src={article.urlToImage} alt="" />
                </div>
                <div className="date text-sm mt-2 font-thin">
                  {moment(article.publishedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </div>
                <div className="Text-sans  font-semibold text-2xl">
                  <h2>{article.title}</h2>
                </div>
                <div className="description">
                  <p>{article.description}</p>
                </div>
              </div>

              <div className="other-half w-1/2 h-full  ">
                <SmallArticle />
                <SmallArticle />
                <SmallArticle />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default IndexLandingPage;
