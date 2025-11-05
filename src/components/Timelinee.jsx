import React from "react";

export default function Timelinee() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative"
      style={{ fontFamily: "'Home Video', sans-serif" }}
    >
      {/* TIMELINE Heading */}
      <h1 className="absolute top-25 italictext-4xl md:text-5xl tracking-widest text-center">
        TIMELINE
      </h1>

      {/* Timeline Line */}
      <div className="relative rotate-90 sm:rotate-0 w-11/12 md:w-3/4 h-1 bg-cyan-400 mt-0">

        {/* Event 1 */}
        <div className="absolute left-[5%] top-[-172px] flex flex-col items-center">
          <div className="text-sm">REGISTRATION</div>
          <div className="text-sm">OPEN</div>
          <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="w-0 h-30 border-dashed border-l-2 border-white"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="text-xs mt-2 text-white-300">NOVEMBER 25,2025</div>
        </div>

        {/* Event 2 */}
        <div className="absolute left-[30%] top-[-28px] flex flex-col items-center">
          <div className="text-xs mt-1 text-white-300">NOVEMBER 10,2025</div>
          <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-white -mt-[-5px]"></div>
          <div className="w-0 h-30 border-dashed border-l-2 border-white"></div>
          <div>
            <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white -mt-[2px]"></div>
          </div>
          <div className="text-sm">WORKSHOPS</div>
          <div className="text-sm">&</div>
          <div className="text-sm">MENTORING</div>
        </div>

        {/* Event 3 */}
        <div className="absolute left-[55%] top-[-188px] flex flex-col items-center">
          <div className="text-center mt-4">
            <div className="text-sm">HACKATHON</div>
            <div className="text-sm">DAY</div>
          </div>
          <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="w-0 h-30 border-dashed border-l-2 border-white"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="text-xs mt-2 text-white-300">NOVEMBER 15-16,2025</div>
        </div>

        {/* Event 4 */}
        <div className="absolute left-[75%] top-[-28px] flex flex-col items-center">
          <div className="text-xs mt-1 text-white-300">NOVEMBER 16,2025</div>
          <div className="pt-2">
            <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-white -mt-[2px]"></div>
          </div>
          <div className="w-0 h-30 border-dashed border-l-2 border-white mt-0"></div>
          <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white mb-1"></div>
          <div className="text-center">
            <div className="text-sm">PROJECT</div>
            <div className="text-sm">SUBMISSION</div>
          </div>
        </div>

        {/* Event 5 */}
        <div className="absolute left-[95%] top-[-209px] flex flex-col items-center">
          <div className="text-center mt-4">
            <div className="text-sm">JUDGING</div>
            <div className="text-sm">& AWARDS</div>
          </div>
          <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="w-0 h-30 border-dashed border-l-2 border-white"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-white -mt-[2px]"></div>
          <div className="text-xs mt-2 text-white-300">NOVEMBER 16,2025</div>
        </div>
      </div>
    </div>
  );
}




