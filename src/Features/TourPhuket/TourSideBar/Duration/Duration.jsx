import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Duration() {
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
          Select Duration
        </option>
        <option value="One to week Nights">1 to week Nights</option>
        <option value="One Week or More"> 1 Week or More</option>
        <option value="One Month or More">1 Month or More</option>
      </select>
    </>
  );
}

export default Duration;
