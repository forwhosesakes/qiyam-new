import { ArrowLeftIcon, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/UI-dashbord/badge";
import { Button } from "../../../../components/UI-dashbord/button";
import { Card, CardContent } from "../../../../components/UI-dashbord/card";

// Card data for mapping
const cardData = [
  {
    id: 1,
    image: "/image.png",
    title: "واقعنا والقيم",
    description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    actions: [
      {
        label: "قراءة المقال",
        icon: <ArrowLeftIcon className="w-[17.65px] h-[17.65px] rotate-180" />,
        variant: "primary",
      },
    ],
  },
  {
    id: 2,
    image: "/image-1.png",
    title: "واقعنا والقيم",
    description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    actions: [
      {
        label: "حذف المقال",
        icon: <Trash2Icon className="w-[17.65px] h-[17.65px]" />,
        variant: "secondary",
      },
      {
        label: "تعديل المقال",
        icon: <PencilIcon className="w-[17.65px] h-[17.65px]" />,
        variant: "primary",
      },
    ],
  },
  {
    id: 3,
    image: "/image-2.png",
    title: "نص جديد",
    description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    actions: [
      {
        label: "جديد",
        icon: <PlusIcon className="w-[17.65px] h-[17.65px]" />,
        variant: "primary",
      },
    ],
  },
];

// Alert data for mapping
const alertData = [
  {
    id: 1,
    type: "success",
    message: "تم رفع الملفات بنجاح",
    label: "نجاح",
  },
  {
    id: 2,
    type: "error",
    message: "تأكد من حجم أو نوع الملف",
    label: "خطأ",
  },
];

export const Boxee = (): JSX.Element => {
  return (
    <div className="w-full max-w-[906px] h-[475px]">
      <div className="w-full h-full">
        <div className="relative w-full h-full bg-white rounded-2xl border border-solid border-[#d0d5dd] p-10">
          {/* Title */}
          <h1 className="absolute h-12 top-10 right-10 [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#0d3151] text-4xl text-right tracking-[0] leading-[normal] [direction:rtl]">
            أدلة البرنامج
          </h1>

          {/* Alert Notifications */}
          <div className="flex flex-col gap-2 absolute top-7 left-[41px]">
            {alertData.map((alert) => (
              <div
                key={alert.id}
                className={`inline-flex items-center justify-end gap-3 pl-2 pr-1 py-1 rounded-2xl ${
                  alert.type === "success" ? "bg-success-50" : "bg-[#fef3f2]"
                }`}
              >
                <div
                  className={`relative w-fit [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl] ${
                    alert.type === "success"
                      ? "text-success-700"
                      : "text-[#b32318]"
                  }`}
                >
                  {alert.message}
                </div>
                <Badge
                  variant="outline"
                  className={`bg-white rounded-2xl border border-solid ${
                    alert.type === "success"
                      ? "border-[#0dbd7563]"
                      : "border-[#fecdc9]"
                  }`}
                >
                  <span
                    className={`[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-sm ${
                      alert.type === "success"
                        ? "text-success-700"
                        : "text-[#b32218]"
                    }`}
                  >
                    {alert.label}
                  </span>
                </Badge>
              </div>
            ))}
          </div>

          {/* Cards Container */}
          <div className="flex items-center gap-[29.61px] absolute top-28 left-[34px]">
            {cardData.map((card) => (
              <Card
                key={card.id}
                className="w-[258.91px] h-[318.49px] p-[11.77px] rounded-[11.77px] shadow-[0px_1.47px_2.94px_-1.47px_#1018280f,0px_2.94px_5.88px_-1.47px_#1018281a] flex flex-col items-end bg-white"
              >
                <CardContent className="p-0 flex flex-col items-end gap-[17.65px] w-full h-full">
                  <img
                    className="h-[183.89px] w-full object-cover"
                    alt={card.title}
                    src={card.image}
                  />

                  <div className="flex flex-col items-end justify-center gap-[5.88px] w-full">
                    <div className="w-full mt-[-0.74px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-d-9d-9d-9 text-[13.2px] tracking-[0] leading-[20.6px] [direction:rtl]">
                      {card.title}
                    </div>
                    <div className="w-fit [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#1f2a37] text-[11.8px] tracking-[0] leading-[17.7px] whitespace-nowrap [direction:rtl]">
                      {card.description}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-[11.77px] w-full">
                    {card.actions.map((action, index) => (
                      <Button
                        key={index}
                        className={`h-[29.42px] gap-[2.94px] px-[11.77px] py-0 rounded-[5.88px] inline-flex items-center justify-center overflow-hidden border-[0.74px] border-solid ${
                          action.variant === "primary"
                            ? "bg-[#006173] border-[#669ccd]"
                            : "bg-white border-[#d0d7de]"
                        }`}
                      >
                        {action.icon}
                        <span
                          className={`w-fit mt-[-0.74px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[11.8px] text-left tracking-[0] leading-[17.7px] whitespace-nowrap [direction:rtl] ${
                            action.variant === "primary"
                              ? "text-white"
                              : "text-[#1f2a37]"
                          }`}
                        >
                          {action.label}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
