import React from "react";

const WhyChooseUs = () => {
  const steps = [
    {
      step: "1",
      title: "Choose your event",
      icon: "🎯",
    },
    {
      step: "2",
      title: "We arrange your travel + tickets",
      icon: "✈️",
    },
    {
      step: "3",
      title: "Enjoy a seamless sports experience",
      icon: "🏆",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mt-5 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Title and Stats */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              WHY CHOOSE US
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Stats Row 1 */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
                    12,000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    True Travelers
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
                    68%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Return Rate
                  </div>
                </div>
              </div>

              {/* Stats Row 2 */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">
                    Official Partners
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-500">
                    4.0/5
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Rated Experiences
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xl sm:text-2xl">{step.icon}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
