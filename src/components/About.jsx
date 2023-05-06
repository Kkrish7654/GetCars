import React from 'react';

function About() {
	const carImage ="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg"
  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <h1 className="text-4xl font-bold mb-4">About GetCars.in</h1>
        <p className="text-lg mb-8">
          GetCars.in is a car company that provides top-notch car rental services at an affordable price.
        </p>
        <img src={carImage} alt="Car" className="w-64 mb-8" />
        <h2 className="text-2xl font-bold mb-4">Our Privacy Policies</h2>
        <p className="text-lg mb-8">
          We take your privacy very seriously. Our policies are designed to protect your personal information and ensure that it is not shared with third parties without your consent. For more information, please read our Privacy Policy page.
        </p>
        <h2 className="text-2xl font-bold mb-4">Copyrights</h2>
        <p className="text-lg mb-8">
          All content on this website, including text, graphics, logos, and images, is the property of GetCars.in and is protected by international copyright laws.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

