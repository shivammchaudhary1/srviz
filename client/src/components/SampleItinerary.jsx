import React from "react";
import Cards from "./Cards.jsx";

const SampleItinerary = () => {
  const itineraryItems = [
    {
      id: 1,
      title: "Hospitality Pass",
      image:
        "https://via.placeholder.com/300x200/4A5568/FFFFFF?text=Hospitality+Pass",
      description: "Explore premium hospitality experiences",
      price: "TICKETS",
    },
    {
      id: 2,
      title: "Meet & Greet",
      image:
        "https://via.placeholder.com/300x200/4A5568/FFFFFF?text=Meet+%26+Greet",
      description: "Exclusive meet and greet service",
      price: "TICKETS",
    },
    {
      id: 3,
      title: "Exclusive Lime Treats",
      image:
        "https://via.placeholder.com/300x200/4A5568/FFFFFF?text=Exclusive+Treats",
      description: "Special refreshments and treats",
      price: "TICKETS",
    },
    {
      id: 4,
      title: "City Tour",
      image: "https://via.placeholder.com/300x200/4A5568/FFFFFF?text=City+Tour",
      description: "Guided city tour service",
      price: "TICKETS",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div className="w-4/5 p-5 rounded-lg bg-gray-50">
        <div className="flex justify-between items-center mb-5">
          <p className="font-bold text-2xl text-gray-800">SAMPLE ITINERARY</p>
          <p className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
            Examples &gt;
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {itineraryItems.map((item) => (
            <Cards key={item.id} pkg={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleItinerary;
