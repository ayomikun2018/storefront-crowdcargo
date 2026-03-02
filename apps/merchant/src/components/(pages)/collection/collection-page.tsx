"use client";
import React, { FC } from "react";
import CollectionPageMobile from "./collection-page-mobile";
import CollectionPageWeb from "./collection-page-web";

interface PortalPageProps {
  searchParams: { activeTab: string };
}
const CollectionPage: FC<PortalPageProps> = ({ searchParams }) => {
  return (
    <>
      <div className="hidden md:block ">
        <CollectionPageWeb searchParams={searchParams} />
      </div>
      <div className="block md:hidden">
        <CollectionPageMobile searchParams={searchParams} />
      </div>
    </>
  );
};
export default CollectionPage;
