export default function ShivShaktiAutomobilesWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Premium Navbar + Hero Section */}
      {/* Ecommerce Categories */}
<section className="px-6 py-16 md:px-16 bg-black">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <h2 className="text-5xl font-black text-red-500 uppercase tracking-wide">
        Shop By Category
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        Premium automobile accessories & spare parts.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          title: "Helmets",
          image:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
        },

        {
          title: "LED Lights",
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        },

        {
          title: "Engine Oil",
          image:
            "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
        },

        {
          title: "Accessories",
          image:
            "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1200&auto=format&fit=crop",
        },

      ].map((item, i) => (

        <div
          key={i}
          className="group relative overflow-hidden rounded-[30px] border border-red-900/30 shadow-[0_0_40px_rgba(255,0,0,0.12)] hover:-translate-y-3 transition duration-500"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-6">

            <div>

              <h3 className="text-3xl font-black text-white uppercase">
                {item.title}
              </h3>

              <button className="mt-4 bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl font-bold">
                Shop Now
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      
      <section className="relative overflow-hidden min-h-screen bg-black text-white border-b border-red-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-red-950/70"></div>

        <nav className="relative z-20 flex items-center justify-between px-6 md:px-16 py-5 border-b border-red-900/30 backdrop-blur-xl bg-black/50 shadow-2xl">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
              <span className="text-white">SHIV </span>
              <span className="text-red-500">SHAKTI</span>
            </h1>
            <p className="text-gray-400 text-sm tracking-[4px]">
              AUTOMOBILES
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="#" className="hover:text-red-500 transition">HOME</a>
            <a href="#" className="hover:text-red-500 transition">ABOUT</a>
            <a href="#" className="hover:text-red-500 transition">STORE</a>
            <a href="#" className="hover:text-red-500 transition">GALLERY</a>
            <a href="#" className="hover:text-red-500 transition">CONTACT</a>
          </div>

          <a
            href="https://wa.me/919413004652"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            WhatsApp Us
          </a>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20 md:py-28">
          <div>
            <p className="text-red-500 tracking-[3px] uppercase font-semibold mb-5">
              Your Trust, Our Service
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-none uppercase tracking-tight">
              Shiv Shakti
              <span className="block text-red-500 text-3xl md:text-5xl mt-2">Automobiles</span>
            </h1>

            <p className="mt-8 text-2xl text-gray-200 font-medium">
               Accessories
            </p>

            <p className="mt-4 text-xl text-gray-400">
              बेहतरीन काम, भरोसेमंद सेवा
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <a
                href="tel:+919413004652"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919413004652"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition px-8 py-4 rounded-2xl font-bold"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-red-600/20 blur-[120px] rounded-full"></div>

            <div className="relative w-[420px] h-[420px] rounded-full border-4 border-yellow-500/40 bg-gradient-to-br from-black via-red-950 to-black shadow-[0_0_60px_rgba(255,0,0,0.45)] flex flex-col items-center justify-center">
              <div className="text-8xl font-black text-yellow-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                SS
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-4xl font-black tracking-wide uppercase">
                  <span className="text-white">Shiv Shakti</span>
                </h2>
                <p className="text-red-500 text-xl tracking-[6px] mt-2 uppercase">
                  Automobiles
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-14">
          <div className="grid md:grid-cols-5 gap-5 bg-black/70 backdrop-blur-2xl border border-red-900/30 rounded-[30px] p-8 shadow-[0_0_40px_rgba(255,0,0,0.15)]">
            {[
              'Best Quality Parts',
              'Expert Mechanics',
              'Trusted Service',
              'Quick & Reliable',
              'Best Prices',
            ].map((item, i) => (
              <div
                key={i}
                className="text-center border-r last:border-none border-gray-800"
              >
                <h3 className="text-red-500 font-bold text-lg">{item}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Premium automobile solutions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 md:px-16 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-[32px] border border-red-900/40 shadow-[0_0_35px_rgba(255,0,0,0.18)] group">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1400&auto=format&fit=crop"
              alt="Shiv Shakti Automobiles Garage"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            <div className="absolute top-6 left-6">
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                <span className="text-white">Shiv </span>
                <span className="text-red-500">Shakti</span>
              </h3>
              <p className="text-gray-300 tracking-[4px] text-sm mt-2">
                AUTOMOBILES
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-500">
              About Us / हमारे बारे में
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
               Shiv Shakti Automobiles itawa kota, Rajasthan में स्थित एक भरोसेमंद
               automobile service and parts center है। हम ग्राहकों को
                high-quality spare parts, professional vehicle repairing
               और premium accessories उपलब्ध कराते हैं।
</p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              With modern tools, skilled mechanics and trusted service,
              Shiv Shakti Automobiles has become a reliable name for
              automobile solutions in Itawa.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              We focus on quality service, customer satisfaction and modern
              automotive solutions for every vehicle owner.
            </p>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="px-6 py-20 md:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-5xl font-black text-red-500 uppercase tracking-wide">
                Our Store
              </h2>
              <p className="text-gray-400 mt-3 text-lg">
                Premium automobile parts & accessories.
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-bold shadow-xl">
              View All Products
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Premium Helmet',
                price: '₹1,499',
                image:
                  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'LED Headlight',
                price: '₹999',
                image:
                  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Bike Gloves',
                price: '₹699',
                image:
                  'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Engine Oil',
                price: '₹549',
                image:
                  'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-black to-gray-900 border border-red-900/40 rounded-[28px] overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.12)] hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {product.name}
                  </h3>

                  <p className="text-red-500 text-2xl font-black mt-3">
                    {product.price}
                  </p>

                  <button className="mt-5 w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-2xl font-bold text-lg shadow-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:px-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-14">
            Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.financialexpressdigital.com/2020/05/Hero-Passion-Pro-660.jpg?w=660',
              'https://images.news18.com/ibnkhabar/uploads/2024/01/Pulsar-125-Image-2024-01-54a64ba8ed3f6167b86c09cd01384415.jpg?im=Resize,width=807,aspect=fit,type=normal',
              'https://cdn.bikedekho.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor69ba806bcfb9f.jpg?tr=w-300',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                className="rounded-[28px] border border-red-900/30 shadow-[0_0_25px_rgba(255,0,0,0.15)] hover:scale-105 transition duration-500 h-72 w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service History Section */}
      <section className="px-6 py-20 md:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black text-red-500 uppercase tracking-wide">
              Service History
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Trusted by hundreds of happy customers with professional automobile services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '1200+',
                title: 'Vehicles Serviced',
                desc: 'Professional repair and servicing completed successfully.',
              },
              {
                number: '850+',
                title: 'Happy Customers',
                desc: 'Trusted by customers across Kota & nearby areas.',
              },
              {
                number: '15+ Years',
                title: 'Experience',
                desc: 'Experienced mechanics with modern automobile knowledge.',
              },
              {
                number: '24*7',
                title: 'Customer Support',
                desc: 'Quick support and instant response for every customer.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-black to-gray-900 border border-red-900/40 rounded-[28px] p-8 text-center shadow-[0_0_30px_rgba(255,0,0,0.12)] hover:-translate-y-3 transition duration-500"
              >
                <h3 className="text-5xl font-black text-red-500">
                  {item.number}
                </h3>

                <h4 className="text-2xl font-bold text-white mt-5">
                  {item.title}
                </h4>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-950/40 to-black border border-red-900/30 rounded-[32px] p-10 text-center shadow-[0_0_40px_rgba(255,0,0,0.15)]">
            <h3 className="text-4xl font-black text-white uppercase tracking-wide">
              Why Customers Trust Shiv Shakti Automobiles?
            </h3>

            <p className="text-gray-300 text-lg mt-6 max-w-4xl mx-auto leading-relaxed">
              We provide genuine spare parts, expert vehicle repair, transparent pricing and reliable customer support. Our goal is to deliver premium automobile solutions with complete customer satisfaction and trusted service.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-20 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-14">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Excellent service and genuine parts. Highly recommended!',
              'Very professional repairing work and affordable pricing.',
              'Best automobile accessories shop with amazing support.',
            ].map((review, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-black to-gray-900 rounded-[28px] p-8 border border-red-900/30 shadow-[0_0_25px_rgba(255,0,0,0.12)]"
              >
                <p className="text-gray-300 italic">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 md:px-16 bg-gradient-to-br from-red-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-lg text-gray-200 mb-10">
            For Accessories — Contact Shiv Shakti Automobiles.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-black/40 p-6 rounded-3xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3 text-red-400">Phone</h3>
              <p className="text-gray-300">+91 941300 4652</p>
            </div>

            <div className="bg-black/40 p-6 rounded-3xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3 text-red-400">Address</h3>
              <p className="text-gray-300">itawa kota, Rajasthan</p>
            </div>

            <div className="bg-black/40 p-6 rounded-3xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3 text-red-400">WhatsApp</h3>

             <a
              href="https://wa.me/919413004652"
               target="_blank"
               rel="noopener noreferrer"
             className="text-green-400 hover:text-green-300 transition text-lg"
            >
             Chat on WhatsApp
             </a>
              <p className="text-gray-300">Available 24×7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 border-t border-gray-800">
        <p className="text-gray-500">
          © 2026 Shiv Shakti Automobiles • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
