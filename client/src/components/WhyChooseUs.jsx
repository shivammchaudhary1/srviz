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
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Stats */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              WHY CHOOSE US
            </h2>

            <div className="space-y-6">
              {/* Stats Row 1 */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">
                    12,000+
                  </div>
                  <div className="text-sm text-gray-600">True Travelers</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">
                    68%
                  </div>
                  <div className="text-sm text-gray-600">Return Rate</div>
                </div>
              </div>

              {/* Stats Row 2 */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    Official Partners
                  </div>
                  <div className="text-2xl font-bold text-orange-500">
                    4.0/5
                  </div>
                  <div className="text-sm text-gray-600">Rated Experiences</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800">
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
