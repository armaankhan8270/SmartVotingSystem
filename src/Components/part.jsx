import React from "react";

const Party = () => {
  // Sample data for testing
  const parties = [
    {
      name: "Bharatiya Janata Party (BJP)",
      leader: "Narendra Modi",
      foundingDate: "April 6, 1980",
      ideologies:
        "Hindutva, Integral humanism, Nationalism, Social conservatism",
      keyLeaders: ["Narendra Modi", "Amit Shah"],
      details:
        "Bharatiya Janata Party – Country’s largest political party in terms of representation in the national parliament and state assemblies, and it is the world’s largest party in terms of primary membership. It was founded on April 6, 1980, and is led by Mr. Narendra Modi. The party's key ideologies include Hindutva, Integral humanism, Nationalism, and Social conservatism. Prominent leaders within the party include Narendra Modi and Amit Shah.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/800px-Bharatiya_Janata_Party_logo.svg.png",
    },
    {
      name: "Indian National Congress",
      leader: "Sonia Gandhi",
      foundingDate: "December 28, 1885",
      ideologies: "Secularism, Social democracy, Gandhian socialism",
      keyLeaders: ["Sonia Gandhi", "Rahul Gandhi"],
      details:
        "The Indian National Congress (INC) is one of the oldest political parties in India, founded on December 28, 1885. The party stands for secularism, social democracy, and Gandhian socialism. Key leaders of the party include Sonia Gandhi and Rahul Gandhi.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/225px-Indian_National_Congress_hand_logo.svg.png",
    },
    {
      name: "Aam Aadmi Party (AAP)",
      leader: "Arvind Kejriwal",
      foundingDate: "November 26, 2012",
      ideologies: "Anti-corruption, Decentralization, Populism",
      keyLeaders: ["Arvind Kejriwal", "Manish Sisodia"],
      details:
        "Aam Aadmi Party (AAP) was founded on November 26, 2012, by Mr. Arvind Kejriwal and others. It emerged out of the India Against Corruption movement and focuses on anti-corruption measures, decentralization of power, and populism. Arvind Kejriwal and Manish Sisodia are among the prominent leaders of the party.",
      image: "https://www.livelaw.in/h-upload/images/750x450_aap.jpg",
    },
    {
      name: "All India Majlis-e-Ittehad-ul-Muslimeen (AIMIM)",
      leader: "Asaduddin Owaisi",
      foundingDate: "1927",
      ideologies: "Muslim Minority Interests, Social Justice, Secularism",
      keyLeaders: ["Asaduddin Owaisi"],
      details:
        "All India Majlis-e-Ittehad-ul-Muslimeen (AIMIM) was founded in 1927. The party primarily represents the Muslim minority interests and advocates for social justice and secularism. Asaduddin Owaisi is a prominent leader of the party.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/All_India_Majlis-e-Ittehadul_Muslimeen_logo.svg/270px-All_India_Majlis-e-Ittehadul_Muslimeen_logo.svg.png",
    },
    {
      name: "Nationalist Congress Party (NCP)",
      leader: "Sharad Pawar",
      foundingDate: "May 25, 1999",
      ideologies: "Federalism, Secularism, Social Democracy",
      keyLeaders: ["Sharad Pawar", "Praful Patel"],
      details:
        "Nationalist Congress Party (NCP) was founded on May 25, 1999. The party advocates for federalism, secularism, and social democracy. Sharad Pawar and Praful Patel are among the key leaders of the party.",
      image:
        "https://www.designerpeople.com/wp-content/uploads/2018/08/Free-Vector-EPS-Logo-Download-NCP.jpg",
    },
    // Add more parties here
  ];

  return (
    <div className="h-full p-4 dark:bg-gray-700 bg-gray-200 pt-12">
      <div className="max-w-4xl mx-auto">
        {parties.map((party, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-sm flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mb-4 flex-col sm:flex-row"
          >
            <div className="p-4">
              <img
                className="w-72 m-8 mr-20  h-48 sm:w-32 sm:h-32 object-cover rounded-xl mb-4"
                src={party.image}
                alt={party.name}
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {party.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {party.leader}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {party.foundingDate}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {party.ideologies}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Key Leaders: {party.keyLeaders.join(", ")}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {party.details}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                National Party
              </p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Party;
