import React, { FC } from "react";
import CheckoutSuccessPageWeb from "./checkout-success-page.web";
import CheckoutSuccessPageMobile from "./checkout-success-page-mobile";

interface PortalPageProps {
  searchParams: { activeTab: string };
}
const CheckoutSuccessPage = () => {
  return (
    <>
      <div className="hidden md:block ">
        <CheckoutSuccessPageWeb />
      </div>
      <div className="block md:hidden">
        <CheckoutSuccessPageMobile />
      </div>
    </>
  );
};
export default CheckoutSuccessPage;
