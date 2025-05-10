import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function FilterPrice() {
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
          Select Price
        </option>
        <option value="100$-200$">100$-200$</option>
        <option value="200$-300$">200$-300$</option>
        <option value="300$ or More">300$ or More</option>
      </select>
    </>
  );
}

export default FilterPrice;
