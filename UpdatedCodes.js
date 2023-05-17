
import { useState } from "react";
import NavBar from "./Layout/Navbar/Navbar";
import IndexLandingPage from "./pages/LandingPage/Index";

function App() {
  const [category, setCategory] = useState("general");  // state for category
  function onCategoryChange(newCategory) {
    const categoryLower=newCategory.toLowerCase();
    setCategory(categoryLower);
  }
  
  return (
    <>
      <div className={`flex  flex-col  bg-[#9BA4B5] h-screen  `}>
        <div className="navbar w-full h-5 ">
          <NavBar onCategoryChange={onCategoryChange}/>
        </div>  
        <div className="IndexLandingPage">
          <IndexLandingPage  category={category} />
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { SiApplenews } from "react-icons/si";
import NavButtons from "./components/NavButtons";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  const [bgColor, setbgColor] = useState("#E7F6F2");
  const [textColor, settextColor] = useState("#2C3333");
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setbgColor("#395B64");
        settextColor("#E7F6F2");
      } else {
        setbgColor("#E7F6F2");
        settextColor("#2C3333");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const classNames = `flex justify-between w-full fixed items-center p-2 text-[${textColor}] bg-[${bgColor}]`;
  const navButtons = [
    "POLITICS",
    "U.S.NEWS",
    "WORLD",
    "BUISNESS",
    "TECH",
    "HEALTH",
    "CULTURE",
  ];
  return (
    <div className={classNames}>
      <div className="logo flex items-center font-bold font-serif text-2xl hover:text-teal-100 hover:scale-110 ease-in-out p-2 shadow-md rounded-md px-4">
        <SiApplenews className="w-5 h-5" />
        <span className="pl-1">NEWS</span>
      </div>
      <div className="flex-grow pl-10 flex items-center justify-start">
        {navButtons.map((element, index) => {
          return <NavButtons onbuttonclick={props.onCategoryChange}  buttons={element} />;
        })}
      </div>
      <div className="pr-10 flex items-center justify-end">
        <NavButtons buttons="LOGIN" />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function NavButtons(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [navColor, setNavColor] = useState("#A5C9CA");
    const [navTextColor, setNavTextColor] = useState("#2C3333");
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setNavColor("#395B64");
                setNavTextColor("#E7F6F2");
            } else {
                setNavColor("#A5C9CA");
                setNavTextColor("#2C3333");
            }
        };
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const divClass = `bg-[${navColor}] text-[${navTextColor}] text-sm font-normal p-2 shadow-md rounded-md px-3 mx-2 transform transition-all ease-in-out duration-200 ${isHovered ? "scale-110" : "scale-100"}`;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={divClass}
        >
            <button onClick={props.onbuttonclick(props.button)}>{props.buttons}</button>
        </div>
    );
}

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
    setCategory(props.category)
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
    setCategory(props.category)
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