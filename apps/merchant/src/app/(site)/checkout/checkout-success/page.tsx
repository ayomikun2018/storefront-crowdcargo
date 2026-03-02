import CheckoutSuccessPage from "@/components/(pages)/checkout/checkout-success/checkout-success";
import { Suspense } from "react";

export const metadata = { title: "Checkout Success" };

export default function Page() {
  return (
    <div className="max-w-8xl p-5 mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutSuccessPage />
      </Suspense>
    </div>
  );
}
