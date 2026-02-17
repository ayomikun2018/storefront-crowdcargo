import ProductDetailsPage from "./_page/product-details-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <ProductDetailsPage searchParams={serverSearchParams} />
    </>
  );
}
