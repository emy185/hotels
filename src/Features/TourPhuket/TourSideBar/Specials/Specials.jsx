import React, { useState } from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Specials() {
  
  
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
               <option value="" disabled>Select Price</option>
                <option value="Free cancellation">Free cancellation</option>
                <option value="Ocean Views">Ocean Views</option>
                <option value="Relaxing Poolside">Relaxing Poolside</option>
                <option value="Relaxation and Wellness">Relaxation and Wellness</option>
                <option value="Tranquil Escape">Tranquil Escape</option>
                <option value="Exclusive Beach Access">Exclusive Beach Access</option>
              
              </select>
         
  
      
  
  
      </>
    );

}

export default Specials;