import Link from "next/link";
import OneCardUseAnywhere from "./OneCardUseAnywhere";
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
          <OneCardUseAnywhere img="./Images/img4.png" Cloth="T-Shirt" />

          {/* Card 2 */}
          <OneCardUseAnywhere img="./Images/img1.png" Cloth="Blazers" />

          {/* Card 3 */}
          <OneCardUseAnywhere img="./Images/img2.png" Cloth="Crop-top" />

          {/* Card 4 */}
          <OneCardUseAnywhere img="./Images/img3.png" Cloth="Sweaters" />

        </div>
      </div>
    </div>

  )
}

export default Section1