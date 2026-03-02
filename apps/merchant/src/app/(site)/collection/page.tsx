import CollectionPage from "@/components/(pages)/collection/collection-page";

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
