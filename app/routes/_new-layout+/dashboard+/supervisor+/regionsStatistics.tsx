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
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export const RegionsStatistics = (): JSX.Element => {
  // Data for tabs to enable mapping
  const tabsData = [
    { id: "trainer-stats", label: "إحصاءات المدربة" },
    { id: "statistics", label: "الإحصاءات" },
    { id: "areas", label: "المناطق", selected: true },
    { id: "skills", label: "المهارات" },
  ];

  return (
    <div className="flex flex-col max-w-screen-xl w-full items-end gap-8 px-8 py-0">
      <div className="flex flex-col items-end gap-8 relative self-stretch w-full">
        <div className="flex flex-col max-w-screen-md w-[546px] items-end gap-5">
          <h1 className="self-stretch mt-[-1.00px] font-display-md-semibold font-bold text-[#181d27] text-[36px] tracking-[-0.72px] leading-[44px] [direction:rtl]">
            إحصاءات المناطق
          </h1>

          <p className="self-stretch [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#535861] text-xl leading-[30px] [direction:rtl]">
            بيانات المناطق والمدراس والإدرات
          </p>

          <div className="flex flex-col items-end justify-center gap-4 self-stretch w-full">
            <Card className="self-stretch w-full border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic rounded-lg overflow-hidden p-0">
              <CardContent className="p-0">
                <div className="flex items-start justify-end w-full">
                  {tabsData.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`flex min-h-10 items-center justify-center gap-2 px-4 py-2 flex-1 grow 
                        ${index < tabsData.length - 1 ? "border-r border-[#d5d6d9]" : ""}
                        ${tab.selected ? "bg-neutral-50" : "bg-white"}`}
                    >
                      {tab.selected && (
                        <div className="relative w-2.5 h-2.5">
                          <div className="relative w-2 h-2 top-px left-px bg-[#17b169] rounded" />
                        </div>
                      )}
                      <div className="relative w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                        {tab.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};