import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function Section3() {
  return (
    <div>

      {/* Section 3 */}
      <div className="container mt-5 text-center">
        <h2 className="fw-bold">Best Selling</h2>
        <p className="lead">Unmatched design—superior performance and customer satisfaction in one.</p>
      </div>

      <div className="container my-5">
        <div className="row g-4">


          {/* Product 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img8.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img6.png" Cloth="Winter Coat" price="$180.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img5.png" Cloth="Casual Shirt" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img7.png" Cloth="Basic Blazer" price="$225.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Section3