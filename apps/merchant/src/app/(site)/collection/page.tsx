import CollectionPage from "@/app/(site)/collection/_page/collection-page";
import OrdersPage from "@/app/(site)/collection/_page/collection-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <CollectionPage searchParams={serverSearchParams} />
    </>
  );
}
