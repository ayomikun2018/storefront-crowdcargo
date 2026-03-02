import CheckoutPage from "@/components/(pages)/checkout/checkout-page";

export const metadata = { title: "Checkout" };

export default function Page() {
  return (
    <div className="max-w-8xl 2xl:container p-5 mx-auto space-y-5">
      <CheckoutPage />
    </div>
  );
}
