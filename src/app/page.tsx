import Link from "next/link";
import Image from "next/image";

const FitTravel = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-32 py-20 items-center">
      <div className="max-w-lg text-center lg:text-left">
        <h3 className="text-lg text-gray-500 font-semibold">
          Welcome to FitTravel
        </h3>
        <h2 className="text-6xl font-fjalla font-bold text-gray-900 mt-4">
          Your fitness journey starts here!
        </h2>
        <h4 className="text-gray-600 text-base mt-6">
          Find gyms worldwide, plan workouts on the go, and stay fit wherever
          you travel. With FitTravel, your fitness and adventures go hand in
          hand!
        </h4>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            className="px-12 py-6 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700"
            href="/map"
          >
            Explore
          </Link>
          <Link
            className="px-12 py-6 bg-white border border-gray-300 text-gray-700 font-medium shadow hover:bg-gray-100"
            href="/login"
          >
            Join now
          </Link>
        </div>
      </div>

      <div className="mt-12 lg:mt-0">
        <Image
          src="/home-picture.jpg"
          alt="Home picture"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default FitTravel;
