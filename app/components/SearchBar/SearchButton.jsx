import React from 'react'

const SearchButton = ({handleSearch}) => {
    return (
        <div>
            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-teal-500 text-white rounded-full w-full hover:bg-blue-600 transition"
            >
                Search
            </button>
        </div>
    )
}

export default SearchButton
