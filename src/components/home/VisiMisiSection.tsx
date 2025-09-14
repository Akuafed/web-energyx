function VisiMisiSection() {
  return (
    <>
      <section className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#3775b2]">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#3775b2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 13c5.25 0 9.5-4.25 9.5-8.5S17.25 4.5 12 4.5 2.5 8.75 2.5 13s4.25 8.5 9.5 8.5z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Visi</h2>
              </div>
              <p className="text-gray-600 pl-16">
                To become the leader in the field of IT Services, Training, HR
                Outsourcing
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#d80100]">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#d80100]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Misi</h2>
              </div>
              <p className="text-gray-600 pl-16 space-y-2 ">
                Our Mission is satify the customers with fulfillment of their
                expectations with the help of quality and prompt services. To
                achieve aggresive growth of the field of IT Services, Training,
                and HR Outsourcing
              </p>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#ffb200]">
  <div className="flex items-center mb-6">
    <div className="bg-yellow-100 p-3 rounded-full mr-4">
      <svg
        className="w-6 h-6 text-[#ffb200]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
    {[
      {
        title: "Client Focus",
        desc: "Bertindak jujur dan transparan dalam semua aspek bisnis",
      },
      {
        title: "Quality",
        desc: "Terus mencari cara baru untuk memberikan nilai lebih",
      },
      {
        title: "Experience",
        desc: "Berkomitmen pada kualitas terbaik dalam segala hal",
      },
    ].map((value, index) => (
      <div
        key={index}
        className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {value.title}
        </h3>
        <p className="text-gray-600 text-sm">{value.desc}</p>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
}

export default VisiMisiSection;
