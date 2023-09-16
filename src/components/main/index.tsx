import React from "react";
import HeroBanner from "../HeroBannar";
import ProductList from "../ProductList";
import Features from "../Features";

function Main() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <ProductList/>
      <Features/>
    </main>
  );
}

export default Main;
