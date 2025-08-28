"use client";
import { useSearchParams } from "next/navigation";
import { products } from "../ProductData/products";
import ProductDetail from "../Components/ProductDetail";
import { Suspense } from "react";

function OpenEachProductInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <ProductDetail
        img={product.img}
        name={product.Cloth}
        price={product.price}
        sold={product.sold}
        stars={product.stars}
        relatedImg={product.relatedImg}
      />
    </div>

  );
}

export default function OpenEachProduct() {
  return (<Suspense fallback={<div>Loading product...</div>}>
    <OpenEachProductInner />
  </Suspense>
  );
};
