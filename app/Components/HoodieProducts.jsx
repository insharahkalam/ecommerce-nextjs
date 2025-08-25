import OneCardUseAnywhere from "./OneCardUseAnywhere"
import OptionColor from "./OptionColor"
import Stars from "./Stars"

function HoodieProducts() {
    return (
        <div>


            <div className="container my-4">
                <div className="row g-4">

                    {/* Product 1 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/fc64a02bcc53daa75416830e449a2f82.jpg_400x400q75.avif" Cloth="New White Hoodie Design Flower Printed Fleece Winter Hoodie for Women" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 2 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/de27e1cd61999a157d2006d6e6a96033.png_400x400q75.avif" Cloth="Black & White Zipper Trendy Printed Hoodies For Men" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 3 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/cd7f502fcca3e1e1bf6b5062aac21d77.jpg_400x400q75.avif" Cloth="Hoodie for Women & Girls Cat Print Kangaroo Pocket Drawstring Pullover Cotton Winter Wear" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 4 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/Sad8002e1dc3f410193d800252cd3bebap.jpg_400x400q75.avif" Cloth="Los Angeles California Fleece Full Sleeves Pull Over Sweatshirt For Women" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row g-4">

                    {/* Product 1 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/30c7f5267114a9723e01cd16280652e8.jpg_400x400q75.avif" Cloth="Purple Cartoon New Stylish Printed Winter Fleece Hoodie for women and Girls" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 2 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/41d309a986333fe7962c44096232fffc.jpg_400x400q75.avif" Cloth="Black Stylish Zipper Hoodies For Girls & Women - Comfy & Cozy Hoodies For Girls" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 3 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/static/pk/p/0edee8bac8aeabfa439ccf0d59bec71f.jpg_400x400q75.avif" Cloth="RichMan_Winter Pack of 2 premium printed Full Sleeve sweatshirt batman and happy Face For Men and Womens" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>

                     {/* Product 4 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <OneCardUseAnywhere img="https://img.drz.lazcdn.com/g/kf/S168ce51fc6d940dbb068cc577d88a806o.jpg_400x400q75.avif" Cloth="Womens Printed Hoodie with Kangaroo Pocket and Drawstring, Long Sleeve Winter Pullover, Export Quality" price="1200.00" stars={<Stars />}
                            sold="285 Sold" colorOption={<OptionColor />} btn="Add To Cart" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HoodieProducts