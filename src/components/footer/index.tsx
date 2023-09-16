import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Main Street</p>
            <p className="text-gray-300">City, State ZIP Code</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@example.com</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Properties</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Recent Listings */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Recent Listings</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Property 1</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Property 2</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Property 3</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Property 4</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-gray-700 py-4 bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Real Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer