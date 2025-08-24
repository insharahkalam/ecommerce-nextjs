import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function SweaterProduct() {
  return (
    <div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img29.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img22.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>


          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img8.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img12.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>

          </div>


        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img21.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>


          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img20.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>


          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img23.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>


          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img6.png" Cloth="High neck jumper" price="1200.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>


          </div>


        </div>
      </div>

    </div>
  )
}

export default SweaterProduct