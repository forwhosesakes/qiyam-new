import { UserIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../../../components/UI-dashbord/card";

export const MetricsOverviewSection = (): JSX.Element => {
  // Data for metrics cards
  const metricsData = [
    {
      id: 1,
      title: "عدد المتدربات",
      value: "5000",
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "عدد المشرفين",
      value: "4",
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "عدد المدربين",
      value: "200",
      icon: <UserIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section className="flex flex-wrap gap-5 w-full">
      {metricsData.map((metric) => (
        <Card
          key={metric.id}
          className="flex-1 min-w-[232px] border border-[#e9e9eb] shadow-shadows-shadow-xs"
        >
          <CardContent className="flex items-center justify-between p-5">
            <div className="flex flex-col items-end gap-2 w-full">
              <h3 className="self-stretch [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#535861] text-sm leading-5 [direction:rtl]">
                {metric.title}
              </h3>
              <p className="self-stretch [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-3xl text-right leading-[38px]">
                {metric.value}
              </p>
            </div>

            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg overflow-hidden border border-[#e9e9eb] shadow-shadows-shadow-xs-skeuomorphic flex items-center justify-center">
              {metric.icon}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
