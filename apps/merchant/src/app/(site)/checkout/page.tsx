import CheckoutPage from "@/app/(site)/checkout/_page/checkout-page";

export const metadata = { title: "Checkout" };

export default function Page() {
  return (
    <div className="max-w-8xl 2xl:container p-5 mx-auto space-y-5">
      <CheckoutPage />
    </div>
  );
}
