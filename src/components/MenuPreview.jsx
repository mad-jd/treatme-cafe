import { useEffect, useState } from "react"


function MenuPreview() {

  // State to store menu from backend
  const [menu, setMenu] = useState([])

  /*
    useEffect runs when component loads
    We fetch data from backend API here
  */
  useEffect(() => {

    fetch("https://your-backend.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log("Error fetching menu:", err))

  }, [])


  return (

    <section id="menu" className="py-28 px-6 bg-black">


      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">

        <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-4">
          Our Menu
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Live Menu (From Backend)
        </h2>

        <p className="text-gray-500 mt-6 leading-8">
          This data is now coming from your Node.js server 🚀
        </p>

      </div>


      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">


        {menu.map((item) => (

          <div
            key={item.id}
            className="bg-[#111] rounded-3xl p-6 text-center hover:scale-105 transition"
          >

            <h3 className="text-2xl font-semibold mb-2">
              {item.name}
            </h3>

            <p className="text-gray-400 text-lg">
              ৳ {item.price}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default MenuPreview