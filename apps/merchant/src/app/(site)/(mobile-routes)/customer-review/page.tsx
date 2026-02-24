import OrdersPage from "@/app/(site)/collection/_page/collection-page";
import CustomerReviewPage from "./_page/customer-review-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <CustomerReviewPage />
    </>
  );
}
