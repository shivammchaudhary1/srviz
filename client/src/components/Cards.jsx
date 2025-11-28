import React from "react";

const Cards = ({ pkg }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-40 sm:h-44 lg:h-40 object-cover"
      />
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800 line-clamp-2">
          {pkg.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed flex-1 line-clamp-3">
          {pkg.description}
        </p>
        <div className="mt-auto">
          <p className="text-sm sm:text-base font-bold text-orange-600 mb-2">
            {pkg.price}
          </p>
          <button className="w-full bg-orange-600 text-white py-2 px-3 text-sm sm:text-base rounded-md hover:bg-orange-700 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
