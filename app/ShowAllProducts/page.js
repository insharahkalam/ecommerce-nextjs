import BlazerSlider from "../Components/CoatSlider"
import BlazersProduct from "../Components/CoatProducts"
import CroptopProduct from "../Components/CroptopProduct"
import ProductCroptopSlider from "../Components/ProductCroptopSlider"
import ProductSweaterSlider from "../Components/ProductSweaterSlider"
import ProductTshirtSlider from "../Components/ProductTshirtSlider"
import SweaterProduct from "../Components/SweaterProduct"
import TshirtProduct from "../Components/TshirtProduct"
import HoodieSlider from "../Components/HoodieSlider"
import HoodieProducts from "../Components/HoodieProducts"


function ShowAllProducts() {
    return (
        <div>

            <ProductCroptopSlider />
            <CroptopProduct />
            <ProductSweaterSlider />
            <SweaterProduct />
            <ProductTshirtSlider />
            <TshirtProduct />
            <BlazerSlider />
            <BlazersProduct />
            <HoodieSlider />
            <HoodieProducts />

        </div>
    )
}

export default ShowAllProducts