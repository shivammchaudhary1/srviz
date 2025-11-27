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
    <div className="flex justify-center mt-6">
      <div className=" w-4/5 p-5 rounded-lg bg-gray-50">
        <div className="flex justify-between items-center mb-5">
          <p className="font-bold text-2xl text-gray-800">TOP PACKAGES</p>
          <p className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
            Click to know more
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {packages.map((pkg) => (
            <Cards key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPackages;
