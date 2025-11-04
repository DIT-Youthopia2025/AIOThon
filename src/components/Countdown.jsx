import React, { useEffect, useState } from "react";
import robot from "../assets/robot.png";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-11-20T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2a] to-black flex items-center justify-center text-center text-white px-6">
      <div className="flex flex-col items-center justify-center">
        {}
        <img src={robot} alt="Hackathon Logo" className="w-28 mb-6" />

        {}
        <h1 className="text-cyan-400 text-2xl sm:text-4xl font-extrabold font-['Press_Start_2P'] drop-shadow-[0_0_10px_#00eaff] mb-3">
          AIOTHON HACKATHON 2025
        </h1>

        {}
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-10">
          Build the future. Solve real-world problems. Win amazing prizes.
        </p>

        {}
        <div className="flex gap-4 mb-12">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-[#000033]/60 border-2 border-cyan-400 rounded-xl p-4 min-w-[80px] shadow-[0_0_10px_#00eaff33]"
            >
              <span className="block text-2xl font-bold text-cyan-400">
                {value}
              </span>
              <p className="text-gray-400 text-xs uppercase">{key}</p>
            </div>
          ))}
        </div>

        {}
        <section className="bg-[#14143c]/80 rounded-2xl p-8 max-w-2xl mb-12">
          <h2 className="text-cyan-400 text-xl font-semibold mb-3">
            About Hackathon
          </h2>
          <p className="text-gray-300 leading-relaxed uppercase">
            AIOTHON HACKATHON 2025 IS A 24-HOUR INVENTION MARATHON WHERE STUDENTS FROM ACROSS COUNTRY WILL COME TOGETHER TO BUILD, CODE, AND INNOVATE. THIS YEAR'S THEME IS<b>"AI and IoT COMBINATION FOR A SMARTER WORLD".</b>
          </p>
        </section>

        {}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "BUILD", desc: "CREATE A WEB OR MOBILE APPLICATION . A HARDWARE PROJECT OR A CREATIVE SOLUTION THAT ADDRESSES A CORE PROBLEM." },
            { title: "LEARN", desc: "ATTEND WORKSHOPS LED BY INDUSTRY EXPERTS AND GET MENTORSHIP TO LEVEL UP YOUR SKILLS." },
            {
              title: "CONNECT",
              desc: "NETWORK WITH PEER, MEET RECRUITERS AND CONNECT WIT TOP TECH COMPANIES.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#000040]/70 border border-cyan-400 rounded-xl p-6 w-48 hover:translate-y-[-6px] hover:shadow-[0_0_15px_#00eaff88] transition-all"
            >
              <h3 className="text-cyan-400 font-bold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
