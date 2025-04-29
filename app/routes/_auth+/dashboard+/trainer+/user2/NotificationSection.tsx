import React from "react";
import { Button } from "../../../../../components/UI-dashbord/button";
import { Card, CardContent } from "../../../../../components/UI-dashbord/card";

// Data for metric cards to enable mapping
const metricCards = [
  {
    id: 1,
    label: "المتطوعات المشاركات",
    value: "45",
  },
  {
    id: 2,
    label: "الأنشطة التي نفذت",
    value: "45",
  },
  {
    id: 3,
    label: "الفرص التطوعية المنفذة",
    value: "45",
  },
  {
    id: 4,
    label: "القيمية الاقتصادية من التطوع",
    value: "0",
  },
  {
    id: 5,
    label: "الساعات التطوعية المحققة",
    value: "0",
  },
  {
    id: 6,
    label: "المهارات اللي تم تدريب الفتيات عليها",
    value: "45",
  },
  {
    id: 7,
    label: "القيمة الاقتصادية للمهارات",
    value: "45",
  },
];

export const NotificationSection = (): JSX.Element => {
  return (
    <Card className="bg-white w-full flex flex-col items-center justify-center gap-6 p-4 border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs">
      <div className="w-full h-[50px] items-center justify-between px-2 py-1 bg-[#199491] rounded-lg flex">
        <Button
          variant="outline"
          className="flex w-[120px] items-center justify-center gap-1 px-3 py-2 bg-[#ffffff] rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
        >
          <span className="relative w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
            حفظ
          </span>
        </Button>

        <div className="relative w-fit [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#ffffff] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
          تم تقييم 4 من أصل 7
        </div>

        <div className="inline-flex items-center gap-[272px] relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#ffffff] text-2xl tracking-[0] leading-[normal] [direction:rtl]">
            التقارير
          </h2>
        </div>
      </div>

      <CardContent className="flex flex-wrap w-full items-center justify-end gap-[18px_24px] p-0">
        {metricCards.map((card) => (
          <div
            key={card.id}
            className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]"
          >
            <div className="w-[145px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-sm text-center leading-5 relative mt-[-1.00px] text-black tracking-[0] [direction:rtl]">
              {card.label}
            </div>
            <div className="flex w-[136px] h-9 items-center justify-center gap-3 p-2.5 relative bg-[#f8f9fb] rounded-lg border border-solid border-[#d0d5dd]">
              <div className="relative w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#1f2a37] text-sm text-right tracking-[0] leading-[normal]">
                {card.value}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
