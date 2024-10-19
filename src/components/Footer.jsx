import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBook,
  faPeopleArrows,
  faMobileAlt,
  faEnvelope,
  faYoutube,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="font-medium gap-5 w-full text-white bg-black" id="footer">
        <div className="flex flex-col lg:flex-row gap-4 justify-between max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col my-8 lg:my-0 sm:flex-row lg:flex-col gap-4">
            <Link
              href="/"
              className="flex gap-4 h-24 duration-150 hover:brightness-75"
            >
              <Image
                src="/logo.png"
                alt="Hare Krishna Mandir (ISKCON) Jodhpur"
                className="object-contain p-2"
                width={300}
                height={150}
              />
            </Link>
            <div className="space-y-4 text-center max-w-xs">
              <p>
                Hare Krishna Road, Behind ITC Welcome Road Soder Ki Dhani, Nandra, Rajasthan 342015
              </p>
              <div className="flex items-center space-x-4 text-lg max-w-max mx-auto text-text">
                <Link
                  href="https://www.youtube.com/@HareKrishnaJodhpur/"
                  target="_blank"
                  className="hover:text-red-400 transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </Link>
                <Link
                  href="https://instagram.com/harekrishnajodhpur"
                  target="_blank"
                  className="hover:text-pink-400 transition-colors"
                >
                    <i className="fab fa-instagram text-xl"></i>
                </Link>
                <Link
                  href="https://www.facebook.com/hkmjodhpur/"
                  target="_blank"
                 className="hover:text-blue-400 transition-colors"
                >
                 <i className="fab fa-facebook text-xl"></i>
                </Link>
                <Link
                  href="https://wa.me/919799984010"
                  target="_blank"
                  className="hover:text-green-400 transition-colors"
                >
                   <i className="fab fa-whatsapp text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:w-[initial] flex-grow gap-4 md:gap-8">
            {/* Timings Section */}
            <div className="flex flex-col w-full md:max-w-max border-b-2 border-gray-500 py-2 space-y-2">
              <h5 className="flex justify-between items-center text-primary">
                <div className="flex-grow">Timing</div>
                <span className="text-3xl md:hidden">
                  <FontAwesomeIcon icon={faClock} className="duration-150 rotate-0" />
                </span>
              </h5>
              <div className="flex flex-col gap-2">
                {["Mangala Arti - 4:30 AM", "Shringar Aarti - 7:30 AM", "Bhagvatam class - 08:15 AM", "Rajbhog Aarti - 12:00 PM", "Sandhya Aarti - 7:00 PM", "Shayan Aarti - 8:30 PM"].map((timing, index) => (
                  <div className="inline-flex gap-1" key={index}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>{timing}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Services Section */}
            <div className="flex flex-col w-full md:max-w-max border-b-2 border-gray-500 py-2 space-y-2">
              <h5 className="flex justify-between items-center text-primary">
                <div className="flex-grow">Our Services</div>
                <span className="text-3xl md:hidden">
                  <FontAwesomeIcon icon={faPeopleArrows} className="duration-150 rotate-0" />
                </span>
              </h5>
              <div className="flex flex-col gap-2">
                {["Life Patronship", "Books Counter", "Prasadam Counter", "FOLK Spirituals", "Yoga For Happiness", "Cultural Education Services"].map((service, index) => (
                  <div className="inline-flex text-center gap-2" key={index}>
                    <FontAwesomeIcon icon={faBook} />
                    <p>{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="flex flex-col w-full md:max-w-max border-b-2 border-gray-500 py-2 space-y-2">
              <h5 className="flex justify-between items-center text-primary">
                <div className="flex-grow">About</div>
                <span className="text-3xl md:hidden">
                  <FontAwesomeIcon icon={faCheck} className="duration-150 rotate-0" />
                </span>
              </h5>
              <div className="flex flex-col flex-grow justify-evenly md:h-full gap-2">
                {["Mandir", "Prabhupada", "Philosophy"].map((item, index) => (
                  <div className="inline-flex text-center gap-2" key={index}>
                    <FontAwesomeIcon icon={faCheck} />
                    <p>{item}</p>
                  </div>
                ))}
                <h5 className="text-primary">Contact Us</h5>
                <Link
                  target="_blank"
                  href="https://wa.me/919799984010"
                  className="inline-flex text-center gap-2 items-center hover:underline"
                >
                  <span className="h-9 w-9 text-white flex items-center justify-center rounded-full bg-primary">
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </span>
                  <span>+91-9799984010</span>
                </Link>
                <Link
                  target="_blank"
                  href="mailto:hkm.jodhpur@harekrishnajaipur.org"
                  className="inline-flex gap-2 items-center hover:underline"
                >
                  <span className="h-9 w-9 text-white flex items-center justify-center rounded-full bg-primary">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>hkm.jodhpur@harekrishnajaipur.org</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-4 bg-black border-t border-gray-600">
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Hare Krishna Mandir  Jodhpur. All Rights Reserved.
          </div>
          <div className="flex space-x-4 mt-2 lg:mt-0">
            <Link href="/privacyPolicy" className="text-sm hover:underline">Privacy Policy</Link>
            <Link href="/termsConditions" className="text-sm hover:underline">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
