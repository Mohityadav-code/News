
import NavBar from "./Layout/Navbar/Navbar";
import IndexLandingPage from "./pages/LandingPage/Index";

function App() {
  return (
    <>
      <div className={`flex  flex-col  bg-[#9BA4B5] h-screen  `}>
        <div className="navbar w-full h-5 ">
          <NavBar/>
        </div>  
        <div className="IndexLandingPage">
          <IndexLandingPage  />
        </div>
      </div>
    </>
  );
}

export default App;
