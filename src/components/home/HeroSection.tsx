function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:h-screen md:h-screen min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-50 py-12 px-4 md:px-8">
        <p className="text-lg md:text-xl text-gray-700  font-medium mb-2">
          Welcome To
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight text-center drop-shadow-sm">
          <span
            style={{
              background:
                "linear-gradient(90deg, #3775b2 40%, #ffb200 60%, #d80100 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            EnergyX 369 Indonesia
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-700 text-center max-w-2xl mb-4 md:mb-6">
          Your one-stop solution for innovative energy management systems and
          web development services.
        </p>
      </div>
    </>
  );
}
export default HeroSection;
