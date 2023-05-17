import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";
import NavBar from "../../Layout/Navbar/Navbar";
function IndexLandingPage({ props }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const { categoryset } = useParams(); // Get category from the URL
  console.log('categoryset: ', categoryset);
  useEffect(() => {
    setCategory(categoryset);
    // function to fetch news data
    async function fetchNews() {
      // setCategory(categoryset);
      try {
        setLoading(true); // show loading indicator
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${query}&apiKey=3b8c7c1230404b89aa6247917a8026d0`
        ); // replace with your API endpoint and key
        setNews(response.data.articles); // update news state with data
      } catch (err) {
        setError(err.message); // update error state with message
      } finally {
        setLoading(false); // hide loading indicator
      }
    }

    fetchNews(); // call the function
  }, [query, category,categoryset]); // run when query or category changes

  if (loading) return <p>Loading...</p>; // render loading indicator
  if (error) return <p>Error: {error}</p>; // render error message
  return (
<>

      <NavBar />
    <div className="pt-12 news-app bg-[#2C3333] text-[#E7F6F2]">
      <div>
        <div className="px-5 mt-5 font-serif text-4xl font-semibold ">
          Featured Article
          category: {category}
        </div>
        <div className="flex gap-4">
          {/* Big article */}
          {news.length > 0 && (
            <div className="flex-none w-1/2">
              <div className="article-card">
                <img className="px-4 rounded-md " src={news[0].urlToImage} alt="" />
                <p className="w-full px-4 text-sm text-395B64">
                  {moment(news[0].publishedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
                <h2 className="text-2xl px-4 hover:text-red-300  text-[#48deb6]">{news[0].title}</h2>
                <p className="text-[#d5e1dd] px-4">{news[0].description}</p>
              </div>
            </div>
          )}
          {/* Next three articles */}
          {news.length > 3 && (
            <div className="flex flex-col flex-auto w-1/2 gap-4">
              {news.slice(1, 4).map((article) => (
                <div className="flex justify-between w-full h-full">
                  <div className="w-1/5 rounded-lg ">
                    <img
                      className="rounded-md "
                      src={article.urlToImage}
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <div className="w-full px-4">
                        <p className="text-sm text-[#395B64] ">
                          {moment(article.publishedAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-xl px-4  hover:text-red-300  text-[#48deb6]">
                          {article.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Six smaller articles */}
        {news.length > 6 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {news.slice(4, 10).map((article) => (
              <div className="article-card">
                <img src={article.urlToImage} alt="" />
                <p className="text-sm text-[#395B64]">
                  {moment(article.publishedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
                <h2 className="text-lg  hover:text-red-300  text-[#48deb6]" >{article.title}</h2>
                <p className="text-[#d5e1dd]" >{article.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
export default IndexLandingPage;
