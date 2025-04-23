import {
  MinusCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  UserPlusIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/UI-dashbord/button";
import { Card, CardContent } from "../../../../components/UI-dashbord/card";
import { Input } from "../../../../components/UI-dashbord/input";

export const Alert = (): JSX.Element => {
  // Data for input fields to enable mapping
  const inputFields = [
    { icon: <MinusCircleIcon className="w-4 h-4 text-red-500" /> },
    { icon: <PlusCircleIcon className="w-4 h-4" /> },
    { icon: <PlusCircleIcon className="w-4 h-4" /> },
  ];

  return (
    <Card className="flex flex-col items-center justify-center gap-6 p-4 border-[#d5d6d9] shadow-shadows-shadow-xs">
      <div className="flex w-[1090px] h-14 items-center justify-center gap-3 p-5 bg-[#006173] rounded-xl shadow-shadows-shadow-xs">
        <Button
          variant="outline"
          className="flex w-[120px] items-center justify-center gap-1 px-3 py-2 mt-[-10.00px] mb-[-10.00px] bg-white rounded-lg border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
        >
          <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
              إضافة
            </span>
          </div>
          <PlusIcon className="w-5 h-5" />
        </Button>

        <div className="flex flex-col items-start gap-0.5 relative flex-1 grow mt-[-4.00px] mb-[-4.00px]">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-6 [direction:rtl]">
            إضافة منطقة
          </h2>
        </div>

        <div className="relative w-8 h-8 mt-[-8.00px] mb-[-8.00px] bg-white rounded-md overflow-hidden border border-solid border-[#e9e9eb] shadow-shadows-shadow-xs-skeuomorphic flex items-center justify-center">
          <UserPlusIcon className="w-4 h-4" />
        </div>
      </div>

      <CardContent className="p-0 w-full flex flex-col items-center">
        {inputFields.map((field, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-center gap-3 w-full mb-6 last:mb-0"
          >
            <div className="flex-col w-[1090px] items-center gap-1.5 flex relative flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-center gap-2 px-3 py-2 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs">
                  {field.icon}
                  <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                    <Input
                      className="border-0 shadow-none p-0 h-auto text-center [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base tracking-[0] leading-6 [direction:rtl]"
                      placeholder="اكتب المنطقة المراد اضافتها"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};