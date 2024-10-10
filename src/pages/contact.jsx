// components/ContactSection.js

import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const ContactSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/aboutTemple.png')", // Replace with your custom PNG image URL
        backgroundSize: 'cover',  // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the background image
      }}
    >
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-bold capitalize lg:text-3xl">Inquire or get in touch</h1>
              <p className="max-w-xl mt-6">
                For support, inquiry, or feedback, please reach out to the Hare Krishna Movement Jaipur. We anticipate hearing from you. You are welcome to contact us through any convenient method.
              </p>

              <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                get in touch
              </button>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300">Contact Us</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Link href="https://wa.me/919799984010" className="flex items-center" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp mr-2"></i>
                      97999 84010
                    </Link>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Link href="mailto:hkm.jodhpur@harekrishnajaipur.org" className="flex items-center">
                      <i className="fas fa-envelope mr-2"></i>
                      hkm.jodhpur@harekrishnajaipur.org
                    </Link>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Link
href="https://maps.app.goo.gl/Kp3UJN76eAKQMAoD8"
className="flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Hare Krishna Mandir , Jodhpur
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Ask us everything and we would love to hear from you
                </p>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Send a Message"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
