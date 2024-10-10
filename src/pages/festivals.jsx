// components/Festivals.js
import Image from "next/image";
import React from "react";

const festivals = [
  {
    title: "Nityanand Trayodashi",
    date: "08/10/2024",
    description:
      "Who is Sri Nityananda Prabhu, and why His appearance day is celebrated? Learn more about the importance and details of the...",
    image: "/nitai.png",
  },
  {
    title: "Dusshera",
    date: "12/10/2024",
    description:
      "In the Treta Yuga, the Supreme Lord appeared as Lord Rama, the son of Dasaratha. He was exiled, and His...",
    image: "/dushera.png",
  },
  {
    title: "Govardhana Puja",
    date: "02/11/2024",
    description:
      "Govardhana Puja is celebrated in the month of Kartika (October – November) to commemorate the pastime of Lord Sri Krishna...",
    image: "/govardhan.png",
  },
  {
    title: "Diwali",
    date: "11/11/2024",
    description:
      "Diwali, the festival of lights, symbolizes the victory of light over darkness...",
    image: "", // Make sure to provide your own image
  },
  {
    title: "Holi",
    date: "25/03/2025",
    description:
      "Holi is a vibrant festival celebrating the arrival of spring and the victory of good over evil...",
    image: "", // Make sure to provide your own image
  },
];

const Festivals = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-4">Our Festivals</h1>
        <p className="text-center text-lg mb-8">
          Explore our Festivals & join us in the service of Lord
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  alt={`${festival.title} image`}
                  className="w-full h-64 object-cover rounded-t-lg mb-4" // Maintain the height
                  width={400} // Set a specific width
                  height={256} // Maintain the aspect ratio
                  src={festival.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
                {/* Gradient overlay */}
              </div>
              <h2 className="text-2xl font-semibold mb-2">{festival.title}</h2>
              <div className="flex items-center text-sky-600 mb-2">
                <i className="fas fa-calendar-alt mr-2" />
                <span>{festival.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{festival.description}</p>
              <button className="bg-sky-950 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Festivals;
