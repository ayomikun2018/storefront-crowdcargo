import CheckoutPage from "@/app/checkout/_page/checkout-page";

export const metadata = { title: "Checkout" };

export default function Page() {
  return (
    <div className="max-w-7xl [@media(min-width:2000px)]:container p-5 mx-auto space-y-5">
      <CheckoutPage />
    </div>
  );
}
