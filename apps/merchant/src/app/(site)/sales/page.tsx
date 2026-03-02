import SalesPage from "@/components/(pages)/sales/sales-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <SalesPage searchParams={serverSearchParams} />
    </>
  );
}
