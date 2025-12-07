"use client";
import React, { useState } from "react";
import { mockHotels } from "../../../data/mockHotels"; // adjust path if needed

const DestinationInput = ({value, setValue}) => {
//   const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Get unique cities from mockHotels
  const destinations = [...new Set(mockHotels.map((hotel) => hotel.city))];

  const handleChange = (e) => {
    setValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelect = (city) => {
    setValue(city);
    setShowSuggestions(false);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Where are you going?"
        className="border rounded-md p-2 w-full"
      />

      {showSuggestions && value && (
        <ul className="absolute bg-white shadow-md rounded-md w-full mt-1 z-10 max-h-40 overflow-auto">
          {destinations
            .filter((city) =>
              city.toLowerCase().includes(value.toLowerCase())
            )
            .map((city) => (
              <li
                key={city}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(city)}
              >
                {city}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationInput;
