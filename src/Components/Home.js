import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const sectionData = [
    {
      title: "Reinventing Voting with Facial Recognition",
      text: "Embrace the future of democracy with secure and efficient voting through facial recognition technology.",
      imageUrl:
        "https://www.secureye.com/wp-content/uploads/2023/09/how-does-biometric-attendance-system-work.webp",
    },
    {
      title: "Exercise Your Right: Vote Now and Make Your Voice Heard!",
      text: '"Voting is the cornerstone of democracy, allowing citizens to shape their collective future. Each ballot cast is a powerful statement, influencing policies and leaders that impact our lives.',
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/04/18/84/78/1000_F_418847816_XGQjWVdwKDhDyGVwdvdD3w9gyd0sXv3v.jpg",
    },
    {
      title: "Improving Voter Accessibility",
      text: "Ensure that all citizens, regardless of physical abilities, can exercise their right to vote with our accessible voting system.",
      imageUrl:
        "https://www.analyticsinsight.net/wp-content/uploads/2022/03/What-is-the-importance-of-facial-recognition-in-todays-world.jpg",
    },
    {
      title: "Ensuring Voter Security",
      text: "Protect the integrity of elections and prevent fraud with our advanced encryption and security measures.",
      imageUrl:
        "https://www.cpomagazine.com/wp-content/uploads/2023/01/how-safe-can-biometrics-really-be-the-rock-solid-measures-that-guarantee-it_1500.jpg",
    },
    {
      title: "Enhancing Voter Engagement",
      text: "Foster a sense of community and participation by offering interactive features and real-time updates during elections.",
      imageUrl:
        "https://c8.alamy.com/comp/R3BPER/concept-of-face-recognition-software-and-hardware-R3BPER.jpg",
    },
    {
      title: "Register Now: Be the Change You Wish to See",
      text: "Don't wait! Register now and make your voice count in shaping our future. Every vote matters - including yours.",
      imageUrl:
        "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1709793768~exp=1709797368~hmac=e41c31ab5f8f68178e0751a31e58dbccd423a2d0f41c4e2be8466ec02145ae02&w=740",
    },
    {
      title: "Voice Your Choice: The Power of Your Vote",
      text: "Join us in shaping the future by casting your vote in this pivotal election. Seize the moment! Vote now and ensure your voice echoes in the halls of democracy. Your vote is your power - use it wisely.",
      imageUrl:
        "https://img.freepik.com/premium-vector/vote-responsibly-its-your-superpower-text-with-folded-two-human-hands-showing-voting-mark-tricolor-waves-blue-background_1302-33291.jpg?w=740",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      {sectionData.map((data, index) => (
        <div
          key={index}
          className={`mx-auto shadow-sm flex lg:my-12 flex-col sm:flex-row items-center justify-between rounded-lg ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="sm:w-1/2">
            <img
              src={data.imageUrl}
              alt="Voting Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="sm:w-1/2 px-6">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-grey-400 font-bold leading-tight mb-4">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-8">
                {data.text}
              </p>
              <Link to={"/admin"}>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                  Vote Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
