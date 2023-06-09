import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function SmallArticle() {
  const [news, setNews] = useState([]); // news state
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true); // show loading indicator
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=d298a5c72d2f4075a3f8b98dd055c046`
        ); // replace with your API endpoint and key
        setNews(response.data.articles); // update news state with data
      } catch (err) {
        setError(err.message); // update error state with message
      } finally {
        setLoading(false); // hide loading indicator
      }
    }

    fetchNews(); // call the function
  }, []); // run when query or category changes
  if (loading) return <p>Loading...</p>; // render loading indicator
  if (error) return <p>Error: {error}</p>; // render error message


  return (
    <div>
      <div className="w-1/2 h-full half ">
        <div className="mx-20 img h-2/3 ">
          <img src={news.urlToImage} alt="" />
        </div>
        <div className="mt-2 text-sm font-thin date">
          {moment(news.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
        <div className="text-2xl font-semibold Text-sans">
          <h2>{news.title}</h2>
        </div>
        <div className="description">
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
}
