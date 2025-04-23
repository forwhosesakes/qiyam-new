import { CheckCircleIcon, PlusCircleIcon } from "lucide-react";
 
import { Button } from "../../../components/UI-dashbord/button";
import { Card, CardContent } from "../../../components/UI-dashbord/card";
import { Progress } from "../../../components/UI-dashbord/progress";

import { ActionSection } from "./trainer/user1/ActionSection";
import { FooterSection } from "./trainer/user1/FooterSection";
import { FormSection } from "./trainer/user1/FormSection";
import { HeaderSection } from "./trainer/user1/HeaderSection";
import { NotificationSection } from "./trainer/user1/NotificationSection";
import { ProgressSection } from "./trainer/user1/ProgressSection";
import { SummarySection } from "./trainer/user1/SummarySection";
import sendicon from ".././../../assets/images/new-design/send-01.png"
export const Trainer = (): JSX.Element => {
  // Data for progress checklist
  const progressItems = [
    { id: 1, label: "التقارير", completed: true },
    { id: 2, label: "رأي المتدربات", completed: true },
    { id: 3, label: "المهارات", completed: true },
  ];

  // Data for sidebar menu items
  const sidebarMenuItems = [
    { id: 1, label: "مركز المعرفة" },
    { id: 2, label: "شهاداتي" },
    { id: 3, label: "ركائز نجاح البرنامج" },
    { id: 4, label: "تقرير إنجازاتي" },
  ];

  return (
    <div className="bg-[#f9f9f9] flex flex-row justify-center w-full" dir="rtl">
      <div className="bg-[#f9f9f9]  ">
        {/* Header Section */}
        <HeaderSection />

        {/* Summary Section with background */}
        <div className="w-full pt-[72px]">
          {" "}
          {/* Added padding-top to account for fixed header */}
          <div className="w-full bg-[#199491] py-4">
            {" "}
            {/* Added background color */}
            <SummarySection />
          </div>
        </div>

        <div className="flex flex-row gap-6 px-28 mt-8">
          {/* Main Content Column */}
          <div className="flex-1">
            {/* New Report Button */}
            <Button
              variant="outline"
              className="flex items-center gap-1.5 mb-6 bg-white border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
            >
              <PlusCircleIcon className="w-5 h-5" />
              <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-base [direction:rtl]">
                تقرير جديد
              </span>
            </Button>

            {/* Main Content Sections */}
            <div className="space-y-6">
              <ProgressSection />
              <NotificationSection />
              <FormSection />
              <ActionSection />

              {/* Buttons (using image as is since it's a complex SVG) */}

              <button className="w-full h-12 flex items-center justify-center text-white px-10 py-2 mb-[164px] rounded-md font-semibold bg-[#006173] shadow-sm shadow-[#0A0D120D]">
         
                     <img src={sendicon} alt="" />
                     <span> حفظ وإرسال</span>
              </button>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="w-[286px] space-y-6 ">
            {/* Progress Card */}
            <Card className="border border-solid border-[#e9e9eb] shadow-shadows-shadow-xs bg-white mt-[60px]">
              <CardContent className="flex flex-col items-start gap-4 p-4">
                {/* Progress Header */}
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="flex gap-1 w-full items-start">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                      3 من 4 خطوة
                    </div>
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-sm tracking-[0] leading-5 [direction:rtl]">
                      نسبة إنجاز تقرير اليوم
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 w-full">
                    <div className="relative flex-1 h-2">
                      <Progress value={70} className="h-2 bg-[#e9e9eb]" />
                    </div>
                    <div className="font-text-sm-medium text-[#414651]">
                      70%
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="flex flex-col items-start gap-2 w-full">
                  {progressItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-end gap-2 w-full"
                    >
                      <div className="w-[204px] mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#535861] text-sm tracking-[0] leading-5 [direction:rtl]">
                        {item.label}
                      </div>
                      {item.completed && (
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Menu */}
            <div className="flex flex-col gap-4">
              {sidebarMenuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  className="w-full justify-center py-4 px-[22px] bg-white border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
                >
                  <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-lg leading-7 [direction:rtl]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
