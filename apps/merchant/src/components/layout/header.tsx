import React from "react";
import WebHeader from "./(header)/web-header";
import MobileHeader from "./(header)/mobile-header";


export default function Header() {
  return (
    <div className="sticky top-0  z-30 ">
      <div className="hidden md:block">
        <WebHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
}
