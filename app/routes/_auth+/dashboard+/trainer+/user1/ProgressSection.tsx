// import { MailIcon, MapPinIcon, PhoneIcon, UserIcon } from "lucide-react";
// import React from "react";
import { Card, CardContent, CardHeader } from "../../../../../components/UI-dashbord/card";

// import mailIcon from "../../../../../public/mail-icon.png"
export const ProgressSection = (): JSX.Element => {
  // User data that can be mapped over
  const userData = [
    {
      label: "الاسم : نورة علي",
      // icon: <UserIcon className="w-[19.5px] h-[21.5px]" />,
      icon: <img src="/Group 30475.png" alt="mailIcon" className="w-[19.5px] h-[21.5px]"/>

    },
    {
      label: "الجوال : 123456789",
      icon: <img src="/Group 30523.png" alt="mailIcon" className="w-[15.5px] h-[21.5px]"/>

    },
    {
      label: "الايميل : kmsalms@gmail.com",
      // icon: <MailIcon className="w-[21.5px] h-[18.5px]" />,
      icon: <img src="/mail-icon.png" alt="mailIcon" className="w-[21.5px] h-[18.5px]" />

    },
    {
      label: "المنطقة : الرياض",
      // icon: <MapPinIcon className="w-[21.5px] h-[19.5px]" />,
      icon:  <img
      className="w-[21.5px] h-[19.5px]"
      alt="Group"
      src="/group-30476.png"
    />
    },
    {
      label: "الإدارة : تعليم الزلفي",
      icon: null,
    },
  ];

  return (
    <Card className="bg-white w-full p-[18px] gap-[18px] flex flex-col border border-solid border-[#d5d6d9] shadow-[0px_1px_2px_#0a0d120d] rounded-xl" >
      <CardHeader className="flex flex-row-reverse items-center justify-between p-2 bg-[#f8f8f8]  rounded-lg">
        <div className="flex items-center gap-2 bg-[#f8f8f8]">
          <img
            className="w-[21.5px] h-[19.5px]"
            alt="Group"
            src="/group-30476.png"
          />
          <h2 className="font-bold text-2xl text-labelsprimary [font-family:'Ping_AR_+_LT-Bold',Helvetica] [direction:rtl]">
            بياناتي
          </h2>
        </div>
      </CardHeader>

      <CardContent className="p-0" >
        <div className="flex flex-wrap items-start justify-end gap-[18px]">
          {userData.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-end gap-3 p-2.5 bg-white rounded-lg border border-solid border-[#d0d5dd]"
            >
              <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-bold text-[#1f2a37] text-base [direction:rtl]">
                {item.label}
              </div>
              {item.icon}
            </div>
          ))}

          <div className="inline-flex flex-col items-end gap-1.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white rounded-lg overflow-hidden border border-solid border-[#d0d5dd] shadow-[0px_1px_2px_#1018280d]">
              <div className="inline-flex items-center justify-end gap-2">
                <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-bold text-gray-900 text-base text-left [direction:rtl]">
                  المدرسة : خالد بن الوليد
                </div>
                <div className="w-2.5 h-2.5">
                  <div className="w-2 h-2 bg-[#199491] rounded relative top-px left-px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
