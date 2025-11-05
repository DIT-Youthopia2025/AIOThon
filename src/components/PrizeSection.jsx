import PrizeCard from './PrizeCard';
import './prize.css';
const PrizeSection = () => {

    return (
        <section className="text-center">
            <h1 className="text-5xl text-white font-bold font-[Inter] pb-7">PRIZES</h1>
            <p className="text-white font-[Inter] sm:text-sm lg:text-3xl italic mb-10">
                WE HAVE AN AMAZING PRIZE POOL FOR THE MOST INNOVATIVE AND WELL-EXECUTED PROJECTS!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 justify-items-center max-w-5xl mx-auto">
                {/* Row 1 — Centered First Prize */}
                <div className="md:col-span-3 flex justify-center">
                    <PrizeCard title="FIRST PRIZE" amount="Rs. 1,70,000" />
                </div>

                {/* Row 2 — Second, Third, 4th–10th */}
                <div className="flex flex-col md:flex-row md:col-span-3 justify-center gap-10 lg:gap-100">
                    <PrizeCard title="SECOND PRIZE" amount="Rs. 1,20,000" />
                    <PrizeCard title="THIRD PRIZE" amount="Rs. 75,000" />

                </div>
                <div className="md:col-span-3 flex justify-center ">
                    <PrizeCard title="4TH–10TH PRIZE" amount="Rs. 20,000 EACH" />
                </div>
            </div>
        </section>
    );
};

export default PrizeSection;