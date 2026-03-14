import React from "react";
import { JOURNEY } from "../../data/constants";

const Experience = () => {
  return (
    <section id="journey" className="py-20 px-6 bg-black text-white">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My Journey 🚀
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700 max-w-4xl mx-auto">

        {JOURNEY.map((item, index) => (
          <div key={index} className="mb-12 ml-6">

            {/* Circle */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-black"></span>

            {/* Year */}
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-400">
              {item.year}
            </h3>

            {/* Title */}
            <h4 className="text-xl font-bold">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 mt-2 leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;