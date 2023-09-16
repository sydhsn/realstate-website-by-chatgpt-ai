// src/components/Features.js
import React from 'react';

const features = [
  {
    title: 'Feature 1',
    description: 'Description for Feature 1...',
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2...',
  },
  {
    title: 'Feature 3',
    description: 'Description for Feature 3...',
  },
];

function Features() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
