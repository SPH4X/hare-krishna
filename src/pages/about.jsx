import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12">
        <div className="rounded-lg shadow-lg p-6 mb-8">
          <iframe
            className="w-full h-64 sm:h-80 lg:h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/UDllFC9d4Xc?si=VKVQ78YF2pqKVbzW"
            title="YouTube video player - Hare Krishna Movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <section className="max-w-11xl mx-auto p-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hare Krishna Mandir, Jodhpur</h1>
          <p className="text-lg italic mb-6">
            &quot;A humble offering to the eternal master, Srila Prabhupada, for the
            benefit of all souls seeking something permanent in this transient
            world.&quot;
          </p>

          <p className="text-base sm:text-lg mb-6">
            The Hare Krishna Mandir is an endeavor to fulfill the mission of our
            beloved spiritual master, His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada, who is the founder acharya of the worldwide Hare Krishna
            Movement and the link to connect with Lord Sri Krishna.
          </p>

          <p className="text-base sm:text-lg mb-6">
            As the second-largest temple in the state, it is currently being
            constructed in two phases. April 2, 2022, marked the bhumi pujan
            ceremony and the inauguration of the sankirtan hall, alongside the
            deity installation of Sri Sri Gaur Natai.
          </p>

          <p className="text-base sm:text-lg mb-6">
            The temple introduces society to ancient Vedic wisdom through the
            Bhagavad-gita and Srimad-Bhagavatam. It offers devotees the
            opportunity to partake in deity darshan, harinam sankirtan, aarties,
            sadhu sanga, and spiritual discussions. Celebrations of festivals
            and honoring prasadam make the temple a hub for devotees from
            different regions.
          </p>

          <p className="text-base sm:text-lg mb-6">
            With the Hare Krishna Maha Mantra filling the air, devotees
            experience spiritual bliss in the sankirtan hall, leaving with
            memories of deep spiritual connection. This mandir is an offering to
            Srila Prabhupada and Lord Sri Krishna, serving those seeking
            something steady, satisfying, and blissful in this world of
            impermanence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
