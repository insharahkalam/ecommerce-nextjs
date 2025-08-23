import Link from "next/link";
function Section1() {
  return (
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

            <Link className="text-decoration-none text-black" href="./Products">
              <img
                src="./Images/img4.png"
                alt="Product 1"
                className="mx-auto rounded-2xl w-full max-w-[250px]"
              />
            </Link>


            <h6 className="mt-3 text-lg font-bold">T-shirt</h6>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <Link className="text-decoration-none text-black" href="./Products">
              <img
                src="./Images/img1.png"
                alt="Product 1"
                className="mx-auto rounded-2xl w-full max-w-[250px]"
              />
            </Link>
            <h6 className="mt-3 text-lg font-bold">Blazers</h6>
          </div>

          {/* Card 3 */}
          <div className="text-center">
             <Link className="text-decoration-none text-black" href="./Products">
              <img
                src="./Images/img2.png"
                alt="Product 1"
                className="mx-auto rounded-2xl w-full max-w-[250px]"
              />
            </Link>
            <h6 className="mt-3 text-lg font-bold">Crop-top</h6>
          </div>

          {/* Card 4 */}
          <div className="text-center">
           <Link className="text-decoration-none text-black" href="./Products">
              <img
                src="./Images/img3.png"
                alt="Product 1"
                className="mx-auto rounded-2xl w-full max-w-[250px]"
              />
            </Link>
            <h6 className="mt-3 text-lg font-bold">Sweaters</h6>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Section1