import OneCardUseAnywhere from "./OneCardUseAnywhere";
import { products } from "../ProductData/products";

export default function Section5() {
  const section5 = products.filter(item => item.category === "section5")
  return (
    <div>
      <div className="container mt-5 text-center">
        <h2 className="fw-bold">Popular Picks</h2>
        <p className="lead">Unmatched design—superior performance and customer satisfaction in one.</p>
      </div>

<div className="container my-4">
      <div className="row g-4">
        {section5.map((item) => (
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

    </div>
  )
}

