import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export const User4 = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[906px] h-auto items-start gap-[19px] p-3 bg-white rounded-xl border border-solid border-[#d5d7da]">
      <div className="flex w-full items-center justify-between px-2 py-1 bg-[#199491] rounded-lg">
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
  );
};