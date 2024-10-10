import React from "react";
import Image from "next/image";

const Activities = () => {
  const festivalImages = [
    {
      alt: "A group of dancers performing a traditional dance in colorful attire with a vibrant red background",
      src: "", // Blank source
    },
    {
      alt: "A group of people in white clothing holding baskets of flowers during a festival procession",
      src: "", // Blank source
    },
    {
      alt: "A religious ceremony with people in traditional attire and a decorated stage",
      src: "", // Blank source
    },
  ];

  const culturalImages = [
    {
      alt: "A traditional musical performance with instruments and dancers in colorful costumes",
      src: "", // Blank source
    },
    {
      alt: "A large crowd enjoying a cultural show under festive lights at the temple grounds",
      src: "", // Blank source
    },
    {
      alt: "Artists performing a devotional play on stage in front of a large audience",
      src: "", // Blank source
    },
  ];

  const specialEventImages = [
    {
      alt: "A night-time event at the temple with candles and colorful decorations",
      src: "", // Blank source
    },
    {
      alt: "A grand procession with devotees and musicians leading the way",
      src: "", // Blank source
    },
    {
      alt: "A large stage event featuring a famous spiritual speaker and musicians",
      src: "", // Blank source
    },
  ];

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Temple Festivals Section */}
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
          1. Activities
        </h1>
        <p className="text-xl leading-relaxed mb-12 text-gray-300">
          Memories of the variegated cultural activities, including traditional
          dance, drama, and musical kirtans and bhajans, performed at the Hare
          Krishna Mandir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {festivalImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={image.src} // Blank source
                width={640}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Events Section */}
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-black mt-16">
          2. Events
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-gray-300">
          Memories of the variegated cultural activities, including traditional
          dance, drama, and musical kirtans and bhajans, performed at the Hare
          Krishna Mandir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {culturalImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={image.src} // Blank source
                width={640}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Events Section */}
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-black mt-16">
          3. Our Services
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-gray-300">
          Hare Krishna Mandir, Jodhpur offers you spiritual guidance, prasadam
          booking, and kirtan instrument classes like mridanga and kartal. Join
          us for worship, meditation, and educational programs; participate in
          festive celebrations and enhance your spiritual journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialEventImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={image.src} // Blank source
                width={640}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
