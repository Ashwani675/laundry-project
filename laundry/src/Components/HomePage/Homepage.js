import React from "react";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
const Homepage = () => {
  return (
    <>
        <Navbar/>
    <div className="main-section">
        {/* navbar code start here */}
      <div className="container">
        <div className="row">
            <div className="col-6">
                <h1 className="text-dark">WE CLEAN YOU SHINE</h1>
            </div>
            <div className="col-6">

            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;
