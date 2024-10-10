import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "0", // Removed unnecessary padding
        minHeight: "100vh", // Ensure the content takes up at least full screen
      }}
    >
      {/* Navigation Bar */}

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <div
          style={{
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "12px",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
            }}
            src="https://www.youtube.com/embed/UDllFC9d4Xc?si=VKVQ78YF2pqKVbzW"
            title="YouTube video player - Hare Krishna Movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Hare Krishna Mandir, Jodhpur
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
          >
            &quot;A humble offering to the eternal master, Srila Prabhupada, for the
            benefit of all souls seeking something permanent in this transient
            world.&quot;
          </p>

          <p
            style={{
              fontSize: "16px",
              marginBottom: "24px",
            }}
          >
            The Hare Krishna Mandir is an endeavor to fulfill the mission of our
            beloved spiritual master, His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada, who is the founder acharya of the worldwide Hare Krishna
            Movement and the link to connect with Lord Sri Krishna.
          </p>

          <p
            style={{
              fontSize: "16px",
              marginBottom: "24px",
            }}
          >
            As the second-largest temple in the state, it is currently being
            constructed in two phases. April 2, 2022, marked the bhumi pujan
            ceremony and the inauguration of the sankirtan hall, alongside the
            deity installation of Sri Sri Gaur Natai.
          </p>

          <p
            style={{
              fontSize: "16px",
              marginBottom: "24px",
            }}
          >
            The temple introduces society to ancient Vedic wisdom through the
            Bhagavad-gita and Srimad-Bhagavatam. It offers devotees the
            opportunity to partake in deity darshan, harinam sankirtan, aarties,
            sadhu sanga, and spiritual discussions. Celebrations of festivals
            and honoring prasadam make the temple a hub for devotees from
            different regions.
          </p>

          <p
            style={{
              fontSize: "16px",
              marginBottom: "24px",
            }}
          >
            With the Hare Krishna Maha Mantra filling the air, devotees
            experience spiritual bliss in the sankirtan hall, leaving with
            memories of deep spiritual connection. This mandir is an offering to
            Srila Prabhupada and Lord Sri Krishna, serving those seeking
            something steady, satisfying, and blissful in this world of
            impermanence.
          </p>
        </section>
      </div>

      {/* Footer */}
    </div>
  );
};

export default About;
