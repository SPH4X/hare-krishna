"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";

const Donate = () => {
// Donate cards 
  const cardData = [
    {
      id: 1,
      title: "Card title 1",
      imageUrl:
        "",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Card title 2",
      imageUrl:
        "",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Card title 3",
      imageUrl:
        "",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Card title 4",
      imageUrl:
        "",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  const sliderRef = useRef(null);

  // Example data
  const data = {
    cards: [
      {
        image: "/aboutTemple.png",
      },
      {
        image: "/aboutTemple2.png",
      },
      {
        image: "",
      },
    ],
  };

  // Functions to pause and resume autoplay on hover
  const handleMouseEnter = () => {
    sliderRef.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    sliderRef.current?.swiper?.autoplay?.start();
  };

  return (
    <>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-black">
      {cardData.map((card) => (
        <div key={card.id} className="flex flex-col bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-lg rounded-xl">
          <div className="relative w-full h-64 rounded-t-xl">
            <Image
              src={card.imageUrl}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4 md:p-5 text-white">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="mt-1 text-gray-300">{card.description}</p>
            <Link
              className="mt-4 py-3 px-6 inline-flex justify-center items-center gap-x-2 text-xl font-medium rounded-lg border border-transparent  bg-sky-950 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              href="#"
            >
              Donate
            </Link>
          </div>  
        </div>
      ))}
    </div>




    </>
  );
};

export default Donate;
