import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toggle } from "@radix-ui/react-toggle";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import rectangle22099 from "../supervisor+/assets/rectangle-22099.svg"
import content from "../supervisor+/assets/content.png"
import verified from "../supervisor+/assets/verified-tick.svg"
import { Avatar } from "@radix-ui/react-avatar";
// Utility function
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Card components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Toggle Group components
const ToggleGroupContext = React.createContext<{
  size: "default" | "sm" | "lg" | undefined;
}>({
  size: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  />
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      className
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// Define the data structure for metric cards
interface MetricCard {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export const SupervisorStatics = (): JSX.Element => {
  // Data for metric cards
  const metricCards: MetricCard[] = [
    {
      label: "مهارة",
      value: "87",
      unit: "",
      description: "المهارات المدرب عليها",
    },
    {
      label: "ساعة",
      value: "240",
      unit: "",
      description: "الساعات التطوعية",
    },
    {
      label: "نشاط",
      value: "76",
      unit: "",
      description: "الأنشطة المنفذة",
    },
    {
      label: "مهارة",
      value: "240",
      unit: "",
      description: "القيمة الاقتصادية للمهارات",
    },
    {
      label: "ساعة تطوعية",
      value: "9832",
      unit: "",
      description: "الساعات التطوعية المحققة",
    },
    {
      label: "قيمة",
      value: "231",
      unit: "",
      description: "القيمية الاقتصادية من التطوع",
    },
    {
      label: "Active users",
      value: "42",
      unit: "",
      description: "القيمة الاقتصادية للمهارات",
    },
  ];

  // Data for the y-axis labels
  const yAxisLabels = [100, 80, 60, 40, 20, 0];

  // Data for the x-axis labels (region names)
  const regions = [
    "الملقا",
    "العارض",
    "الملقا",
    "قرطبة",
    "النسيم",
    "المعذر",
    "طويق",
    "الملز",
  ];
  const tabItems = [
    { id: "skills", label: "المهارات",  active: false,hasIndicator:true},
    { id: "regions", label: "المناطق", path: "/dashboard/supervisor/regionStatistics", active: false },
    { id: "statistics", label: "الإحصاءات", path: "/dashboard/supervisor/programStatistics", active: false },
    { id: "trainer-statistics", label: "إحصاءات المدربة", path: "/dashboard/supervisor/supervisorStatistics", active: false },
  ];
  // Data for the chart bars
  const chartBars = [
    { height: "32", src: "/chart-bar.svg" },
    { height: "40", src: "/chart-bar-2.svg" },
    { height: "131", top: "45", src: "/chart-bar-1.svg" },
    { height: "136", top: "10", src: "/chart-bar-1.svg" },
    { height: "102", top: "74", src: "/chart-bar-1.svg" },
    { height: "152", top: "6", src: "/chart-bar-2.svg" },
    { height: "133", top: "43", src: "/chart-bar-1.svg" },
    { height: "152", top: "6", src: "/chart-bar-4.svg" },
  ];
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  fallback?: string;
}
  return (
    <div className="flex flex-col w-full max-w-[1216px] mx-auto gap-9">

          <div className="relative w-full">
          <img
            className="w-full h-40  "
            alt="Rectangle"
            src={rectangle22099}
          />
          </div>
         {/* Container Section */}
         <div className="flex flex-col w-full items-end gap-4 px-4 py-0 mt-[180px]">
           {/* User Profile Section */}
           <div className="flex flex-col items-end gap-6 relative self-stretch w-full">
             {/* Profile Picture with Verification Badge */}
             <div className="relative w-24 h-24">
               <div className="relative w-[104px] h-[104px] -top-1 -left-1">
                 <Avatar
                   className="absolute w-[104px] h-[104px] rounded-full border-4 border-solid border-white shadow-shadows-shadow-lg overflow-hidden"
                  //   image="..content.png"
                  //  image={content}
                  //  fallback="NA"
                 />
                 <div className="w-24 h-24 rounded-full border border-solid border-[#00000014]" />
                 <img
                   className="absolute w-6 h-6 top-[74px] left-[74px]"
                   alt="Verified tick"
                   src={verified}

                 />
               </div>
             </div>

             {/* User Information */}
             <div className="flex flex-col items-end gap-0.5 relative self-stretch w-full">
               <div className="relative self-stretch mt-[-1.00px]  font-bold text-[#181d27] text-xl tracking-[0] leading-[30px] [direction:rtl]">
                 نورة علي الزهراني
               </div>
               <div className="self-stretch text-[#535861] text-base leading-6 relative   font-normal tracking-[0] [direction:rtl]">
                 مدرسة خالد بن الوليد رضي الله عنه - الرياض - تعليم الزلفي
               </div>
             </div>

                   {/* Tabs Navigation */}
           <div className="flex flex-col  gap-4 relative self-stretch w-full [direction:rtl]">
             <div className="w-full">
               <div className="flex    ">
                 {tabItems.map((tab) => (
                   <button
                     key={tab.id}
                     className={`min-h-10 px-4 py-2  border-r rounded-lg ${
                       tab.active ? "bg-neutral-50" : "bg-white"
                     } [direction:rtl] ${!tab.active ? "z-[1]" : "z-[-5]"}`}
               
                   >
                     <div className="flex items-center">
                       {tab.hasIndicator && (
                         <div className="relative w-2.5 h-2.5 mr-2">
                           <div className="relative w-2 h-2 top-px left-px bg-[#17b169] rounded" />
                         </div>
                       )}
                       <span className="  font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap">
                         {tab.label}
                       </span>
                     </div>
                   </button>
                 ))}
               </div>
             </div>
           </div>
</div>
</div>


      {/* Student Count Section */}
      <div className="flex items-center justify-center gap-[27px] relative self-stretch w-full flex-[0_0_auto]">
        <Card className="flex h-[142px] items-center justify-center gap-6 p-6 relative flex-1 grow bg-white rounded-xl border border-solid border-[#e9e9eb] shadow-shadows-shadow-xs">
          <CardContent className="flex items-center justify-center gap-6 relative flex-1 grow p-0">
            <div className="flex items-center justify-center gap-6 relative flex-1 grow">
              <div className="flex-col items-end gap-6 flex-1 grow flex relative">
                <div className="self-stretch mt-[-1.00px]  font-bold text-base leading-6 relative text-[#181d27] tracking-[0] [direction:rtl]">
                  عدد الطالبات
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px]  font-bold text-[#181d27] text-5xl tracking-[0] leading-[38px] [direction:rtl]">
                      ٦٣
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="relative w-[54px] h-[54px]"
                alt="Students"
                src="/students.svg"
              />
            </div>

            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto] mt-[-13.00px] mb-[-13.00px]">
              <div className="relative w-[120px] h-[120px] bg-[url(/background-7.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[57px] h-[46px] top-0 left-[60px]"
                  alt="Series"
                  src="/series-1.svg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Section */}
      <section className="flex items-start justify-end gap-9 relative self-stretch w-full">
        <div className="flex flex-col w-full items-start gap-6 relative">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <div className="flex items-start gap-4 relative self-stretch w-full">
              <div className="flex flex-col items-end justify-center gap-0.5 relative flex-1 self-stretch">
                <h2 className="mt-[-1.00px] relative self-stretch  font-bold text-[#181d27] text-lg tracking-[0] leading-7 [direction:rtl]">
                  التقارير
                </h2>
              </div>
            </div>
          </div>

          <Card className="w-full border border-solid border-[#e9eaeb] rounded-xl">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-center gap-[16px_42px]">
                {metricCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-3"
                  >
                    <div className="relative w-40 h-[88px]">
                      <div className="relative w-36 h-36 top-2 left-2">
                        <div className="absolute w-36 h-36 top-0 left-0">
                          <div className="relative w-40 h-[88px] -top-2 -left-2 bg-[url(/background.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[146px] h-[88px] top-0 left-0"
                              alt="Line"
                              src="/line.svg"
                            />
                          </div>
                        </div>

                        <div
                          className={`absolute h-[18px] top-[26px] ${
                            card.label === "ساعة تطوعية"
                              ? "left-10"
                              : card.label === "Active users"
                              ? "left-[38px]"
                              : "left-[59px]"
                          }  font-medium text-[#535861] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap ${
                            card.label !== "Active users" ? "[direction:rtl]" : ""
                          }`}
                        >
                          {card.label}
                        </div>

                        <div
                          className={`absolute h-8 top-[45px] ${
                            card.value.length > 2
                              ? "left-[46px]"
                              : card.value === "87"
                              ? "left-[60px]"
                              : card.value === "76"
                              ? "left-[60px]"
                              : card.value === "231"
                              ? "left-[54px]"
                              : card.value === "42"
                              ? "left-[58px]"
                              : "left-[50px]"
                          } font-bold text-[#181d27] text-center `}
                        >
                          {card.value}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        card.description === "القيمة الاقتصادية للمهارات" &&
                        index === 3
                          ? "w-[152px]"
                          : card.description === "القيمة الاقتصادية للمهارات" &&
                            index === 6
                          ? "w-[126px]"
                          : card.description === "الساعات التطوعية المحققة"
                          ? "w-40"
                          : "relative self-stretch"
                      }  font-medium text-[#181d27] text-sm text-center tracking-[0] leading-[14.2px] [direction:rtl]`}
                    >
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regions Section */}
      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-start gap-4 w-full">
            <ToggleGroup
              type="single"
              defaultValue="regions"
              className="flex rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
            >
              <ToggleGroupItem
                value="schools"
                className="flex min-h-10 items-center justify-center gap-2 px-4 py-2 bg-white border-r border-[#d5d6d9] rounded-none data-[state=on]:bg-neutral-50"
              >
                <span className=" font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  المدارس
                </span>
              </ToggleGroupItem>

              <ToggleGroupItem
                value="departments"
                className="flex min-h-10 items-center justify-center gap-2 px-4 py-2 bg-white border-r border-[#d5d6d9] rounded-none data-[state=on]:bg-neutral-50"
              >
                <span className=" font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  الإدارات
                </span>
              </ToggleGroupItem>

              <ToggleGroupItem
                value="regions"
                className="flex min-h-10 items-center justify-center gap-2 px-4 py-2 bg-neutral-50 border-r border-[#d5d6d9] rounded-none"
              >
                <div className="relative w-2.5 h-2.5 ml-[-0.17px]">
                  <div className="relative w-2 h-2 top-px left-px bg-[#17b169] rounded" />
                </div>
                <span className=" font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  المناطق
                </span>
              </ToggleGroupItem>
            </ToggleGroup>

            <div className="flex flex-col items-end justify-center gap-0.5 flex-1">
              <h2 className=" font-bold text-[#181d27] text-lg tracking-[0] leading-7 [direction:rtl]">
                المناطق
              </h2>
            </div>
          </div>
        </div>

        <Card className="w-full border border-solid border-[#e9eaeb]">
          <CardContent className="p-6">
            <div className="relative w-full h-[228px]">
              {/* Y-axis labels and grid lines */}
              <div className="flex flex-col justify-between h-full">
                {yAxisLabels.map((label, index) => (
                  <div
                    key={index}
                    className="flex h-[17px] items-center gap-2 w-full"
                  >
                    <div className="w-10 font-text-xs-regular text-[#535861] text-right">
                      {label}
                    </div>
                    <div className="flex-1 h-px bg-[url(/divider.svg)] bg-cover bg-[50%_50%]" />
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="flex items-center justify-between pl-[72px] pr-6 py-0 w-full absolute bottom-0">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className=" font-bold text-[#535861] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap [direction:rtl]"
                  >
                    {region}
                  </div>
                ))}
              </div>

              {/* Chart bars */}
              <div className="absolute w-full h-44 top-[25px] left-12">
                <div className="flex w-full h-44 items-end justify-between px-5 py-0">
                  {chartBars.map((bar, index) => (
                    <div key={index} className="relative self-stretch w-[42px]">
                      <img
                        className={`absolute w-[42px] h-${bar.height} ${
                          bar.top ? `top-${bar.top}` : "top-12"
                        } left-0`}
                        alt="Chart bar"
                        src={bar.src}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};