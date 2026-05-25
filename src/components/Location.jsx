
function Location() {

  return (

    /*
      LOCATION SECTION
      Builds trust + real-world presence
    */
    <section className="py-28 px-6 bg-[#111]">


      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-4">
          Visit Us
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Find Treat ME
        </h2>

        <p className="text-gray-500 mt-6 leading-8">
          Located in Bashundhara, Dhaka — your cozy destination for premium coffee
          and desserts.
        </p>

      </div>



      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        {/* Map Placeholder */}
        <div className="rounded-3xl overflow-hidden h-[400px] bg-black border border-white/10 flex items-center justify-center">

          <p className="text-gray-500">
            Map will be embedded here
          </p>

        </div>



        {/* Address Info */}
        <div>

          <h3 className="text-3xl font-semibold mb-6">
            Treat ME Café & Bakeshop
          </h3>

          <p className="text-gray-400 leading-8 mb-6">

            Bashundhara Residential Area,<br />
            Dhaka, Bangladesh

          </p>

          <p className="text-gray-500 leading-8 mb-10">

            Open daily from 10:00 AM – 10:00 PM<br />
            Perfect place for coffee dates, study sessions, and desserts.

          </p>



          {/* Button */}
          <button className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition">

            Get Directions

          </button>

        </div>

      </div>

    </section>

  )
}

export default Location