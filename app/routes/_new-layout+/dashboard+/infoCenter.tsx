import React from "react";
import { DownloadCloudIcon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
const cn = (...inputs: (string | undefined)[]) => {
  return twMerge(clsx(inputs));
};

// Type definitions
interface ProgramSection {
  id: number;
  title: string;
  files: FileItem[];
}

interface FileItem {
  id: number;
  title: string;
  description: string;
  fileType: string;
  progress?: string;
  uploaded?: string;
}

interface ArticleCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Component definitions
const Badge = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
};

const Button = ({
  className,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        // variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        // variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
};

const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
};

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("p-6", className)} {...props} />;
};

const Tabs = ({
  className,
  defaultValue,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { defaultValue: string }) => {
  return (
    <div className={cn("", className)} data-state={defaultValue} {...props} />
  );
};

const TabsList = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};

const TabsTrigger = ({
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { value: string }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  );
};

// Main component
const NCFiles = () => {
  // Navigation tab data
  const navigationTabs = [
    { id: "knowledge-center", label: "مركز المعرفة", isActive: true },
    { id: "program-guides", label: "أدلة البرنامج", badge: "2" },
    { id: "program-activities", label: "أنشطة البرنامج" },
    { id: "volunteer-opportunities", label: "بنك الفرص التطوعية" },
    { id: "motivation-tools", label: "أدوات التحفيز" },
  ];

  // Program sections data
  const programSections: ProgramSection[] = [
    {
      id: 1,
      title: "أدلة البرنامج",
      files: [
        {
          id: 1,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "PDF",
        },
        {
          id: 2,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "MP4",
        },
        {
          id: 3,
          title: "خطوات عملية للتطوع",
          description: "4.2 MB – 70% uploaded",
          fileType: "FIG",
          progress: "70%",
          uploaded: "4.2 MB",
        },
      ],
    },
    {
      id: 2,
      title: "أنشطة البرنامج",
      files: [
        {
          id: 1,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "PDF",
        },
        {
          id: 2,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "MP4",
        },
      ],
    },
    {
      id: 3,
      title: "بنك الفرص التطوعية",
      files: [
        {
          id: 1,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "PDF",
        },
        {
          id: 2,
          title: "التطوع منهج حياة",
          description:
            "هنا وصف الملف الذي سوق يظهر للمستخدم وهو مكون من شرح قصير",
          fileType: "MP4",
        },
      ],
    },
  ];

  // Article cards data
  const articleCards: ArticleCard[] = [
    {
      id: 1,
      image: "/image-3.png",
      title: "واقعنا والقيم",
      description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    },
    {
      id: 2,
      image: "/image-2.png",
      title: "واقعنا والقيم",
      description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    },
    {
      id: 3,
      image: "/image-2.png",
      title: "واقعنا والقيم",
      description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    },
    {
      id: 4,
      image: "/image-3.png",
      title: "واقعنا والقيم",
      description: "هنا نص بداية المقال وهو نص حسب المحتوى",
    },
  ];

  return (
    <Card className="flex flex-col w-full max-w-[1216px] gap-8 p-4 bg-white rounded-2xl">
      {/* Navigation Tabs */}
      <Tabs defaultValue="knowledge-center" dir="rtl" className="w-full">
        <TabsList className="flex items-center justify-center gap-1 p-1.5 w-full bg-neutral-50 rounded-xl border border-solid border-[#e9e9eb]">
          {navigationTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`flex h-11 items-center justify-center gap-2 px-3 py-2 flex-1 rounded-md ${
                tab.isActive
                  ? "bg-white shadow-shadows-shadow-sm text-[#414651]"
                  : "bg-transparent text-[#717680]"
              }`}
            >
              <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-base tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                {tab.label}
              </span>

              {tab.badge && (
                <Badge
                  // variant="outline"
                  className="px-2.5 py-0.5 bg-neutral-50 rounded-full border border-solid border-[#e9e9eb]"
                >
                  <span className="font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#414651] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)]">
                    {tab.badge}
                  </span>
                </Badge>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-12 w-full">
        {/* Program Sections */}
        {programSections.map((section) => (
          <section key={section.id} className="flex flex-col gap-14 w-full">
            <div className="flex items-center justify-end gap-2 pb-3 px-1 border-b-2 border-[#006173]">
              <Badge className="bg-[#1994910f] text-[#006173] border-[#19949166] rounded-full">
                2
              </Badge>
              <h2 className="text-[#006173] font-bold text-base [direction:rtl]">
                {section.title}
              </h2>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              {section.files.map((file) => (
                <Card
                  key={file.id}
                  className="w-full bg-white border-[#e9e9eb] rounded-xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start justify-end gap-3 p-5 [direction:rtl]">
                      <div className="w-10 h-10">
                        <div className="relative w-8 h-10 left-1">
                          <img
                            className="w-8 h-10"
                            alt="Page"
                            src="/page.svg"
                          />
                          <div className="absolute w-8 top-[5px] left-0 font-bold text-white text-[9px] text-center">
                            {file.fileType}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col flex-1">
                        <h3 className="font-medium text-[#414651] text-sm [direction:rtl]">
                          {file.title}
                        </h3>
                        <p className="font-normal text-[#535861] text-sm [direction:rtl]">
                          {file.description}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-2 bg-white border-[#d5d6d9] rounded-lg shadow-shadows-shadow-xs-skeuomorphic"
                      >
                        <DownloadCloudIcon className="w-5 h-5" />
                        <span className="font-bold text-[#414651] text-sm [direction:rtl]">
                          تحميل
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Motivation Tools Section */}
        <section className="flex flex-col gap-14 w-full">
          <div className="flex items-center justify-end gap-2 pb-3 px-1 border-b-2 border-[#006173]">
            <Badge className="bg-[#1994910f] text-[#006173] border-[#19949166] rounded-full">
              2
            </Badge>
            <h2 className="text-[#006173] font-bold text-base [direction:rtl]">
              أدوات التحفيز
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-[29.61px] w-full">
            {articleCards.map((article) => (
              <Card
                key={article.id}
                className="w-[258.91px] bg-white rounded-[11.77px] shadow-[0px_1.47px_2.94px_-1.47px_#1018280f,0px_2.94px_5.88px_-1.47px_#1018281a]"
              >
                <CardContent className="flex flex-col items-end gap-[17.65px] p-[11.77px]">
                  <img
                    className="w-full h-[183.89px] object-cover"
                    alt="Article image"
                    src={article.image}
                  />

                  <div className="flex flex-col items-end justify-center gap-[5.88px] w-full">
                    <h3 className="self-stretch font-bold text-d-9d-9d-9 text-[13.2px] leading-[20.6px] [direction:rtl]">
                      {article.title}
                    </h3>
                    <p className="font-normal text-[#1f2a37] text-[11.8px] leading-[17.7px] whitespace-nowrap [direction:rtl]">
                      {article.description}
                    </p>
                  </div>

                  <Button className="h-[29.42px] px-[11.77px] py-0 bg-[#006173] text-white rounded-[5.88px] border-[0.74px] border-[#669ccd] flex items-center gap-[2.94px]">
                    <div className="w-[17.65px] h-[17.65px] relative">
                      <img
                        className="absolute w-[13px] h-2 top-[5px] left-0.5 -rotate-180"
                        alt="Elements"
                        src={`/elements${
                          article.id === 1 || article.id === 4
                            ? ""
                            : `-${article.id - 1}`
                        }.png`}
                      />
                    </div>
                    <span className="font-medium text-white text-[11.8px] leading-[17.7px] whitespace-nowrap [direction:rtl]">
                      قراءة المقال
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default NCFiles;
