// // import React from "react";
// // import BigBoxNews from "./BigBoxNews";
// // import BlackBorder from "../BlackBorder";

// // export default function FeatureArticle() {
// //   return (
// //     <>
// //       <div className="  text-4xl font-semibold font-serif mt-5 px-5">
// //         Featured Article
// //       </div>
// //       <div className=" bg-red-500 h-full mx-5  flex  flex-wrap ">
// //         <div className="half w-1/2 h-full bg-green-500">
// //           <div className="img h-2/3  mx-20 bg-red-600">Image Here</div>
// //           <div className="date text-sm mt-2 font-thin">january 11, 2023</div>
// //           <div className="Text-sans  font-semibold text-2xl">
// //             Lorem ipsum dolor sit amet consectetur adipisicing.
// //           </div>
// //           <div className="description">
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex
// //             neque molestiae consectetur laborum asperiores sint! Corporis
// //             nostrum distinctio consequuntur in vel. Quo quasi nemo magnam
// //             reprehenderit repellendus iure voluptates!
// //           </div>
// //         </div>
// //         <div className="other-half w-1/2 h-full bg-blue-600 ">
// //           <div className="article flex  h-1/3 bg-green-600">
// //             <div className="img h-full  w-full   ml-10  bg-red-500 ">
// //               Image Here
// //             </div>
// //             <div className="flex  flex-col ">
// //               <div className="date date text-sm  font-thin">
// //                 january 11, 2023
// //               </div>
// //               <div className="title  w-full Text-sans text-center font-semibold text-2xl ">
// //                 Lorem ipsum dolor sit amet consectetur adipisicing.
// //               </div>
// //             </div>
// //           </div>
// //           <BlackBorder />
// //           <div className="article flex  h-1/3 bg-green-600">
// //             <div className="img h-full  w-full   ml-10  bg-red-500 ">
// //               Image Here
// //             </div>
// //             <div className="flex  flex-col ">
// //               <div className="date date text-sm  font-thin">
// //                 january 11, 2023
// //               </div>
// //               <div className="title  w-full Text-sans text-center font-semibold text-2xl ">
// //                 Lorem ipsum dolor sit amet consectetur adipisicing.
// //               </div>
// //             </div>
// //           </div>
// //           <BlackBorder />
// //           <div className="article flex  h-1/3 bg-green-600">
// //             <div className="img h-full  w-full   ml-10  bg-red-500 ">
// //               Image Here
// //             </div>
// //             <div className="flex  flex-col ">
// //               <div className="date date text-sm  font-thin">
// //                 january 11, 2023
// //               </div>
// //               <div className="title  w-full Text-sans text-center font-semibold text-2xl ">
// //                 Lorem ipsum dolor sit amet consectetur adipisicing.
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // install and import axios
// import moment from "moment"

// function FeatureArticle() {
//   const [news, setNews] = useState([]); // state for news data
//   const [loading, setLoading] = useState(false); // state for loading indicator
//   const [error, setError] = useState(null); // state for error message

//   useEffect(() => {
//     // function to fetch news data
//     async function fetchNews() {
//       try {
//         setLoading(true); // show loading indicator
//         const response = await axios.get(
//           "https://newsapi.org/v2/top-headlines?country=us&apiKey=f736862a0e634754ad2df9eaf663eb6c"
//         ); // replace with your API endpoint and key
//         setNews(response.data.articles); // update news state with data
//       } catch (err) {
//         setError(err.message); // update error state with message
//       } finally {
//         setLoading(false); // hide loading indicator
//       }
//     }

//     fetchNews(); // call the function
//   }, []); // run only once when component mounts

//   if (loading) return <p>Loading...</p>; // render loading indicator
//   if (error) return <p>Error: {error}</p>; // render error message

//   return (
//     <div className="news-app">
//       <h1>News App</h1>
//       <ul>
//         {news.map((article) => (
//           <li key={article.url}>
//              <img src={article.urlToImage} alt={article.title} /> 
//              <p>{moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url}>Read more</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FeatureArticle;

import React, { useState, useEffect } from "react";
import axios from "axios"; // install and import axios
import moment from "moment"; // install and import moment for date formatting

function FeatureArticle() {
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
    <div className="news-app">
      <h1>News App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          placeholder="Search news..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchHandler}>
          Search
        </button>
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
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <img src={article.urlToImage} alt={article.title} /> {/* display image */}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}</p> {/* display date */}
            <a href={article.url}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureArticle;
