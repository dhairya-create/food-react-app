import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card w-72 h-72 bg-gray-300 rounded-md m-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-300 to-transparent animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
