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

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/7306bbda512872f6d7d4d3ba01c2d081.jpg_400x400q75.avif" Cloth="Slim Fit High Neck for Ladies Women - Warm Turtle Neck for Girls - High Quality High Neck Comfortable Fit- Winter Stuff" price="1200.00" stars={<Stars />}
                 sold="285 Sold" btn="Add To Cart" />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S6d8f4a0545d2461694d892c72c2a5fb00.jpg_400x400q75.avif" Cloth="This Primark cardigan features a soft lavender and white butterfly pattern, button closure, ribbed trims, and a cozy knit design." price="1200.00" stars={<Stars />}
                sold="285 Sold"  btn="Add To Cart" />


          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S2a45a0caa01241d7b2876ee0a1477eb7S.jpg_400x400q75.avif" Cloth="sweater for women" price="1200.00" stars={<Stars />}
                 sold="285 Sold" btn="Add To Cart" />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/36fe7b198d3b02e1294610d0d46c3a2a.jpg_400x400q75.avif" Cloth="winter rabbit wool jersi for ladies" price="1200.00" stars={<Stars />}
              sold="285 Sold" btn="Add To Cart" />

          </div>


        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/Sbb83e6532d2f4798879fa0379bc10826d.jpg_400x400q75.avif" Cloth="Shelton hand embroided full sleeve sweater" price="1200.00" stars={<Stars />}
            sold="285 Sold"  btn="Add To Cart" />


          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S7815dc3ea72647b499a8408e2976180co.jpg_400x400q75.avif" Cloth="elegant french heart pattern knitted cardigan  looks stunning over abayas too" price="1200.00" stars={<Stars />}
              sold="285 Sold" btn="Add To Cart" />


          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/6ce8ef697c885135a0c188609c99d923.jpg_400x400q75.avif" Cloth="
Women&appos;s High Neck Knitted Sweater Pullover, Long Sleeve Autumn Winter Knitwear for Comfortable Fit" price="1200.00" stars={<Stars />}
              sold="285 Sold" btn="Add To Cart" />


          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/ca73de0c2fdd05748918c5cc65e99bcb.jpg_400x400q75.avif" Cloth="Women&appos;s High Neck Knitted Sweater Pullover, Long Sleeve Autumn Winter Knitwear for Comfortable Fit" price="Rs: 1200.00" stars={<Stars />}
              sold="285 Sold" />


          </div>


        </div>
      </div>

    </div>
  )
}

export default SweaterProduct