import PortalPage from "@/app/portal/_page/portal-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <PortalPage searchParams={serverSearchParams} />
    </>
  );
}
