import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function CoatProducts() {
  return (
    <div>



      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S1410b4aba17e4763a3c8ec111766d1acP.jpg_400x400q75.avif" Cloth="Korein Style Coat For Girls / 75% Off / Sale / limited Stock" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S0dd52ee368d247068ec0233efa9548c5C.jpg_400x400q75.avif" Cloth="New Collection Wool Coat with Long Sleeves and Stylish Kaaj Buttons Warmer for Winters New Arrivals For Women" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/4885218ae8d1fe7bf2a00b73113af88a.jpg_400x400q75.avif" Cloth="Women lapel casual long fleece coat" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S9ac5d29f7c1c42a9b08c185e7b3912d6w.jpg_400x400q75.avif" Cloth="Denim long hoodie coat for girls/Women" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">
          {/* Product 1 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S045d5808f00340528c983ebaba329351E.jpg_400x400q75.avif" Cloth="Korein Style Blazer Coat For Girls - Imported - 78% OFF OFF Sale - Limited Edition" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="./Images/img29.png" Cloth="woman short coat" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>

          {/* Product 3 */}

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/Sffdfdc49afc141329acc9527f8d3d6b2o.jpg_400x400q75.avif" Cloth="Korein Style Blazer Coat For Girls - Imported - 80% OFF OFF Sale - Limited Edition" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">

            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/d5aba1ad63cfc126354227bd6b3dced6.jpg_400x400q75.avif" Cloth="Women Winter Long Coat" price="1200.00" stars={<Stars />}
              sold="285 Sold"  colorOption={<OptionColor />} />
          </div>


        </div>
      </div>

    </div>
  )
}

export default CoatProducts