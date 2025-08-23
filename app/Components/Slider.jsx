function Slider(){
    return(
        <div>
        
       {/* Slider */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]">
        <img
          src="./Images/slider.png"
          alt="Slider"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/20">
          <div className="text-start p-4 sm:p-6 md:p-12 lg:p-20 max-w-xl">
            {/* Subtitle */}
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2">
              MODERN EVERYDAY LOOKS
            </p>

            {/* Title */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4">
              Soft Comfort <br /> Bold Looks
            </h1>

            {/* Button */}
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-5 font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Slider