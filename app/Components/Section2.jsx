function Section2(){
    return(
        <div>

 {/* Section 2 */}
      <div className="container flex flex-wrap gap-3 w-full my-5">
        <div className="relative h-full w-full md:w-[48%]">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_1.webp?v=1748226426&width=1100"
            alt="Card 1"
            width={550}
            height={350}
            className="rounded-3 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
            <p className="text-white text-lg mt-4 fs-6">SAVE 30—50% BLAZES</p>
            <h2 className="text-white text-3xl font-bold mb-4 px-4 rounded">Colour Spotlight</h2>
            <button className="rounded-5 bg-white text-black px-4 py-2 fw-bold">Shop Now</button>
          </div>
        </div>

        <div className="relative h-full w-full md:w-[48%]">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_2.webp?v=1748226426&width=720"
            alt="Card 2"
            width={550}
            height={350}
            className="rounded-3 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
            <p className="text-white text-lg mt-4 fs-6">LIMITED TIME ONLY</p>
            <h2 className="text-white text-3xl font-bold mb-4 px-4 rounded">Confident Looks</h2>
            <button className="rounded-5 bg-white text-black px-4 py-2 fw-bold">Shop Now</button>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Section2