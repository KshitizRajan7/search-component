"use client";
import React, { useState } from "react";
import DestinationInput from "./DestinationInput";
import GuestSelector from "./GuestSelector";
import DateRangePicker from "./DateRangePicker";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log({
      destination,
      checkInDate,
      checkOutDate,
      guests,
    });
  };

  return (
    <div className="bg-gray-100 rounded-xl p-2 flex flex-wrap items-center gap-2 shadow-md">

      {/* Destination */}
      <div className="flex-1 min-w-[150px]">
        <DestinationInput value={destination} setValue={setDestination} />
      </div>

      {/* Dates */}
      {/* Full width on small screens so it does NOT overlap */}
      <div className="w-full sm:flex-1 sm:min-w-[200px]">
        <DateRangePicker
          checkIn={checkInDate}
          checkOut={checkOutDate}
          setCheckIn={setCheckInDate}
          setCheckOut={setCheckOutDate}
        />
      </div>

      {/* Guests */}
      <div className="flex-1 min-w-[120px]">
        <GuestSelector guests={guests} setGuests={setGuests} />
      </div>

      {/* Search Button */}
      <div className="min-w-[100px]">
        <SearchButton handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
