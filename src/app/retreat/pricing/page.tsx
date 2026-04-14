import type { Metadata } from "next";
import PricingCalculator from "./PricingCalculator";

export const metadata: Metadata = {
  title: "Retreat Price Model - CAIO Coach",
  description:
    "Infinite Leverage Retreat cost comparison and P&L calculator. Saigon vs. Nha Trang. All fields are editable.",
};

export default function RetreatPricingPage() {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="pt-20" />

      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">
        <h1 className="text-[28px] font-bold text-foreground tracking-tight mb-1.5">
          Retreat Price Model
        </h1>
        <p className="text-[14px] text-muted-foreground mb-8">
          Infinite Leverage Retreat - Saigon vs. Nha Trang cost comparison. All
          fields are editable.
        </p>

        <PricingCalculator />
      </div>
    </>
  );
}
