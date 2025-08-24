import OneCardUseAnywhere from "./OneCardUseAnywhere";
import OptionColor from "./OptionColor";
import Stars from "./Stars";


export default function Section5() {
  return (
    <div>
      <div className="container mt-5 text-center">
        <h2 className="fw-bold">Popular Picks</h2>
        <p className="lead">Unmatched design—superior performance and customer satisfaction in one.</p>
      </div>


      <div className="container my-5">
        <div className="row g-4">
          
          {/* Product 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img12.png" Cloth="Long belted sweater" price="250.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img13.png" Cloth="Cropped denim shirt" price="250.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img14.png" Cloth="Waistcoat with pockets" price="250.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="./Images/img15.png" Cloth="Soft-touch vest sweater" price="250.00" stars={<Stars />}
              colorOption={<OptionColor />} btn="Add To Cart"/>
          </div>
        </div>
      </div>

    </div>
  )
}

