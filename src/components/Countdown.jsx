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
    <div className="min-h-screen flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-10 py-10">
      <div className="flex flex-col items-center justify-center max-w-5xl">
        
        {/* Logo */}
        <img
          src={robot}
          alt="Hackathon Logo"
          className="w-32 sm:w-40 md:w-56 lg:w-64 mb-6 drop-shadow-[0_0_15px_#00eaff66]"
        />

        {/* Title */}
        <h1 className="text-cyan-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Press_Start_2P'] drop-shadow-[0_0_10px_#00eaff] mb-4 leading-tight">
          AIOTHON HACKATHON 2025
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg mb-8 sm:mb-10">
          Build the future. Solve real-world problems. Win amazing prizes.
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap scale-100 sm:scale-150 md:scale-180 lg:scale-200 mt-0 sm:mt-10 justify-center gap-3 sm:gap-5 mb-10 sm:mb-14">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-[#000033]/60 border border-cyan-400 rounded-xl p-3 sm:p-4 w-20 sm:w-24 shadow-[0_0_10px_#00eaff33]"
            >
              <span className="block text-lg sm:text-2xl font-bold text-cyan-400">
                {value}
              </span>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase">
                {key}
              </p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="bg-[#14143c]/80 rounded-2xl p-5 sm:p-8 max-w-xl mb-12">
          <h2 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-3">
            About Hackathon
          </h2>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm uppercase">
            AIOTHON HACKATHON 2025 IS A 24-HOUR INVENTION MARATHON WHERE STUDENTS
            FROM ACROSS THE COUNTRY COME TOGETHER TO BUILD, CODE, AND INNOVATE.
            THIS YEAR'S THEME IS <b>"AI AND IOT COMBINATION FOR A SMARTER WORLD".</b>
          </p>
        </section>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            {
              title: "BUILD",
              desc: "CREATE A WEB OR MOBILE APPLICATION, A HARDWARE PROJECT, OR A CREATIVE SOLUTION THAT ADDRESSES A CORE PROBLEM.",
            },
            {
              title: "LEARN",
              desc: "ATTEND WORKSHOPS LED BY INDUSTRY EXPERTS AND GET MENTORSHIP TO LEVEL UP YOUR SKILLS.",
            },
            {
              title: "CONNECT",
              desc: "NETWORK WITH PEERS, MEET RECRUITERS, AND CONNECT WITH TOP TECH COMPANIES.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#000040]/70 border border-cyan-400 rounded-xl p-4 sm:p-6 w-40 sm:w-52 md:w-56 hover:translate-y-[-5px] hover:shadow-[0_0_15px_#00eaff88] transition-all duration-300"
            >
              <h3 className="text-cyan-400 font-bold text-base sm:text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
