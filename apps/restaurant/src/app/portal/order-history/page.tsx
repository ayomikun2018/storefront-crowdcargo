import OrderHistoryPage from "@/app/portal/order-history/_page/order-history-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <OrderHistoryPage searchParams={serverSearchParams} />
    </>
  );
}
