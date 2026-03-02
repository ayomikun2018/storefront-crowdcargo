import HomePage from "@/components/(pages)/home/home-page";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ activeTab: string }>;
}) {
  const serverSearchParams = await searchParams;
  return (
    <>
      <HomePage searchParams={serverSearchParams} />
    </>
  );
}
