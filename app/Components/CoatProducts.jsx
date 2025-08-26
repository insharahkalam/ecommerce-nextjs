import OneCardUseAnywhere from "./OneCardUseAnywhere"
import { products } from "../ProductData/products";

function CoatProducts() {
   const coatProducts = products.filter(item => item.category === "coat")
  return (

 <div className="container my-4">
      <div className="row g-4">
        {coatProducts.map((item) => (
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

  )
}

export default CoatProducts