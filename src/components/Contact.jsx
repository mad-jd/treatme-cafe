
function Contact() {

  return (

    /*
      CONTACT SECTION
      This is where customers connect with the business
    */
    <section id="contact" className="py-28 px-6 bg-black">


      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-4">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Get In Touch
        </h2>

        <p className="text-gray-500 mt-6 leading-8">
          Visit us in Bashundhara or send us a message for inquiries, bookings,
          or special orders.
        </p>

      </div>



      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-[#111] p-10 rounded-3xl">


        <div className="grid md:grid-cols-2 gap-6">


          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-black border border-white/10 rounded-xl outline-none"
          />


          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-black border border-white/10 rounded-xl outline-none"
          />

        </div>


        {/* Message */}
        <textarea
          placeholder="Your Message"
          className="w-full mt-6 p-4 bg-black border border-white/10 rounded-xl outline-none h-40"
        />


        {/* Button */}
        <button className="mt-6 w-full bg-white text-black py-4 uppercase tracking-widest hover:bg-gray-200 transition">

          Send Message

        </button>

      </div>

    </section>

  )
}

export default Contact