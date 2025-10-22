import HomePage from "@/app/_page/home-page";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const serverSearchParams = await searchParams;
  return <HomePage searchParams={serverSearchParams} />;
}
