import { type ClassValue, clsx } from "clsx";
import {
  CommandIcon,
  MessageCircleIcon,
  SmileIcon,
  StarIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "secondary" &&
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "destructive" &&
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  );
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

export const HomeSectionThree = (): JSX.Element => {
  const features = [
    {
      icon: <MessageCircleIcon className="h-6 w-6" />,
      title:
        "تطوير المهارات الشخصية الحياتية للفتاة وتهيئتها للانخراط في المجتمع بوعي",
    },
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: "توفير بيئة تطوعية ملائمة تناسب متطلبات واحتياجات الفتيات",
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title:
        "زيادة وعي الفتيات بالعمل التطوعي وزيادة مشاركاتهن في التنمية والمجتمع",
    },
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "تعزيز القيم والسلوكيات الإيجابية لدى الفتيات",
    },
    {
      icon: <SmileIcon className="h-6 w-6" />,
      title: "تعزيز مسؤولية الفتاة تجاه ذاتها وأسرتها ومجتمعها",
    },
    {
      icon: <SmileIcon className="h-6 w-6" />,
      title: "تعزيز مسؤولية الفتاة تجاه ذاتها وأسرتها ومجتمعها",
    },
    {
      icon: <CommandIcon className="h-6 w-6" />,
      title: "بناء علاقات اجتماعية واعية لدى الفتيات",
    },
  ];

  return (
<section className="flex flex-col items-center gap-16 py-24 bg-white">
  <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 w-full">
    <div className="flex flex-col items-center gap-12 w-full">
      <div className="flex flex-col max-w-screen-md items-center gap-5 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <Badge
            variant="outline"
            className="bg-neutral-50 border-[#e9e9eb] px-2.5 py-1"
          >
            <span className="  font-medium text-[#414651] text-sm text-center [direction:rtl]">
              الأهداف
            </span>
          </Badge>

          <h2 className="font-display-md-semibold   text-[#181d27]   ">
            أهداف برنامج يانعة
          </h2>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col max-w-screen-xl items-start gap-16 px-8 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full justify-items-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col min-w-80 items-center gap-5 flex-1 ${
            features.length % 3 === 1 && index === features.length - 1 
              ? 'lg:col-start-2' 
              : ''
          }`}
        >
          <Card className="flex items-center justify-center w-12 h-12 bg-white rounded-[10px] border-[#e9e9eb] shadow-shadows-shadow-xs-skeuomorphic">
            <div className="flex items-center justify-center">
              {feature.icon}
            </div>
          </Card>

          <div className="flex flex-col items-center gap-2 w-full">
            <h3 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-xl text-center tracking-[0] leading-[30px] [direction:rtl]">
              {feature.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};