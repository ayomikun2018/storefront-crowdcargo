import React, { Suspense } from "react";
import CheckoutSuccessPageWeb from "./checkout-success-page.web";
import CheckoutSuccessPageMobile from "./checkout-success-page-mobile";

const CheckoutSuccessPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <CheckoutSuccessPageWeb />
      </div>
      <div className="block md:hidden">
        <CheckoutSuccessPageMobile />
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
