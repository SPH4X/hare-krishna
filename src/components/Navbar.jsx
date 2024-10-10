"use client"; // Indicates that this component will use client-side rendering
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Updated import

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [status, setStatus] = useState("Closed");
  const [statusColor, setStatusColor] = useState("bg-red-500");
  const pathname = usePathname(); // Use pathname to determine the current route

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update operational status
  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      const morningOpen = 270; // 4:30 AM
      const morningClose = 780; // 1:00 PM
      const afternoonOpen = 990; // 4:30 PM
      const eveningClose = 1245; // 8:45 PM

      const isOpen =
        (currentTime >= morningOpen && currentTime < morningClose) ||
        (currentTime >= afternoonOpen && currentTime <= eveningClose);

      setStatus(isOpen ? "Open" : "Closed");
      setStatusColor(isOpen ? "bg-green-500" : "bg-red-500");
    };

    updateStatus(); // Set initial status on component mount
    const intervalId = setInterval(updateStatus, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, []);

  // Render component
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-[#222] text-white">
        {/* Top Bar (Hidden on mobile) */}
        <div className="hidden sm:flex bg-[#233142] flex-col sm:flex-row justify-between items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="text-xs sm:text-sm">
              <Link
                href="mailto:hkm.jodhpur@harekrishnajaipur.org"
                className="flex items-center"
              >
                <i className="fas fa-envelope"></i> hkm.jodhpur@harekrishnajaipur.org
              </Link>
            </span>
            <span className="text-xs sm:text-sm">
              <Link href="tel:+919799999881" className="flex items-center">
                <i className="fas fa-phone"></i> +91-97999 99881
              </Link>
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
            <span
              className={`text-white font-bold px-3 py-1 rounded-full text-xs sm:text-sm transition duration-300 shadow-md ${statusColor}`}
            >
              {status}
            </span>
            <div className="flex space-x-4">
              {[
                {
                  platform: "youtube",
                  url: "https://www.youtube.com/@HareKrishnaJodhpur/",
                },
                {
                  platform: "instagram",
                  url: "https://instagram.com/harekrishnajodhpur",
                },
                {
                  platform: "facebook",
                  url: "https://www.facebook.com/hkmjodhpur/",
                },
              ].map(({ platform, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="sticky top-0 z-50 bg-[#222] shadow-md px-4 sm:px-6 py-3 flex justify-between items-center sm:hidden">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo of Hare Krishna Movement Jaipur"
                className="h-10 w-auto"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <button className="bg-sky-950 text-white font-bold px-3 py-1 rounded-full text-xs">
            Donate now
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <nav className="fixed text-9xl bottom-0 left-0 right-0 bg-[#222] shadow-lg z-50 sm:hidden">
            <div className="flex justify-around items-center py-2">
              {["/", "/about", "/activities", "/festivals", "/contact"].map(
                (link, index) => {
                  const labels = [
                    "Home",
                    "About",
                    "Activities",
                    "Festivals",
                    "Contact",
                  ];
                  const icons = [
                    "home",
                    "info-circle",
                    "running",
                    "calendar-alt",
                    "phone-alt",
                  ];
                  return (
                    <Link
                      key={link}
                      href={link}
                      className={`flex flex-col items-center text-white ${
                        pathname === link
                          ? "hover:text-blue-400 font-bold"
                          : "hover:text-blue-400"
                      }`}
                    >
                      <i className={`fas fa-${icons[index]} text-lg`}></i>
                      <span className="text-xs">{labels[index]}</span>
                    </Link>
                  );
                }
              )}
            </div>
          </nav>
        )}

        {/* Desktop Navbar */}
        <div className="hidden sm:block bg-[#222] shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo of Hare Krishna Movement Jodhpur"
                  className="h-10 w-auto sm:h-12"
                  width={300}
                  height={300}
                />
              </Link>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex justify-center space-x-6 text-sm">
              {["/", "/about", "/activities", "/festivals", "/contact"].map(
                (link, index) => {
                  const labels = [
                    "Home",
                    "About Us",
                    "Activities",
                    "Festivals",
                    "Contact Us",
                  ];
                  return (
                    <Link
                      key={link}
                      href={link}
                      className={`text-white ${
                        pathname === link ? "font-bold" : "hover:text-blue-400"
                      }`}
                    >
                      {labels[index]}
                    </Link>
                  );
                }
              )}
            </div>

            {/* Donate Button */}
            <div className="flex-shrink-0">
              <button className="bg-white text-black font-bold px-4 py-2 rounded-full text-sm">
                Donate now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
