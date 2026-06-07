import { useState, useEffect } from "react";

export default function Achievements() {
  const [flippedCard, setFlippedCard] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/ach`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayers(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const dumplayers = [
    {
      name: "Nilesh Seth",  
      image: "/players/nilesh.jpg",
      achievements: [
        "International Player",
        "U-19 North Zone Winner",
        "Best BAI Rank: 15",
        "SGFI National Winner",
        "Senior State Champion"
      ],
    },
    {
      name: "Dhruv Dutta",
      image: "/players/dhruv.jpg",
      achievements: [
        "International Player",
        "North Zone Champion",
        "SGFI National Winner",
      ],
    },

    {
      name: "Seema Bhatia",
      image: "/players/seema.jpg",
      achievements: [
        "International Silver Medalist",
        "Punjab Champion",
      ],
    },
    {
      name: "Sahib",
      image: "/players/sahib.jpg",
      achievements: [
        "Best BAI Rank: 18",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Samaira Arora",
      image: "/players/samaira.jpg",
      achievements: [
        "Best BAI Rank: 18",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Kritagya Arora",
      image: "/players/kritagya.jpg",
      achievements: [
        "Best BAI Rank: 20",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Akhil Arora",
      image: "/players/akhil.jpg",
      achievements: [
        "Best BAI Rank: 19",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Aradhya Singhh",
      image: "/players/aradhya.jpg",
      achievements: [
        "Best BAI Rank: 24",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Kaivalya Sood",
      image: "/players/kaivalya.jpg",
      achievements: ["State Runner-Up"],
    },
    {
      name: "Aarav Porwal",
      image: "/players/aarav.jpg",
      achievements: ["State Runner-Up"],
    },
    {
      name: "Sonakshi",
      image: "/players/sonakshi.jpg",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Mrinal Khurana",
      image: "/players/mrinal.jpg",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Ananya Sharma",
      image: "/players/ananya.jpg",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Toshan Mehra",
      image: "/players/toshan.jpg",
      achievements: ["State Second Runner-Up"],
    },
  ];


  return (

    <section className="relative min-h-screen overflow-hidden px-4 md:px-6 pt-32 pb-16">
      {/* Background Rings */}
      <div className="absolute top-[5%] left-[10%] md:left-[20%] h-[220px] w-[220px] md:h-[420px] md:w-[420px] rounded-full border-[30px] md:border-[55px] border-blue-500/15 blur-[20px]" />

      <div className="absolute top-[25%] left-[15%] md:left-[30%] h-[280px] w-[280px] md:h-[520px] md:w-[520px] rounded-full border-[35px] md:border-[65px] border-blue-600/20 blur-[25px]" />

      <div className="absolute top-[5%] left-[45%] h-[120px] w-[120px] md:h-[220px] md:w-[220px] rounded-full border-[20px] md:border-[45px] border-blue-400/15 blur-[15px]" />

      <div className="absolute bottom-[5%] right-[0%] md:right-[5%] h-[180px] w-[180px] md:h-[350px] md:w-[350px] rounded-full border-[25px] md:border-[50px] border-blue-500/10 blur-[20px]" />

      <div className="absolute top-[10%] right-[-10%] md:right-[-5%] h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full border-[20px] md:border-[40px] border-blue-400/10 blur-[15px]" />

      <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full border-[20px] md:border-[40px] border-blue-400/20 blur-md" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-6 md:p-10 shadow-xl">
          <h1 className="mb-10 text-center text-3xl md:text-5xl font-bold text-[#0b3046]">
            Achievements
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {players.map((player, index) => (
    <div
      key={player.name}
      onClick={() =>
        setFlippedCard(flippedCard === index ? null : index)
      }
      className="relative h-[420px] cursor-pointer"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flippedCard === index
            ? "[transform:rotateY(180deg)]"
            : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-lg [backface-visibility:hidden]">
          <h2 className="mb-4 text-2xl font-bold text-[#0b3046]">
            {player.name}
          </h2>

          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Achievements
          </h3>

          <ul className="space-y-2 text-slate-700">
            {player.achievements.map((achievement) => (
              <li key={achievement}>
                • {achievement}
              </li>
            ))}
          </ul>

          <p className="absolute bottom-6 left-6 text-xs text-slate-400">
            Tap to view photo
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-[28px] border border-white/20 bg-white p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center">
            <img
              src={player.image}
              alt={player.name}
              className="h-72 w-56 rounded-2xl object-cover shadow-lg"
            />

            <h2 className="mt-5 text-2xl font-bold text-[#0b3046]">
              {player.name}
            </h2>

            <p className="mt-2 text-slate-500">
              Tap again to go back
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

{/* And Many More Section */}
<div className="mt-20 text-center">
  <h2 className="text-5xl font-bold text-[#0b3046]">
    And Many More Champions...
  </h2>
</div>
<footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
</div>
</div>
</section>
);
}