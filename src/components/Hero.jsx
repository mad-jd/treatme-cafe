function Hero() {

  return (

    /*
      Hero Section

      relative = allows absolute positioned children
      h-screen = full screen height
      overflow-hidden = prevents overflow issues
    */
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >


      {/* =========================
          BACKGROUND IMAGE
         ========================= */}

      <img

        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"

        /*
          absolute = remove from normal layout
          inset-0 = top/right/bottom/left all 0
          object-cover = fills section nicely
        */
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* =========================
          DARK OVERLAY
         ========================= */}

      {/*
        Creates cinematic dark effect

        bg-black/60 = 60% black opacity
      */}
      <div className="absolute inset-0 bg-black/60" />


      {/* =========================
          GRADIENT OVERLAY
         ========================= */}

      {/*
        Adds luxury cinematic lighting feel
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />



      {/* =========================
          HERO CONTENT
         ========================= */}

      {/*
        z-10 keeps content above overlays
      */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">


        {/* Small Label */}
        <p className="uppercase tracking-[8px] text-xs md:text-sm text-gray-300 mb-6">

          Bashundhara • Dhaka

        </p>



        {/* Main Heading */}
        <h1

          /*
            text sizes:
            mobile → 5xl
            tablet → 7xl
            desktop → 8xl
          */
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight max-w-5xl"
        >

          Treat ME ☕

        </h1>



        {/* Description */}
        <p className="mt-8 text-gray-300 text-base md:text-lg leading-8 max-w-2xl">

          Premium coffee, artisan desserts, cozy ambiance,
          and unforgettable café experiences crafted in
          Bashundhara, Dhaka.

        </p>



        {/* =========================
            BUTTONS
           ========================= */}

        <div className="flex flex-col sm:flex-row gap-4 mt-10">


          {/* Primary Button */}
          <a
            href="#menu"

            className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300"
          >

            Explore Menu

          </a>



          {/* Secondary Button */}
          <a
            href="#about"

            className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-gray-200 transition duration-300"
          >

            Our Story

          </a>

        </div>



        {/* =========================
            SCROLL INDICATOR
           ========================= */}

        <div className="absolute bottom-10 animate-bounce">


          <div className="text-3xl text-gray-300">
            ↓
          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero