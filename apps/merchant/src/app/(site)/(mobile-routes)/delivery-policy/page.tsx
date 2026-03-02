import DeliveryPolicyPage from "./_page/delivery-policy-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <DeliveryPolicyPage />
    </>
  );
}
