import React from "react";
import TourSidebar from "../../Features/TourPhuket/TourSideBar/TourSidebar";
import TourPosts from "../../Features/TourPhuket/TourPosts/TourPosts";
import './style.css'

function Tour() {
  
  return (
    <>
      
      <div className="container mt-5">
        <p className="headText fw-bold">Explore all Things to do in Phuket</p>
        <div className="row ">
          <div className="col-lg-3  p-0">
            <TourSidebar/>
          </div>
          <div className="col-lg-9 ">
            <TourPosts/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tour;
