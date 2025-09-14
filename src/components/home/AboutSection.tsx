import VisiMisiSection from "./VisiMisiSection";

function AboutSection() {
  return (
    <>
    <div id="about">
      <section  className="bg-gray-50 py-16 px-4 md:px-8 lg:px-24 flex items-center justify-center  ">
        <div className="max-w-6xl text-start mt-12">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900">About <span className=" text-[#3775b2]">EnergyX</span></h1>
          <p className="lg:text-xl text-gray-900 mb-4 md:text-md ">
            PT. EnergyX 369 Indonesia, established in 2018, is a dedicated
            service-based company with a strong mission to deliver exceptional
            customer satisfaction. We specialize in serving corporate and
            government clients across three main areas: Information Technology
            (IT) Services, Professional Training, and Human Resource (HR)
            Outsourcing. Our leadership team is composed of a new generation of
            technocrats and management professionals with over 20 years of
            experience in diverse industries. Their proven track record in
            client service excellence has earned the trust and recognition of
            our partners and customers.
          </p>
          <p className="lg:text-xl text-gray-900 sm:text-sm">
            The EnergyX logo symbolizes our core business pillars: IT Services –
            represented by blue, reflecting innovation and technology. Training
            – represented by red, reflecting structured process and growth. HR
            Outsourcing – represented by orange, reflecting people and
            collaboration. Driven by innovation and operational excellence,
            EnergyX is committed to providing tailor-made solutions that empower
            organizations to achieve their strategic goals efficiently and
            sustainably.
          </p>
        </div>
      </section>
      <VisiMisiSection />
        </div>

    </>
  );
}

export default AboutSection;
