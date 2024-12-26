import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Rating() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select
        className="form-select btn btn-light text-dark dropdown-toggle titleType"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Rating
        </option>
        <option value="4 stars">4 stars</option>
        <option value="5 stars">5 stars</option>
      </select>
    </>
  );
}

export default Rating;
