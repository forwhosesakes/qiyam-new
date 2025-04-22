import React from "react";
import { Card } from "../../../dashboard-components/ui/card";
import { MainContentSection } from "./sections/MainContentSection";
import { MetricsOverviewSection } from "./sections/MetricsOverviewSection";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1216px] mx-auto">
      <Card className="w-full rounded-2xl border border-gray-300 overflow-hidden">
        <div className="flex flex-col w-full">
          <MetricsOverviewSection />
          <MainContentSection />
        </div>
      </Card>
    </div>
  );
};
