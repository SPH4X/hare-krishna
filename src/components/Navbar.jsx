"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [status, setStatus] = useState("Closed");
  const [statusColor, setStatusColor] = useState("bg-red-500");

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

  return (
    <>
      {/* Upper Nav Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-gray-800 to-sky-950 text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:hkm.jodhpur@harekrishnajaipur.org"
            className="flex items-center hover:text-white transition-colors"
          >
            <i className="fas fa-envelope mr-1 text-lg"></i>
            <span className="hidden sm:inline">
              hkm.jodhpur@harekrishnajaipur.org
            </span>
          </Link>
          <Link
            href="https://wa.me/919799984010"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors"
          >
            <i className="fab fa-whatsapp mr-1 text-lg"></i>
            <span className="hidden sm:inline">+91 979984010</span>
          </Link>
        </div>
        {/* Status indicator */}
        <div className="flex items-center space-x-4">
          <div className={`flex items-center px-4 py-2 rounded-full text-white ${statusColor}`}>
            {status}
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <Link
              href="https://www.youtube.com/@HareKrishnaJodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <i className="fab fa-youtube text-xl"></i>
            </Link>
            <Link
              href="https://instagram.com/harekrishnajodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link
              href="https://www.facebook.com/hkmjodhpur/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-facebook text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Nav Bar */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo of Hare Krishna Movement Jodhpur"
              className="h-10 w-auto sm:h-12 "
              width={300}
              height={300}
            />
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {["/", "/about", "/activities", "/festivals", "/contact"].map(
              (link, index) => {
                const labels = [
                  "Home",
                  "About",
                  "Activities",
                  "Festivals",
                  "Contact",
                ];
                return (
                  <Link
                    key={link}
                    href={link}
                    className={`text-white hover:text-blue-300 transition-colors font-semibold ${
                      pathname === link ? "underline" : ""
                    }`}
                  >
                    {labels[index]}
                  </Link>
                );
              }
            )}
          </nav>
          {/* Stylish Donate Button */}
          <div className="ml-4">
            <Link href="/donate">
              <button className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold px-6 py-3 rounded-3xl transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar for Mobile Screens */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#222] shadow-lg z-50 sm:hidden">
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
    </>
  );
}
