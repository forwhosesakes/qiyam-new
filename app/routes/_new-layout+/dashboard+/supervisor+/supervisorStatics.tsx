import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { cn } from "~/lib/utils";
import arrowDown from "../../../../assets/images/new-design/chevron-down.png";
import School from "./assets/school.svg";
import students from "./assets/students.svg";

import teacher from "./assets/teacher.svg";
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

// Define the data structure for metric cards
interface MetricCard {
  label: string;
  value: string;
  unit: string;
  description: string;
}

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the data structure for metric cards
interface MetricCard {
  label: string;
  value: string;
  unit: string;
  description: string;
  color: string;
}

export const SupervisorStatistics = (): JSX.Element => {
  // Data for metric cards
  const metricCards: MetricCard[] = [
    {
      label: "مهارة",
      value: "87",
      unit: "",
      description: "المهارات المدرب عليها",
      color: "#68C35C",
    },
    {
      label: "ساعة",
      value: "240",
      unit: "",
      description: "الساعات التطوعية",
      color: "#68C35C",
    },
    {
      label: "نشاط",
      value: "76",
      unit: "",
      description: "الأنشطة المنفذة",
      color: "#68C35C",
    },
    {
      label: "مهارة",
      value: "240",
      unit: "",
      description: "القيمة الاقتصادية للمهارات",
      color: "#68C35C",
    },
    {
      label: "ساعة تطوعية",
      value: "9832",
      unit: "",
      description: "الساعات التطوعية المحققة",
      color: "#68C35C",
    },
    {
      label: "قيمة",
      value: "231",
      unit: "",
      description: "القيمية الاقتصادية من التطوع",
      color: "#68C35C",
    },
    {
      label: "Active users",
      value: "42",
      unit: "",
      description: "القيمة الاقتصادية للمهارات",
      color: "#68C35C",
    },
  ];

  // Data for the regions chart
  const regions = [
    { name: "الملقا", value: 40 },
    { name: "العارض", value: 45 },
    { name: "الملقا", value: 53 },
    { name: "قرطبة", value: 25 },
    { name: "النسيم", value: 54 },
    { name: "المعذر", value: 43 },
    { name: "طويق", value: 12 },
    { name: "الملز", value: 50 },
  ];

  const createDoughnutData = (value: any, color: string) => ({
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, "#E9EAEB"],
        borderWidth: -2,
        cutout: "80%",
        circumference: -180, // 90 degrees arc (quarter circle)
        rotation: 270, // Start at 270 degrees (top-right corner)
        borderRadius: {
          innerStart: 20,
          outerStart: 0,
          innerEnd: 0,
          outerEnd: 20,
        },
      },
    ],
  });
  const createCircleChartData = (value: number) => ({
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["#004E5C", "#E9EAEB"],
        borderWidth: 0,
        cutout: "70%", // Makes it a doughnut chart
        circumference: 360, // Full circle
        rotation: -10, // Starts from top
      },
    ],
  });

  const circleChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const doughnutOptions = {
    cutout: "80%", // Slightly smaller cutout to make ring thinner and avoid overlap with text
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const barChartData = {
    labels: regions.map((region) => region.name),
    datasets: [
      {
        label: "Green Segment",
        data: regions.map((region) => region.value),
        backgroundColor: "#17b169",
        borderRadius: 16, // rounded-md equivalent
        borderSkipped: false, // round all corners, not just top
        barThickness: 42,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
      {
        label: "Gray Segment",
        data: regions.map((region) => Math.max(10, region.value - 15)),
        backgroundColor: "#E9EAEB",
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 42,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // For vertical stacked bars:
    // Remove or set indexAxis to 'y' (default vertical)
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        stacked: true,
        ticks: {
          stepSize: 20,
          font: { size: 12, family: "'Inter', sans-serif" },
          color: "#535861",
        },
        grid: { color: "#E9EAEB", drawBorder: false },
        border: { display: false },
      },
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          font: { size: 12, family: "'Ping AR + LT', Helvetica", weight: 700 },
          color: "#535861",
        },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        rtl: true,
        titleAlign: "right" as const,
        bodyAlign: "right" as const,
        callbacks: {
          label: function (context: any) {
            if (context.datasetIndex === 0) {
              return `${context.parsed.y}%`;
            }
            return "";
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-full max-w-[1216px] mx-auto gap-9 mb-[1233px]">
      <div className="w-full  mx-auto p-6  rounded-xl  [direction:rtl]">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-6  pb-4">
          <h1 className="text-2xl font-bold text-[#181D27] mb-2">
            إحصاءات المدرب{" "}
          </h1>
          <h2 className="text-lg font-normal text-gray-600">بيانات المدربة</h2>
        </div>
      </div>
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
                src={students}
              />
            </div>

            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto] mt-[-13.00px] mb-[-13.00px]">
              <div className="relative w-[120px] h-[120px]  ">
                <Doughnut
                  data={createCircleChartData(25)}
                  options={circleChartOptions}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Metrics Section */}
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

          <div className="w-full border border-solid border-[#e9eaeb] rounded-xl bg-white p-6">
            <div className="flex flex-wrap items-center justify-center gap-[16px_42px]">
              {metricCards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <div className="relative w-40 h-[88px]">
                    <div className="relative w-36 h-36">
                      <div className="absolute w-36 h-36">
                        <Doughnut
                          data={createDoughnutData(card.value, card.color)}
                          options={doughnutOptions}
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <div className="text-xs text-[#535861] mb-2 mt-8">
                            {card.label}
                          </div>
                          <div className="text-2xl font-bold text-[#181d27]">
                            {card.value}
                          </div>
                        </div>
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
                    }   font-medium text-[#181d27] text-sm text-center tracking-[0] leading-[14.2px] m-3 [direction:rtl]`}
                  >
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-start gap-4 w-full h-full">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center w-full">
                {" "}
                {/* Changed to items-center for vertical alignment */}
                <div className="flex rounded-lg border border-[#d5d6d9] overflow-hidden">
                  {" "}
                  {/* Added overflow-hidden */}
                  <button className="px-4 py-2 border-r border-[#d5d6d9] bg-white hover:bg-neutral-50 transition-colors [direction:rtl]">
                    <span className="font-bold text-[#414651] text-sm">
                      المدارس
                    </span>
                  </button>
                  <button className="px-4 py-2 border-r border-[#d5d6d9] bg-white hover:bg-neutral-50 transition-colors [direction:rtl]">
                    <span className="font-bold text-[#414651] text-sm">
                      الإدارات
                    </span>
                  </button>
                  <button className="px-4 py-2 bg-neutral-50 [direction:rtl] flex items-center justify-center gap-2">
                    {" "}
                    {/* Removed border-right from last button */}
                    <span className="font-bold text-[#414651] text-sm">
                      المناطق
                    </span>
                    <div className="relative w-2.5 h-2.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#17b169] rounded-full" />{" "}
                      {/* Simplified green dot */}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center gap-0.5 flex-1">
              <h2 className=" font-bold text-[#181d27] text-lg leading-7 [direction:rtl]">
                المناطق
              </h2>
            </div>
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl bg-white p-6">
          <div className="h-[228px]">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupervisorStatistics;
