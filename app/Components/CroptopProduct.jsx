import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function CroptopProduct() {
  return (
    <div>

      <div className="container my-4">
        <div className="row g-4">

          {/* Product 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/23b2ad7f71f3008d0c0d2f151f8d4153.jpg_400x400q75.avif" Cloth="Unique Art Printed Crop Top Round Neck Half Sleeves Casual Cotton Crop Top T Shirt For Girls Women And Ladies" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/d92e66074639917fe9df99ce592333f6.jpg_400x400q75.avif" Cloth="High Quality Casual Suits for Women Printed Crop Tshirt With Plaazo" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/d8c0f8424c04489785c5f3fd0e793654.jpg_400x400q75.avif" Cloth="New Graphic Heart Logo Print Crop Top Round Neck Half Sleeves Casual Printed Cotton Crop T Shirt" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/74dbe2630c5d4f9482246130d74c4c3e.jpg_400x400q75.avif" Cloth="Summer Soft & Comfy Casual Suit Crop Top With Flapper Trouser Combo For Women And Girls" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

        </div>
      </div>

      <div className="container my-4">
        <div className="row g-4">

          {/* Product 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/24698677156d12399b2e03fceaf264ed.jpg_400x400q75.avif" Cloth="Pack Of 3 Summer Casual Plan Crop Top Round Neck Half Sleeves Casual Plan Cotton Crop T Shirt For Girls Women And Ladies" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />}  />
          </div>

          {/* Product 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/b5de6c31bc7c3e8edd4ddfd958469818.jpg_400x400q75.avif" Cloth="Plain Crop Tops Summer Round Neck Half Sleeves Gym Casual Printed Crop Tops For Girls Women And Ladies" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/a4b10a17056513e5ef4bdfc555cc78d1.jpg_400x400q75.avif" Cloth="Summer High Quality White Printed Crop top and Black Flapper Suit" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

          {/* Product 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/96fafafb92787e8046e4697b389fad0a.jpg_400x400q75.avif" Cloth="New Panda Printed Crop Top Round Neck Half Sleeves Casual Cotton" price="1200.00" stars={<Stars />}
              sold="285 Sold" colorOption={<OptionColor />} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default CroptopProduct