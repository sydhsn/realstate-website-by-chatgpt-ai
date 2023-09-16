// ProductList.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1...',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2...',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3...',
  },
];

function ProductList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
