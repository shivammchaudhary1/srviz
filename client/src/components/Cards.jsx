import React from "react";

const Cards = ({ pkg }) => {
  return (
    <div className="inline-block w-[22%] m-[1%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="text-base font-semibold mb-2 text-gray-800">
          {pkg.title}
        </h3>
        <p className="text-xs text-gray-600 mb-2 leading-relaxed">
          {pkg.description}
        </p>
        <p className="text-sm font-bold text-orange-600">{pkg.price}</p>
        <button className="mt-2 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
