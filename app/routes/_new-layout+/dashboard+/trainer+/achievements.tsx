import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  unstable_parseMultipartFormData,
} from "@remix-run/cloudflare";
import materialDB from "~/db/material/material.server";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { Material } from "~/types/types";
import { useCallback, useState } from "react";
import { Icon } from "~/components/icon";
import { Button } from "~/components/ui/button";
import { createToastHeaders } from "~/lib/toast.server";
import { createId } from "@paralleldrive/cuid2";
import { useDropzone } from "react-dropzone";
import { sanitizeArabicFilenames } from "~/utils/santize-arabic.filenames";
import {
  ChevronLeftIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Badge } from "~/routes/dashbord/dashboard-components/ui/badge";

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

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

// Data structure for program pillars
const programPillars = [
  {
    title: "1. بيئة تنفيذ البرنامج :",
    items: [
      "أن تكون بيئة تنافسية جاذبة.",
      "أن تكون بيئة مواكبة للتكنولوجيا.",
      "أن تكون بيئة تمزج بين الأصالة والمعاصرة.",
      "أن تكون بيئة محمية من القيم السلبية والأفكار الهدامة.",
      "أن تكون بيئة تعزز البدائل السلوكية الإيجابية المقبولة.",
      "أن تكون بيئة متكاملة ومعززة لجميع الجوانب (المعرفية، الفكرية، النفسية، المهارية، الحركية).",
    ],
  },
  {
    title: "2. مشرفة البرنامج :",
    items: [
      "أن تكون لديها خبرة في التعامل في الفتيات في المرحلة العمرية المستهدفة.",
      "أن تكون حاصلة على تأهيل تعليمي وتربوي مناسب للقيام بالمهام الإشرافية.",
      "أن تكون لديها مهارات مراعاة الفروق الفردية.",
      "أن تكون لديها مهارات حل المشكلات التي تواجه الفتيات أثناء سير البرنامج.",
      "أن تكون قادرة على تنمية العلاقات والتواصل.",
      "أن تمتلك مهارات إدارة الوقت، والعمل التعاوني",
    ],
  },
  {
    title: "3. طالبات البرنامج:",
    items: [
      "أن يكون لدى الفتاة دافع للتطوير الشخصي وقابلية للتعلم والإلمام بإدارة الوقت واستغلاله.",
      "أن تكون الفتاة في المرحلة الثانوية.",
    ],
  },
];

const achievements = () => {
  // User data for feedback section
  const userData = [
    {
      id: 1,
      label: "الاسم : نورة علي",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      id: 2,
      label: "الجوال : 123456789",
      icon: <PhoneIcon className="w-5 h-5" />,
    },
    {
      id: 3,
      label: "الايميل : kmsalms@gmail.com",
      icon: <MailIcon className="w-5 h-5" />,
    },
    {
      id: 4,
      label: "المنطقة : الرياض",
      icon: <MapPinIcon className="w-5 h-5" />,
    },
    { id: 5, label: "الإدارة : تعليم الزلفي", icon: null },
  ];

  return (
    <section>
      {/* Feedback Section */}
      <div className="w-full max-w-full mb-4">
        <Card className="w-full flex flex-col gap-[18px] p-[18px] bg-white border border-[#d5d6d9] shadow-[0px_1px_2px_#0a0d120d] rounded-xl">
          <div className="flex flex-col items-start justify-center px-2 py-1 w-full bg-[#f7f7f7] rounded-lg">
            <div className="flex w-full items-center justify-start gap-2">
              <div className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-2xl text-labelsprimary tracking-[0]">
                بياناتي
              </div>
              <img
                className="w-[21.5px] h-[19.5px]"
                alt="Location icon"
                src="./trainer+/assets/group-30476.png"
              />
            </div>
          </div>

          <CardContent className="flex flex-wrap items-start justify-end gap-[18px] p-0">
            {userData.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center justify-end gap-3 p-2.5 bg-white rounded-lg border border-solid border-[#d0d5dd]"
              >
                <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#1f2a37] text-base tracking-[0] leading-[normal] [direction:rtl]">
                  {item.label}
                </div>
                {item.icon}
              </div>
            ))}

            <div className="inline-flex flex-col items-end gap-1.5">
              <div className="inline-flex items-center justify-end gap-2 px-3.5 py-2.5 bg-white rounded-lg overflow-hidden border border-solid border-[#d0d5dd] shadow-[0px_1px_2px_#1018280d]">
                <div className="inline-flex gap-2 items-center justify-end">
                  <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-gray-900 text-base text-left tracking-[0] leading-[normal] [direction:rtl]">
                    المدرسة : خالد بن الوليد
                  </div>
                  <Badge className="w-2.5 h-2.5 p-0 flex items-center justify-center bg-transparent">
                    <div className="w-2 h-2 bg-[#199491] rounded-full"></div>
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="flex flex-col w-full h-auto items-start gap-[19px] p-3 bg-white rounded-xl border border-solid border-[#d5d7da]">
        <div className="flex w-full flex-row-reverse items-center justify-between px-2 py-1 bg-[#199491] rounded-lg">
          <ChevronLeftIcon className="w-5 h-5 text-white" />
          <div className="flex items-end justify-around relative">
            <h1 className="w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal] [direction:rtl]">
              ركائز نجاح البرنامج
            </h1>
          </div>
        </div>

        <CardContent className="flex flex-col w-full p-0 gap-[7px]">
          {programPillars.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <div className="relative self-stretch [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-normal text-x-475467 text-base text-right tracking-[0] leading-4">
                <span className="font-bold leading-5">
                  {section.title}
                  <br />
                </span>
              </div>

              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="relative self-stretch [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-normal text-x-475467 text-base text-right tracking-[0] leading-4"
                >
                  <span className="leading-[0.1px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-sm">
                    {item}
                    <br />
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default achievements;
