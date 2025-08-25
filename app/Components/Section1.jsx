import Link from "next/link";
import OneCardUseAnywhere from "./OneCardUseAnywhere";
import SecondCard from "./SecondCard";
function Section1() {
  return (
    <div>

      {/* Section 1 */}
      <div className="container text-center my-3">
        <h1 className="fw-bold">Shop By Category</h1>
        <p className="lead">Express your style with our standout collection—fashion meets sophistication.</p>
      </div>

      {/* Product Cards */}

      <div className="container gap-2 mx-auto my-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {/* Card 1 */}
          <Link className="text-decoration-none text-black" href="./T-shirtProduct">
            <SecondCard img="./Images/img4.png" Cloth="T-Shirts" />
          </Link>

          {/* Card 2 */}
          <Link className="text-decoration-none text-black" href="./CoatProduct">
            <SecondCard img="./Images/img1.png" Cloth="Coats" />
          </Link>

          {/* Card 3 */}
          <Link className="text-decoration-none text-black" href="./CropTopProduct">
            <SecondCard img="./Images/img2.png" Cloth="Crop-tops" />
          </Link>

          {/* Card 4 */}
          <Link className="text-decoration-none text-black" href="./SweatersProducts">
            <SecondCard img="./Images/img3.png" Cloth="Sweaters" />
          </Link>

          {/* Card 5 */}
          <Link className="text-decoration-none text-black" href="./HoodieProduct">
            <SecondCard img="https://m.media-amazon.com/images/I/71blMOjNVLL._UY1100_.jpg" Cloth="Hoodie" />
          </Link>

        </div>
      </div>

    </div>

  )
}

export default Section1