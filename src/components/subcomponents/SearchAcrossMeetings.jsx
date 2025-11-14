import React from "react";

function SearchAcrossMeetings() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="font-semibold mb-2">Search Across Meetings</h4>
      <p className="text-gray-500 mb-4">
        Quickly find key moments, topics, or decisions from any past meeting.
      </p>
      <div className="mt-4">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <input
            className="bg-transparent flex-1 outline-none text-sm text-gray-600"
            placeholder="Search In Meetings"
          />
          <div className="text-xs text-gray-400">⌘ K</div>
        </div>
      </div>
    </div>
  );
}

export default SearchAcrossMeetings;
