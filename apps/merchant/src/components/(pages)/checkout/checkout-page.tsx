import React, { FC } from "react";
import CheckoutPageWeb from "./checkout-page-web";
import CheckoutPageMobile from "./checkout-page-mobile";

interface PortalPageProps {
  searchParams: { activeTab: string };
}
const CheckoutPage = () => {
  return (
    <>
      <div className="hidden md:block ">
        <CheckoutPageWeb />
      </div>
      <div className="block md:hidden">
        <CheckoutPageMobile />
      </div>
    </>
  );
};
export default CheckoutPage;
