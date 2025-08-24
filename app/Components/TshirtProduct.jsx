import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function TshirtProduct() {
  return (
    <div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img6.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img25.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img16.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img24.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>


        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img26.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>

          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img13.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>

          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img28.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img27.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>

          </div>


        </div>
      </div>

    </div>
  )
}

export default TshirtProduct