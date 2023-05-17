import React from "react";
import NavBar from "../../Layout/Navbar/Navbar";
import IndexLandingPage from "../LandingPage/Index";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <IndexLandingPage />
      </div>
    </>
  );
}
