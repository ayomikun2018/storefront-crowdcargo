import CheckoutSuccessPage from "@/components/(pages)/checkout/checkout-success/checkout-success";

export const metadata = { title: "CheckoutSuccess" };

export default function Page() {
  return (
    <div className="max-w-8xl 2xl:container p-5 mx-auto space-y-5">
      <CheckoutSuccessPage />
    </div>
  );
}
