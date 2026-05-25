import { useState } from "react"


function Navbar() {

  /*
    useState is a React Hook

    It lets components store changing data.

    Here:
    mobileMenu = current menu state
    setMobileMenu = function to change it

    false = menu closed initially
  */
  const [mobileMenu, setMobileMenu] = useState(false)



  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">


      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">
          Treat ME
        </h1>



        {/* =========================
            DESKTOP MENU
           ========================= */}

        {/*
          hidden md:flex

          hidden = hidden on mobile
          md:flex = visible on medium screens and larger
        */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">


          <li>
            <a
              href="#home"
              className="hover:text-gray-300 transition"
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#menu"
              className="hover:text-gray-300 transition"
            >
              Menu
            </a>
          </li>


          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition"
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 transition"
            >
              Contact
            </a>
          </li>

        </ul>



        {/* =========================
            MOBILE MENU BUTTON
           ========================= */}

        {/*
          md:hidden

          means:
          hide this button on desktop
        */}
        <button

          /*
            Toggle menu open/close

            !mobileMenu means:
            opposite of current state
          */
          onClick={() => setMobileMenu(!mobileMenu)}

          className="md:hidden text-3xl"
        >

          {/* 
            If menu is open → show X
            Otherwise → show ☰
          */}
          {mobileMenu ? "✕" : "☰"}

        </button>

      </div>



      {/* =========================
          MOBILE MENU OVERLAY
         ========================= */}

      {/*
        Conditional Rendering

        ONLY show this if:
        mobileMenu === true
      */}
      {mobileMenu && (

        <div className="md:hidden bg-black/95 backdrop-blur-lg">


          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center justify-center gap-8 py-10 text-lg uppercase tracking-widest">


            <li>
              <a
                href="#home"

                /*
                  Close menu after clicking
                */
                onClick={() => setMobileMenu(false)}

                className="hover:text-gray-300 transition"
              >
                Home
              </a>
            </li>


            <li>
              <a
                href="#menu"
                onClick={() => setMobileMenu(false)}
                className="hover:text-gray-300 transition"
              >
                Menu
              </a>
            </li>


            <li>
              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
                className="hover:text-gray-300 transition"
              >
                About
              </a>
            </li>


            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>

  )
}

export default Navbar