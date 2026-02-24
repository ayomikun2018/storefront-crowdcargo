import StoreInformationPage from "./_page/store-information-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <StoreInformationPage />
    </>
  );
}
