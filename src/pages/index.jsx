import React, { useRef } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  const sliderRef = useRef(null);

  const data = {
    cards: [
      { image: "/aboutTemple.png" },
      { image: "/aboutTemple2.png" },
      { image: "" },
    ],
  };

  const handleMouseEnter = () => {
    sliderRef.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    sliderRef.current?.swiper?.autoplay?.start();
  };

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
      src: "",
    },
    {
      id: 2,
      title: "Temple Donations",
      src: "",
    },
    {
      id: 3,
      title: "Anna Daan Seva",
      src: "",
    },
    {
      id: 4,
      title: "Sudama Seva",
      src: "",
    },
  ];

  return (
    <>
      {/* Carousel Section */}
      <div className="w-full overflow-hidden"> {/* Changed from w-screen to w-full */}
        <Swiper
          ref={sliderRef}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          keyboard={true}
          mousewheel={{
            releaseOnEdges: true,
            forceToAxis: true,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          modules={[Keyboard, Mousewheel, Autoplay]}
          loop={true}
          speed={600}
          className="w-full h-[500px]" // Ensure full width and height control
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src={card.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Section */}
     {/* About Section */}
<div className="bg-black min-h-screen flex flex-col items-center text-white w-full"> 
  <div className="w-full max-w-lg mb-[-30px] overflow-hidden">
    <Image
      src="/custom.png"
      alt="Decorative Upper Image"
      width={600}
      height={400}
      className="w-full"
    />
  </div>
  <div className="flex flex-col lg:flex-row justify-center items-center p-5 max-w-5xl w-full">
    {/* Apply w-full on mobile screens */}
    <div className="relative w-full h-48 sm:h-64 lg:w-7/12 lg:h-80">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/UDllFC9d4Xc?si=VKVQ78YF2pqKVbzW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="mt-5 lg:mt-0 lg:ml-5 w-full lg:w-5/12 text-center lg:text-left">
      <h2 className="text-2xl font-bold mb-2">About Hare Krishna Movement</h2>
      <h3 className="text-xl font-bold mb-2">Jodhpur</h3>
      <p className="mb-4">
        The Hare Krishna Cultural Centre, also known as the &quot;Hare Krishna Movement Jodhpur,&quot; aims to uplift society through authentic spiritual culture practices.
      </p>
      <p className="mb-4">
        Srila Prabhupada, the Founder-Acharya of ISKCON, emphasized that, &quot;Unless you change society, how can you promote social welfare?&quot;
      </p>

      <Link href="/about" passHref>
        <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </div>
  </div>

  <div className="w-full max-w-lg transform rotate-180 mt-[-30px] mb-[-70px] overflow-hidden">
    <Image
      src="/custom.png"
      alt="Decorative Lower Image"
      width={600}
      height={400}
      className="w-full"
    />
  </div>
</div>


      {/* Donation Section */}
      <div className="text-white font-roboto py-12 w-full"> {/* Changed w-screen to w-full */}
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center items-center mb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">Support Our Cause</h1>
              <p className="text-lg text-gray-300">
                Your generous donations can make a significant impact in the community.
              </p>
            </div>
          </div>

          <div className="flex justify-start overflow-x-auto scrollbar-hide py-4 text-white">
            <div className="flex space-x-8">
              {donationData.map((donation) => (
                <a key={donation.id} href="/donate">
                  <div className="flex-shrink-0 bg-gray-800 rounded-3xl overflow-hidden w-72 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        alt={donation.title}
                        src={donation.src}
                        fill
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

      {/* Photo Gallery Section */}
      <div className="bg-black text-white font-roboto py-12 px-12 w-full"> {/* Changed w-screen to w-full */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center mb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">Photos</h1>
              <p className="text-lg text-gray-300">
                View the highlights of the programs and cultural festivities celebrated by the Hare Krishna Movement Jodhpur.
              </p>
            </div>
          </div>

          <div className="flex justify-start overflow-x-auto scrollbar-hide py-4 text-white">
            <div className="flex space-x-8">
              {photosData.map((photo) => (
                <a key={photo.id} href={photo.src} target="_blank" rel="noopener noreferrer">
                  <div className="flex-shrink-0 bg-gray-800 rounded-3xl overflow-hidden w-72 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        alt={photo.title}
                        src={photo.src}
                        fill
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
    </>
  );
};

export default Carousel;
