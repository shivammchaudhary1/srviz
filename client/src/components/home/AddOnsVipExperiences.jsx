import React from "react";
import ContactForm from "../forms/ContactForm.jsx";
import {
  addOn1,
  addOn2,
  addOn3,
  addOn4,
  addOn5,
  addOn6,
} from "../../assets/assets.js";

const AddOnsVipExperiences = () => {
  const experienceImages = [
    {
      id: 1,
      image: addOn1,
      alt: "VIP Experience 1",
    },
    {
      id: 2,
      image: addOn2,
      alt: "VIP Experience 2",
    },
    {
      id: 3,
      image: addOn3,
      alt: "Car Experience",
    },
    {
      id: 4,
      image: addOn4,
      alt: "Premium View",
    },
    {
      id: 5,
      image: addOn5,
      alt: "Meet & Greet",
    },
    {
      id: 6,
      image: addOn6,
      alt: "VIP Access",
    },
  ];

  const faqItems = [
    {
      id: 1,
      icon: "📧",
      title: "Live Info",
      description: "FAQs",
    },
    {
      id: 2,
      icon: "📱",
      title: "WhatsApp",
      description: "+91 9169235786",
    },
  ];

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Section - Add-ons & VIP Experiences */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
              ADD-ONS & VIP EXPERIENCES
            </h2>

            {/* Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {experienceImages.map((item) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div className="mb-8 sm:mb-12">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Elevate your Formula 1 experience with our exclusive add-ons and
                VIP packages. From premium hospitality to behind-the-scenes
                access, create unforgettable memories.
              </p>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">
                NIGHT ★★★
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                FAQ
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 sm:space-x-4 bg-gray-50 p-3 sm:p-4 rounded-lg flex-1 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0 transition-all duration-300 hover:bg-gray-700">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnsVipExperiences;
