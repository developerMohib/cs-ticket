import bgImage from "../assets/vector1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      
      {/* In Progress */}
      <div className="relative overflow-hidden rounded-xl p-10 text-center text-white 
        bg-gradient-to-br from-[#6338f1] via-[#8253ff] to-[#a361ff]">
        
        {/* Left Side Vector */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
        />
        
        {/* Right Side Vector (Flipped) */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-contain scale-x-[-1]"
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
        />

        <div className="relative z-10">
          <p className="text-xl font-medium opacity-90">In-Progress</p>
          <h2 className="text-6xl font-bold mt-2">0</h2>
        </div>
      </div>

      {/* Resolved */}
      <div className="relative overflow-hidden rounded-xl p-10 text-center text-white 
        bg-gradient-to-br from-[#4ade80] via-[#22c55e] to-[#06846e]">
        
        {/* Left Side Vector */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
        />
        
        {/* Right Side Vector (Flipped) */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-contain scale-x-[-1]"
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
        />

        <div className="relative z-10">
          <p className="text-xl font-medium opacity-90">Resolved</p>
          <h2 className="text-6xl font-bold mt-2">0</h2>
        </div>
      </div>

    </div>
  );
};

export default Banner;