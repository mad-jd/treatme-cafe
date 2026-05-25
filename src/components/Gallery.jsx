function Gallery() {

  return (

    <section className="py-28 px-6 bg-[#111]">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="uppercase tracking-[8px] text-xs text-gray-400 mb-4">
          Our Moments
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Experience Treat ME
        </h2>

        <p className="text-gray-500 mt-6 leading-8">
          A glimpse into our cozy café atmosphere, handcrafted desserts,
          and premium coffee culture in Bashundhara.
        </p>

      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {[
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
          "https://images.unsplash.com/photo-1559628233-100c798642d4",
          "https://images.unsplash.com/photo-1511920170033-f8396924c348",
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        ].map((img, index) => (

          <div key={index} className="overflow-hidden rounded-2xl group">

            <img
              src={img}
              className="h-48 md:h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </div>

    </section>

  )
}

export default Gallery