
const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* In Progress */}
            <div className="relative overflow-hidden rounded-lg p-10 text-center text-white
      bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400">

                {/* Wave pattern */}
                <div className=" bg-[url()] ">
                    <p className="text-lg opacity-90">In-Progress</p>
                    <h2 className="text-4xl font-bold">0</h2>
                </div>

                <p className="relative text-lg opacity-90">In-Progress</p>
                <h2 className="relative text-4xl font-bold">0</h2>
            </div>

            {/* Resolved */}
            <div className="relative overflow-hidden rounded-lg p-10 text-center text-white
      bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600">

                {/* Wave pattern */}
                <div className="absolute inset-0 opacity-20">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 500 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 150 Q150 50 300 120 T600 100" stroke="white" strokeWidth="1" />
                        <path d="M0 120 Q150 20 300 90 T600 70" stroke="white" strokeWidth="1" />
                        <path d="M0 180 Q150 80 300 150 T600 130" stroke="white" strokeWidth="1" />
                    </svg>
                </div>

                <p className="relative text-lg opacity-90">Resolved</p>
                <h2 className="relative text-4xl font-bold">0</h2>
            </div>

        </div>
    );
};

export default Banner;