import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/home/SampleItinerary.module.css";
import {
  adventureSports,
  cityTour,
  culturalExperience,
  exclusiveLimeTreats,
  meetAndGreet,
  spaAndWellness,
  sunsetCruise,
  vipMember,
} from "../../assets/assets";

const SampleItinerary = () => {
  const itineraryItems = [
    {
      id: 1,
      title: "VIP Member",
      image: vipMember,
      description: "Explore premium hospitality",
      price: "TICKETS",
    },
    {
      id: 2,
      title: "Meet & Greet",
      image: meetAndGreet,
      description: "Exclusive meet and greet service",
      price: "TICKETS",
    },
    {
      id: 3,
      title: "Exclusive Lime Treats",
      image: exclusiveLimeTreats,
      description: "Special refreshments and treats",
      price: "TICKETS",
    },
    {
      id: 4,
      title: "City Tour",
      image: cityTour,
      description: "Guided city tour service",
      price: "TICKETS",
    },
    {
      id: 5,
      title: "Adventure Sports",
      image: adventureSports,
      description: "Thrilling adventure activities",
      price: "TICKETS",
    },
    {
      id: 6,
      title: "Cultural Experience",
      image: culturalExperience,
      description: "Immerse in local culture",
      price: "TICKETS",
    },
    {
      id: 7,
      title: "Spa & Wellness",
      image: spaAndWellness,
      description: "Relaxing wellness treatments",
      price: "TICKETS",
    },
    {
      id: 8,
      title: "Sunset Cruise",
      image: sunsetCruise,
      description: "Beautiful sunset water cruise",
      price: "TICKETS",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomCard = ({ item }) => (
    <div className="mx-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer transform hover:scale-105 hover:opacity-95">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          {/* <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            {item.price}
          </div> */}
        </div>
        <div className="p-4 flex flex-col justify-between h-36">
          <div className="flex-1">
            <h3
              className={`font-bold text-lg text-gray-800 mb-2 ${styles["line-clamp-1"]}`}
            >
              {item.title}
            </h3>
            <p
              className={`text-gray-600 text-sm mb-3 ${styles["line-clamp-2"]}`}
            >
              {item.description}
            </p>
          </div>
          <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-all duration-300 mt-auto cursor-pointer transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="w-full max-w-7xl p-4 sm:p-5 rounded-lg bg-gray-50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-2">
          <p className="font-bold text-xl sm:text-2xl text-gray-800">
            SAMPLE ITINERARY
          </p>
          <p className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer transition-colors self-start sm:self-auto">
            Know More &gt;
          </p>
        </div>

        <div className={styles["carousel-container"]}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={4000}
            infinite={true}
            arrows={true}
            swipeable={true}
            draggable={true}
            pauseOnHover={true}
            keyBoardControl={true}
            customTransition="all 1s ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            rtl={false}
            slidesToSlide={1}
            minimumTouchDrag={80}
            shouldResetAutoplay={true}
            rewind={false}
            rewindWithAnimation={true}
          >
            {itineraryItems.map((item) => (
              <CustomCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SampleItinerary;
