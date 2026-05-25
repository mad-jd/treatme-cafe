
import menuData from "../data/menuData"


function MenuPreview() {

  return (

    /*
      MENU SECTION
      This is where commercial value is shown
    */
    <section
      id="menu"
      className="py-28 px-6 bg-black"
    >


      {/* =========================
          SECTION HEADER
         ========================= */}

      <div className="text-center max-w-3xl mx-auto mb-20">


        <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-4">
          Our Menu
        </p>


        <h2 className="text-4xl md:text-6xl font-bold">
          Crafted With Love ☕
        </h2>


        <p className="text-gray-500 mt-6 leading-8">
          Every item is carefully prepared to give you a premium café experience
          in the heart of Bashundhara, Dhaka.
        </p>

      </div>



      {/* =========================
          MENU GRID
         ========================= */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">


        {menuData.map((item) => (

          <div

            key={item.id}

            className="group bg-[#111] rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300"
          >


            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={item.image}
                className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>



            {/* CONTENT */}
            <div className="p-6">


              {/* NAME + PRICE */}
              <div className="flex justify-between items-center mb-2">

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <span className="text-sm text-gray-400">
                  {item.price}
                </span>

              </div>



              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-6">
                {item.desc}
              </p>


              {/* BUTTON */}
              <button className="mt-6 w-full border border-white/20 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
                Order Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default MenuPreview