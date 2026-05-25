function Featured() {

  return (

    /*
      ABOUT / FEATURED SECTION
    */
    <section
      id="about"
      className="relative py-28 px-6 bg-[#111] overflow-hidden"
    >


      {/* =========================
          BACKGROUND GLOW EFFECT
         ========================= */}

      {/*
        Decorative blurred circle
        adds depth/luxury feel
      */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />



      {/* =========================
          MAIN CONTENT CONTAINER
         ========================= */}

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">


        {/* =========================
            IMAGE SIDE
           ========================= */}

        <div className="relative">


          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"

            className="rounded-[30px] w-full h-[600px] object-cover shadow-2xl"
          />


          {/* Floating Experience Card */}
          <div

            className="absolute bottom-[-30px] right-[-20px] bg-black border border-white/10 backdrop-blur-lg px-8 py-6 rounded-3xl shadow-2xl"
          >

            <p className="text-4xl font-bold">
              5★
            </p>

            <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">
              Premium Experience
            </p>

          </div>

        </div>



        {/* =========================
            TEXT SIDE
           ========================= */}

        <div>


          {/* Small Label */}
          <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-6">

            Our Story

          </p>



          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl">

            Crafted Coffee &
            Artisan Desserts

          </h2>



          {/* Decorative Line */}
          <div className="w-24 h-[2px] bg-white mt-8 mb-8" />



          {/* Paragraph 1 */}
          <p className="text-gray-300 text-lg leading-9 mb-8">

            Treat ME was created to bring together premium coffee,
            handcrafted desserts, and a cozy modern café atmosphere
            inspired by luxury dessert bars and specialty coffee houses.

          </p>



          {/* Paragraph 2 */}
          <p className="text-gray-500 text-lg leading-9 mb-10">

            Every drink, dessert, and moment is designed to feel warm,
            elegant, and memorable — whether you're meeting friends,
            working remotely, or enjoying a quiet evening coffee.

          </p>



          {/* Feature Points */}
          <div className="grid sm:grid-cols-2 gap-6">


            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">

              <h3 className="text-xl font-semibold mb-2">
                Specialty Coffee
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Carefully crafted espresso, matcha, and signature drinks.
              </p>

            </div>



            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">

              <h3 className="text-xl font-semibold mb-2">
                Artisan Desserts
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Premium pastries, cookies, cakes, and indulgent treats.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Featured