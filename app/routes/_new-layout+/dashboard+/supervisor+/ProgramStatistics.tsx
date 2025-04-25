import React, { useState } from "react";
import { MoreVerticalIcon } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ProgramStatistics = (): JSX.Element => {
  // Data for the cards to enable mapping
  const statsData = [
    {
      id: 1,
      title: "عدد الطالبات",
      count: "4321",
      icon: "/students.svg",
      iconAlt: "Students",
      chartImage: "/series-1.svg",
      chartImageStyle: { width: "57px", height: "46px", top: 0, left: "60px" },
    },
    {
      id: 2,
      title: "عدد المعلمات",
      count: "128",
      icon: "/teacher.svg",
      iconAlt: "Teacher",
      chartImage: "/series-1-2.svg",
      chartImageStyle: { width: "120px", height: "120px", left: 0, top: 0 },
    },
    {
      id: 3,
      title: "عدد المدارس",
      count: "52",
      icon: "/school.svg",
      iconAlt: "School",
      chartImage: "/series-1-3.svg",
      chartImageStyle: { width: "60px", height: "95px", left: "60px", top: 0 },
    },
  ];

  // Data for education departments
  const educationDepartments = [
    { name: "قرطبة", color: "#539c4a" },
    { name: "العليا", color: "var(--colorsteal)" },
    { name: "طويق", color: "var(--colorsyellow)" },
    { name: "الملز", color: "var(--colorspurple)" },
    { name: "النسيم", color: "var(--colorspink)" },
    { name: "الروضة", color: "#68c35c" },
    { name: "المعذر", color: "#e9e9eb" },
    { name: "الملقا", color: "#006173" },
  ];

  // Data for report metrics
  const reportMetrics = [
    {
      value: "87",
      unit: "مهارة",
      description: "المهارات المدرب عليها",
    },
    {
      value: "240",
      unit: "ساعة",
      description: "الساعات التطوعية",
    },
    {
      value: "76",
      unit: "نشاط",
      description: "الأنشطة المنفذة",
    },
    {
      value: "240",
      unit: "مهارة",
      description: "القيمة الاقتصادية للمهارات",
    },
    {
      value: "9832",
      unit: "ساعة تطوعية",
      description: "الساعات التطوعية المحققة",
    },
    {
      value: "231",
      unit: "قيمة",
      description: "القيمية الاقتصادية من التطوع",
    },
    {
      value: "42",
      unit: "Active users",
      description: "القيمة الاقتصادية للمهارات",
    },
  ];

  // Data for the chart
  const yAxisValues = [100, 80, 60, 40, 20, 0];
  const regions = [
    "الملقا",
    "الملز",
    "طويق",
    "المعذر",
    "النسيم",
    "قرطبة",
    "الملقا",
    "العارض",
  ];

  // Chart bar data with their heights and image sources
  const chartBars = [
    {
      height: "h-32",
      src: "/chart-bar-3.svg",
      width: "w-[42px]",
      top: "top-12",
    },
    {
      height: "h-40",
      src: "/chart-bar-1.svg",
      width: "w-[42px]",
      top: "top-4",
    },
    {
      height: "h-[131px]",
      src: "/chart-bar-4.svg",
      width: "w-[41px]",
      top: "top-[45px]",
    },
    {
      height: "h-[136px]",
      src: "/chart-bar-4.svg",
      width: "w-[43px]",
      top: "top-10",
    },
    {
      height: "h-[102px]",
      src: "/chart-bar-4.svg",
      width: "w-[42px]",
      top: "top-[74px]",
    },
    {
      height: "h-[152px]",
      src: "/chart-bar-1.svg",
      width: "w-[41px]",
      top: "top-6",
    },
    {
      height: "h-[133px]",
      src: "/chart-bar-4.svg",
      width: "w-[42px]",
      top: "top-[43px]",
    },
    {
      height: "h-[152px]",
      src: "/chart-bar.svg",
      width: "w-[42px]",
      top: "top-6",
    },
  ];

  return (
    <main className="flex flex-col w-full max-w-[1216px] mx-auto gap-9">
      {/* Stats Section */}
      <div className="flex items-center gap-[27px] relative self-stretch w-full flex-[0_0_auto]">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex h-[142px] items-center justify-center gap-6 p-6 relative flex-1 grow bg-white rounded-xl border border-solid border-[#e9e9eb] shadow-shadows-shadow-xs"
          >
            <div className="flex items-center justify-between gap-6 p-0 w-full">
              <img
                className="relative w-[54px] h-[54px]"
                alt={stat.iconAlt}
                src={stat.icon}
              />

              <div className="flex flex-col items-end gap-6 relative flex-1 grow">
                <div className="self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-base leading-6 relative text-[#181d27] tracking-[0] [direction:rtl]">
                  {stat.title}
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-5xl text-right tracking-[0] leading-[38px]">
                      {stat.count}
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start gap-4 relative flex-[0_0_auto] mt-[-13.00px] mb-[-13.00px]">
                <div className="relative w-[120px] h-[120px] bg-[url(/background.svg)] bg-[100%_100%]">
                  <img
                    className="absolute"
                    style={stat.chartImageStyle}
                    alt="Series"
                    src={stat.chartImage}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Departments and Reports Section */}
      <div className="flex flex-row items-start justify-end gap-9">
        {/* Education Departments Card */}
        <div className="flex flex-col w-[350px] gap-6">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="flex flex-col items-end justify-center gap-0.5 flex-1 w-full">
                <h2 className="self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-lg tracking-[0] leading-7 [direction:rtl]">
                  إدارات التعليم
                </h2>
              </div>
            </div>
          </div>

          <div className="h-[321px] w-full overflow-hidden border-[#e9e9eb] shadow-shadows-shadow-xs bg-white rounded-xl border border-solid">
            <div className="p-0">
              <div className="flex-col items-end gap-6 p-6 w-full flex">
                <div className="items-start gap-5 flex flex-col w-full">
                  <div className="items-start gap-4 w-full flex">
                    <div className="inline-flex flex-col items-start">
                      <MoreVerticalIcon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-end justify-center gap-0.5 flex-1">
                      <div className="self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-base leading-6 tracking-[0] [direction:rtl]">
                        إدارات التعليم
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-end gap-6 w-full">
                  <div className="inline-flex items-start gap-4">
                    <div className="relative w-[200px] h-[200px] bg-[url(/background-4.svg)] bg-[100%_100%]">
                      <div className="relative h-[200px]">
                        <img
                          className="w-[95px] h-[85px] left-[100px] absolute top-0"
                          alt="Series"
                          src="/series-1-1.svg"
                        />
                        <img
                          className="absolute w-[131px] h-[131px] top-[69px] left-[69px]"
                          alt="Series"
                          src="/series-2.svg"
                        />
                        <img
                          className="absolute w-[65px] h-[66px] top-[129px] left-[19px]"
                          alt="Series"
                          src="/series-3.svg"
                        />
                        <img
                          className="absolute w-[60px] h-[71px] top-[87px] left-0"
                          alt="Series"
                          src="/series-4.svg"
                        />
                        <img
                          className="absolute w-[84px] h-[89px] top-[5px] left-px"
                          alt="Series"
                          src="/series-5.svg"
                        />
                        <img
                          className="absolute w-8 h-[53px] top-0 left-[68px]"
                          alt="Series"
                          src="/series-6.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-1">
                    {educationDepartments.map((department, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-end gap-2 w-full"
                      >
                        <div className="w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#535861] text-sm text-left leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                          {department.name}
                        </div>
                        <div className="inline-flex items-start gap-2.5 pt-1.5 pb-0 px-0">
                          <div
                            className="relative w-2 h-2 rounded"
                            style={{ backgroundColor: department.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="flex flex-col w-[829px] items-start gap-6">
          <div className="items-start gap-5 flex flex-col w-full">
            <div className="items-start gap-4 w-full flex">
              <div className="flex flex-col items-end justify-center gap-0.5 flex-1">
                <h2 className="self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-lg tracking-[0] leading-7 [direction:rtl]">
                  التقارير
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full border-[#e9eaeb] bg-white rounded-xl border border-solid">
            <div className="p-6">
              <div className="flex flex-wrap w-full items-center justify-end gap-[16px_42px]">
                {reportMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center justify-center gap-3"
                  >
                    <div className="relative w-40 h-[88px]">
                      <div className="relative w-36 h-36 top-2 left-2">
                        <div className="absolute w-36 h-36 top-0 left-0">
                          <div className="relative w-40 h-[88px] -top-2 -left-2 bg-[url(/background-1.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[146px] h-[88px] top-0 left-0"
                              alt="Line"
                              src="/line.svg"
                            />
                          </div>
                        </div>
                        <div
                          className={`absolute h-[18px] top-[26px] ${
                            metric.unit === "Active users"
                              ? "left-[38px]"
                              : metric.unit === "ساعة تطوعية"
                              ? "left-10"
                              : "left-[59px]"
                          } [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#535861] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap ${
                            metric.unit !== "Active users" ? "[direction:rtl]" : ""
                          }`}
                        >
                          {metric.unit}
                        </div>
                        <div
                          className={`absolute h-8 top-[45px] ${
                            metric.value.length > 3
                              ? "left-[46px]"
                              : metric.value === "231"
                              ? "left-[54px]"
                              : metric.value === "240"
                              ? "left-[50px]"
                              : "left-[60px]"
                          } font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-[#181d27] text-[length:var(--display-xs-semibold-font-size)] text-center tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--display-xs-semibold-font-style)]`}
                        >
                          {metric.value}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        metric.description.length > 20
                          ? "w-[152px]"
                          : metric.description ===
                              "القيمة الاقتصادية للمهارات" && index === 6
                          ? "w-[126px]"
                          : metric.description === "الساعات التطوعية المحققة"
                          ? "w-40"
                          : "self-stretch"
                      } [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#181d27] text-sm text-center tracking-[0] leading-[14.2px] [direction:rtl]`}
                    >
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Section */}
      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="w-[287px] rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic">
              <div className="w-full p-0 h-auto bg-transparent flex">
                <button className="flex-1 min-h-10 px-4 py-2 rounded-none bg-white border-r border-[#d5d6d9] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left leading-5 whitespace-nowrap [direction:rtl]">
                  المدارس
                </button>
                <button className="flex-1 min-h-10 px-4 py-2 rounded-none bg-white border-r border-[#d5d6d9] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left leading-5 whitespace-nowrap [direction:rtl]">
                  الإدارات
                </button>
                <button className="flex-1 min-h-10 px-4 py-2 rounded-none bg-neutral-50 border-r border-[#d5d6d9] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left leading-5 whitespace-nowrap [direction:rtl]">
                  <div className="relative w-2.5 h-2.5 ml-[-0.17px]">
                    <div className="relative w-2 h-2 top-px left-px bg-[#17b169] rounded" />
                  </div>
                  المناطق
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center gap-0.5 flex-1">
              <h2 className="self-stretch [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-lg leading-7 tracking-[0] [direction:rtl]">
                المناطق
              </h2>
            </div>
          </div>
        </div>

        <div className="border border-solid border-[#e9eaeb] rounded-xl bg-white">
          <div className="p-6">
            <div className="flex-1 w-full">
              <div className="relative w-full h-[228px]">
                {/* Y-axis labels and grid lines */}
                <div className="flex flex-col h-full justify-between">
                  {yAxisValues.map((value, index) => (
                    <div key={index} className="flex items-center gap-2 w-full">
                      <div className="w-10 font-text-xs-regular text-[#535861] text-right">
                        {value}
                      </div>
                      <div className="flex-1 h-px bg-[url(/divider.svg)] bg-cover bg-[50%_50%]" />
                    </div>
                  ))}
                </div>

                {/* X-axis labels */}
                <div className="flex items-center justify-between pl-[72px] pr-6 mt-2 w-full">
                  {regions.map((region, index) => (
                    <div
                      key={index}
                      className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#535861] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap [direction:rtl]"
                    >
                      {region}
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="absolute w-[1072px] h-44 top-[25px] left-12">
                  <div className="flex w-full h-44 items-end justify-between px-5 py-0">
                    {chartBars.map((bar, index) => (
                      <div key={index} className="relative self-stretch w-[42px]">
                        <img
                          className={`absolute ${bar.width} ${bar.height} ${bar.top} left-0`}
                          alt="Chart bar"
                          src={bar.src}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramStatistics;