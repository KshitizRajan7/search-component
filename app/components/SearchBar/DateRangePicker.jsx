"use client"
import React, { useState } from 'react'

const DateRangePicker = ({checkIn, setCheckIn, checkOut, setCheckOut}) => {
    // const [checkIn, setCheckIn] = useState("");
    // const [checkOut, setCheckOut] = useState("");
    return (
        <div className='flex gap-2'>
            <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="px-4 py-2  rounded-full w-full sm:w-[calc(50%-4px)] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-full w-full sm:w-[calc(50%-4px)] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>
    )
}

export default DateRangePicker
