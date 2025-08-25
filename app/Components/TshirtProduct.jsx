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

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/Sfe65edf3b27b41189420e5429c527c622.jpg_400x400q75.avif" Cloth="2-in-1 Black and White Printed T-Shirt for Women Casual Princess and Galaxy" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S5bd8d6b9655f451b93b12897364c68aef.jpg_400x400q75.avif" Cloth="Full Sleeves T.Shirt for Girls and Women, Printed Round Neck Summer Wear, Beige, Available in Small to XXL" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/collect/sg/p/c9e802e7648b470f2ce0fc2770612869.png_400x400q75.avif" Cloth="Aua n Co Cat printed Half sleeves T-shirts for Women and Girls" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S8e3fa86162134e9b966fb21b6e3d602cs.jpg_400x400q75.avif" Cloth="Black half sleeves printed t shirt for women's" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
          </div>


        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/collect/sg/p/0ba0975d5eca6eb12900cd4dacd21022.png_400x400q75.avif" Cloth="Aua n Co Glorystar Women T Shirt For Girls and Women" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />

          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/812f949fd7455b02552886b3a8ac88a4.jpg_400x400q75.avif" Cloth="Women's Cotton Los Angeles Printed T-Shirt - Summer Round Neck Half-Sleeve" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />

          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/a1d5a7b2da92f34d9a15aea95c9df045.png_400x400q75.avif" Cloth="Aua&Co Black Printed T-Shirt For Girls & Women" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S498f8856ce734e14bedbbd604a27cd22k.jpg_400x400q75.avif" Cloth="printed T Sharts For Womans" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />

          </div>


        </div>
      </div>

    </div>
  )
}

export default TshirtProduct