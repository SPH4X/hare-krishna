import React, { useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Link from "next/link"; // For internal navigation

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  const photosData = [
    { id: 1, title: "Temple Festivals", src: "/fest.png" },
    { id: 2, title: "Cultural Centre", src: "/event.png" },
    { id: 3, title: "Activities", src: "/activities.png" },
    { id: 4, title: "Events", src: "/puja.png" },
    { id: 5, title: "Folk", src: "/folk.png" },
    { id: 6, title: "Prayers", src: "/pray.png" },
  ];

  const donationData = [
    {
      id: 1,
      title: "Gau Seva",
      src: "https://cdn.pixabay.com/photo/2017/08/04/09/39/indian-cow-2579534_640.jpg",
    },
    {
      id: 2,
      title: "Temple Donations",
      src: "https://cdn.pixabay.com/photo/2024/06/22/05/14/ai-generated-8845454_640.jpg",
    },
    {
      id: 3,
      title: "Anna Daan Seva",
      src: "https://cdn.pixabay.com/photo/2021/02/28/09/38/food-6056720_640.jpg",
    },
    {
      id: 4,
      title: "Sudama Seva",
      src: "https://cdn.pixabay.com/photo/2023/08/24/02/10/ai-generated-8209626_640.png",
    },
  ];

  const slides = [{ url: "/aboutTemple.png" }, { url: "/aboutTemple2.png" }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <>
      <div
        className="w-full h-[400px] sm:h-[600px] lg:h-[800px] overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-[400px] sm:h-[600px] lg:h-[800px] relative">
              <Image
                src={slide.url}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="bg-black min-h-screen flex flex-col items-center text-white">
        <div className="w-full max-w-lg mb-[-70px]">
          <Image
            src="/custom.png"
            alt="Decorative Upper Image"
            layout="responsive"
            width={600}
            height={400}
            className="w-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center p-5 w-full max-w-5xl">
          <div className="relative w-full lg:w-1/2 h-48 sm:h-64 lg:h-80">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/UDllFC9d4Xc?si=VKVQ78YF2pqKVbzW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-5 lg:mt-0 lg:ml-5 w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">About Hare Krishna Movement</h2>
            <h3 className="text-xl font-bold mb-2">Jodhpur</h3>
            <p className="mb-4">
              The Hare Krishna Cultural Centre, also known as the &quot;Hare Krishna Movement Jodhpur&quot; or the &quot;Hare Krishna Mandir,&quot; desires to advance society through the authentic traditional practices of spiritual culture.
            </p>
            <p className="mb-4">
              Srila Prabhupada, the Founder-Acharya of the International Society for Krishna Consciousness, stated, &quot;Unless you change the society, how can you make social welfare?&quot;
            </p>

            <Link href="/about" passHref>
              
                <i className="fas fa-arrow-right ml-2"></i>   
            </Link>
          </div>
        </div>

        <div className="w-full max-w-lg transform rotate-180 mt-[-70px]">
          <Image
            src="/custom.png"
            alt="Decorative Lower Image"
            layout="responsive"
            width={600}
            height={400}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-black text-white font-roboto py-12 px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center mb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">Support Our Cause</h1>
              <p className="text-lg text-gray-300">
                Your generous contributions can make a significant impact in our community.
              </p>
            </div>
          </div>

          <div className="flex justify-start overflow-x-scroll scrollbar-hide py-4 text-white">
            <div className="flex space-x-8 px-8">
              {donationData.map((donation) => (
                <a key={donation.id} href="/donate">
                  <div className="flex-shrink-0 bg-gray-800 rounded-3xl overflow-hidden w-72 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        alt={donation.title}
                        src={donation.src}
                        layout="fill"
                        className="rounded-t-xl object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-center font-semibold text-xl">{donation.title}</p>
                      <button className="w-full mt-4 bg-sky-950 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                        Donate
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white font-roboto py-12 px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center mb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">Photos</h1>
              <p className="text-lg text-gray-300">
                View the highlights of the programs and cultural festivities celebrated by the Hare Krishna Movement Jodhpur.
              </p>
            </div>
          </div>

          <div className="flex justify-start overflow-x-scroll scrollbar-hide py-4 text-white">
            <div className="flex space-x-8 px-8">
              {photosData.map((photo) => (
                <a
                  key={photo.id}
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-shrink-0 bg-gray-800 rounded-3xl overflow-hidden w-72 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        alt={photo.title}
                        src={photo.src}
                        layout="fill"
                        className="rounded-t-xl object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-center font-semibold text-xl">{photo.title}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </> // Close fragment here
  );
};

export default Carousel;
