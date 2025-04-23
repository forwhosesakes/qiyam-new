import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "./assets/progress";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import materialDB from "~/db/material/material.server";

export async function loader({ request, context, params }: LoaderFunctionArgs) {
  return materialDB
    .getAllMaterials(context.cloudflare.env.DATABASE_URL)
    .then((res: any) => {
      return Response.json(res.data);
    })
    .catch(() => {
      return null;
    });
}
export const NavFeaturedCard = (): JSX.Element => {
  // Data for the checklist items
  const checklistItems = [
    { id: 1, text: "التقارير" },
    { id: 2, text: "رأي المتدربات" },
    { id: 3, text: "المهارات" },
  ];

  return (
    <Card className="w-[286px] rounded-xl border-[#e9e9eb] shadow-shadows-shadow-xs">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <div className="flex flex-col items-start gap-3 self-stretch w-full">
          <div className="flex  justify-between gap-1 self-stretch w-full">
            <div className=" mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-sm tracking-[0] leading-5 [direction:rtl]">
              نسبة إنجاز تقرير اليوم
            </div>

            <div className="w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
              3 من 4 خطوة
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch w-full">
          <div className="w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#414651] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
              70%
            </div>
            <div className="relative flex-1 grow h-2">
              <Progress className="h-2 bg-[#e9e9eb] rounded-full" value={70}>
                <div className="h-2 bg-[#539c4a] rounded-full" />
              </Progress>
            </div>

            
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-end gap-2 self-stretch w-full"
            >
                    <div className="w-5 h-5 flex items-center justify-center">
                <CheckCircleIcon className="w-5 h-5 text-[#539c4a]" />
              </div>
              <div className="w-[204px] mt-[-1.00px]  font-medium text-[#535861] text-sm tracking-[0] leading-5 [direction:rtl]">
                {item.text}
              </div>
        
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
