import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Language() {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <>
      <div class="dropdown-center">
        <button
          class="btn btn-light text-dark dropdown-toggle titleType"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          FilterPrice
        </button>
        <ul class="dropdown-menu">
          <li>
            <label for="natureType" className="d-flex align-items-center">
              <input
                id="natureType"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option1}
                onChange={() => handleCheckboxChange("option1")}
              />
              Nature Type
            </label>
          </li>
          <li>
            {" "}
            <label for="Adventure Tours" className="d-flex align-items-center">
              <input
                id="Adventure Tours"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option2}
                onChange={() => handleCheckboxChange("option2")}
              />
              Adventure Tours
            </label>
          </li>
          <li>
            <label for="Culture Tours" className="d-flex align-items-center">
              <input
                id="Culture Tours"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option3}
                onChange={() => handleCheckboxChange("option3")}
              />
              Culture Tours
            </label>
          </li>
          <li>
            <label for=" Food Tours" className="d-flex align-items-center">
              <input
                id=" Food Tours"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option4}
                onChange={() => handleCheckboxChange("option4")}
              />
              Food Tours
            </label>
          </li>
          <li>
            <label for=" City Tours" className="d-flex align-items-center">
              <input
                id=" City Tours"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option5}
                onChange={() => handleCheckboxChange("option5")}
              />
              City Tours
            </label>
          </li>
          <li>
            <label for="Crusies Tours" className="d-flex align-items-center">
              <input
                id="Crusies Tours"
                type="checkbox"
                className="me-2"
                checked={selectedOptions.option6}
                onChange={() => handleCheckboxChange("option6")}
              />
              Crusies Tours
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Language;
