import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [cars, setCars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Fetch car data from JSON file or API endpoint
    fetch("/src/components/json/Cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.log(error));
  }, []);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + cars.length) % cars.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % cars.length);
  };

  return (
   <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <img
        className="absolute inset-0 h-full w-full object-cover z-0"
        src={cars[activeIndex]?.image}
        alt={`${cars[activeIndex]?.title} ${cars[activeIndex]?.price}`}
      />
      <div className="absolute bottom-2  left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 p-6 bg-black bg-opacity-50 rounded-md">
        <h1 className="text-white text-5xl font-bold tracking-wide">
          {`${cars[activeIndex]?.title} ${cars[activeIndex]?.price}`}
        </h1>
				<p className="text-white text-2xl font-semibold tracking-wide">
					{`${cars[activeIndex]?.description}`}
				</p>
      </div>
      <button
        className="absolute left-10 top-1/3 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 p-4 rounded-xl"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute right-10 top-1/3 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 p-4 rounded-xl"
        onClick={handleNext}
      >
        &#8594;
      </button>
    </div>
	);
};

export default Carousel;

