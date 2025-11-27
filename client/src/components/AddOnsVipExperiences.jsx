import React from "react";
import ContactForm from "./ContactForm.jsx";

const AddOnsVipExperiences = () => {
  const experienceImages = [
    {
      id: 1,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=Experience+1",
      alt: "VIP Experience 1",
    },
    {
      id: 2,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=Experience+2",
      alt: "VIP Experience 2",
    },
    {
      id: 3,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=Car+Experience",
      alt: "Car Experience",
    },
    {
      id: 4,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=Premium+View",
      alt: "Premium View",
    },
    {
      id: 5,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=Meet+Greet",
      alt: "Meet & Greet",
    },
    {
      id: 6,
      image:
        "https://via.placeholder.com/200x150/4A5568/FFFFFF?text=VIP+Access",
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
      description: "+1 855 252 2960",
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section - Add-ons & VIP Experiences */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              ADD-ONS & VIP EXPERIENCES
            </h2>

            {/* Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {experienceImages.map((item) => (
                <div key={item.id} className="relative group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div className="mb-12">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Elevate your Formula 1 experience with our exclusive add-ons and
                VIP packages. From premium hospitality to behind-the-scenes
                access, create unforgettable memories.
              </p>
              <p className="text-gray-800 font-semibold">NIGHT ★★★</p>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">FAQ</h3>
              <div className="flex flex-col md:flex-row gap-6">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
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
