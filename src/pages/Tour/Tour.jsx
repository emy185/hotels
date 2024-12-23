import React from "react";
import { useNavigate } from "react-router-dom";

function Tour() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/HotelDetails");
  };
  return (
    <div className="mt-5 text-center">
      <button onClick={handleNavigate}>Details</button>
    </div>
  );
}
export default Tour;
