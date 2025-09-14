import banner from "../../assets/hand-drawn-people-floating-background.png";

const products = [
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Sistem manajemen SDM berbasis web yang lengkap dan efisien untuk operasional perusahaan.",
    image: banner,
    link: "/services/web",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Manajemen Karyawan", "Penggajian Otomatis", "Laporan Real-time"]
  },
  {
    title: "Human Resource Managemnt System (HRMS)",
    description: "Kelola data karyawan, absensi, dan penggajian langsung dari perangkat mobile.",
    image: banner,
    link: "/services/mobile",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Absensi GPS", "Notifikasi Real-time", "Mobile-Friendly"]
  },
  {
    title: "Xignature",
    description: "Desain antarmuka modern dan ramah pengguna untuk pengalaman yang optimal.",
    image: banner,
    link: "/services/uiux",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "SEO Optimization",
    description: "Optimasi SEO untuk meningkatkan visibilitas bisnis Anda di mesin pencari.",
    image: banner,
    link: "/services/seo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ["Keyword Research", "Technical SEO", "Content Strategy"]
  }
];

export default function OurProduct() {
  return (
    <section id="products" className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-[#3775b2]">Products</span> 
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-[#3775b2] rounded-full opacity-80"></div>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className={`absolute -z-10 w-full h-full ${isEven ? '-left-4 -bottom-4' : '-right-4 -bottom-4'} bg-[#d80100]/10 rounded-xl`}></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto "
                  />
                </div>

                <div className="w-full md:w-1/2 bg-white p-12 h-full rounded-xl shadow-lg -mt-24 mb-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#3775b2] text-white">
                      {product.icon}
                    </div>
                    <span className="text-sm font-medium text-[#3775b2]">0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base sm:text-lg mb-6">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={product.link}
                    className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#3775b2] hover:bg-[#587795] transition-colors shadow-sm"
                  >
                    Pelajari Selengkapnya
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}