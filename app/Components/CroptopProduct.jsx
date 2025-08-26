import { products } from "../ProductData/products";
import OneCardUseAnywhere from "./OneCardUseAnywhere";

function CroptopProduct() {
   const croptopProducts = products.filter(item => item.category === "croptop")
  return (
    <div className="container my-4">
      <div className="row g-4">
        {croptopProducts.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <OneCardUseAnywhere
             id={item.id}
              img={item.img}
              Cloth={item.Cloth}
              price={item.price}
              sold={item.sold}
              stars={item.stars}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CroptopProduct;
