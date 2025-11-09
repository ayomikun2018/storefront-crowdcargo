import OrdersPage from "@/app/portal/orders/_page/orders-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <OrdersPage searchParams={serverSearchParams} />
    </>
  );
}
