import React from "react";
import {
  adventureTour1,
  adventureTour2,
  adventureTour3,
  adventureTour4,
} from "../assets/assets.js";
import Cards from "./Cards.jsx";

const TopPackages = () => {
  const packages = [
    {
      id: 1,
      title: "F1 JAPAN",
      image: adventureTour1,
      description: "Experience the thrill of Formula 1 racing in Japan.",
      price: "$2500",
    },
    {
      id: 2,
      title: "Alpine Ski Adventure",
      image: adventureTour2,
      description:
        "Hit the slopes with our exclusive ski packages in the Alps.",
      price: "$1800",
    },
    {
      id: 3,
      title: "Tropical Beach Escape",
      image: adventureTour3,
      description:
        "Relax on pristine beaches with our tropical getaway packages.",
      price: "$2200",
    },
    {
      id: 4,
      title: "Mountain Hiking Expedition",
      image: adventureTour4,
      description:
        "Explore breathtaking mountain trails with guided hiking tours.",
      price: "$2000",
    },
  ];
  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="w-full max-w-7xl p-4 sm:p-5 rounded-lg bg-gray-50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-2">
          <p className="font-bold text-xl sm:text-2xl text-gray-800">
            TOP PACKAGES
          </p>
          <p className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer transition-colors self-start sm:self-auto">
            Click to know more
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {packages.map((pkg) => (
            <Cards key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPackages;
