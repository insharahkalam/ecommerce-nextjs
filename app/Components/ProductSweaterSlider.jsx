function ProductSweaterSlider(){
    return(
        <div>
         <div className="relative w-full h-[70vh] sm:h-[40vh] md:h-[40vh] lg:h-[50vh]">
                <img
                    src="./Images/productSlider.png"
                    alt="Slider"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center align-items-center bg-black/20">
                    <div className="text-start  max-w-xl">
                        {/* Subtitle */}
                        <p className="text-white mb-0 text-sm text-center  ">
                            Home . Sweaters
                        </p>

                        {/* Title */}
                        <h2 className="text-white mt-2 mb-2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-0 leading-tight ">
                           Sweaters
                        </h2>

                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg">
                     Cozy and chic for any season.
                        </p>


                    </div>
                </div>
            </div>

<div className="container">
    <p className="fw-bold fs-5 text-center mt-4">There are 8 results in Crop-Top </p>
</div>
        </div>
    )
}

export default ProductSweaterSlider