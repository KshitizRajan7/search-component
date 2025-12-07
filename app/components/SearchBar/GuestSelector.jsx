"use client";
import React, { useState } from "react";

const GuestSelector = ({ guests, setGuests }) => {
    const increment = () => setGuests(guests + 1);
    const decrement = () => setGuests(guests > 1 ? guests - 1 : 1); 

    return (
        <div className="border rounded-md p-2 flex items-center gap-2 w-40">
            <span>Guests: {guests}</span>
            <button
                onClick={decrement}
                className="px-2 bg-gray-200 rounded"
            >
                -
            </button>
            <button
                onClick={increment}
                className="px-2 bg-gray-200 rounded"
            >
                +
            </button>
        </div>
    );
};

export default GuestSelector;
