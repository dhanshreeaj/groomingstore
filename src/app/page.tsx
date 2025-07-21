"use client";

import CardIcon from "./components/cardicons";
import ProductFeatures from "./components/productfeature";
import ProductsPages from "./components/productspages";
import Review from "./components/Review";
import Home from "./components/Home";
export default function Page() {
  return (
    <>
      <Home />
      <CardIcon />
      <ProductFeatures />
      <ProductsPages />
      <Review />
    </>
  );
}
