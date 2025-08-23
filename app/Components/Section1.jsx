function Section1(){
    return(
        <div>

  {/* Section 1 */}
      <div className="container text-center my-3">
        <h1 className="fw-bold">Shop By Category</h1>
        <p className="lead">Express your style with our standout collection—fashion meets sophistication.</p>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="text-center">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972&width=480"
              alt="Product 1"
              className="mx-auto rounded-2xl w-full max-w-[250px]"
            />
            <h6 className="mt-3 text-lg font-bold">T-shirt</h6>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img
              src="./Images/product2.png"
              alt="Product 2"
              className="mx-auto rounded-2xl w-full max-w-[250px]"
            />
            <h6 className="mt-3 text-lg font-bold">Blazers</h6>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972&width=480"
              alt="Product 3"
              className="mx-auto rounded-2xl w-full max-w-[250px]"
            />
            <h6 className="mt-3 text-lg font-bold">Crop-top</h6>
          </div>

          {/* Card 4 */}
          <div className="text-center">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972&width=480"
              alt="Product 4"
              className="mx-auto rounded-2xl w-full max-w-[250px]"
            />
            <h6 className="mt-3 text-lg font-bold">Sweaters</h6>
          </div>

        </div>
      </div>

        </div>
    )
}

export default Section1