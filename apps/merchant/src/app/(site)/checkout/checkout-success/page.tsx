import CheckoutPage from "@/app/(site)/checkout/_page/checkout-page";
import CheckoutSuccessPage from "./_page/checkout-success-page";

export const metadata = { title: "CheckoutSuccess" };

export default function Page() {
  return (
    <div className="max-w-8xl 2xl:container p-5 mx-auto space-y-5">
      <CheckoutSuccessPage />
    </div>
  );
}
