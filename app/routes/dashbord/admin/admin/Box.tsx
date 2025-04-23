import { CheckIcon, UploadCloudIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../dashbord/dashboard-components/ui/badge";
import { Button } from "../../../dashbord/dashboard-components/ui/button";
import { Card, CardContent } from "../../../dashbord/dashboard-components/ui/card";
import { Progress } from "../../../dashbord/dashboard-components/ui/progress";
import { Separator } from "../../../dashbord/dashboard-components/ui/separator";

export const Boxe = (): JSX.Element => {
  // File cards data
  const fileCards = [
    {
      id: 1,
      name: "مقرر القيم 1",
      icon: "/group-30519.png",
      pdfIcon: "/pdf-01.svg",
    },
    {
      id: 2,
      name: "مقرر القيم 1",
      icon: "/group-30519-1.png",
      pdfIcon: "/pdf-01.svg",
    },
    {
      id: 3,
      name: "مقرر القيم 1",
      icon: "/group-30519-2.png",
      pdfIcon: "/pdf-01.svg",
    },
    {
      id: 4,
      name: "مقرر القيم 1",
      icon: "/group-30519-3.png",
      pdfIcon: "/pdf-01.svg",
    },
  ];

  // Uploaded files data
  const uploadedFiles = [
    {
      id: 1,
      name: "التطوع منهج حياة",
      type: "PDF",
      size: "200 KB",
      progress: 100,
      status: "completed",
    },
    {
      id: 2,
      name: "كيف يمكن أن أتطوع",
      type: "MP4",
      size: "16 MB",
      progress: 70,
      status: "completed",
    },
    {
      id: 3,
      name: "خطوات عملية للتطوع",
      type: "FIG",
      size: "4.2 MB",
      progress: 70,
      status: "uploading",
    },
  ];

  return (
    <div className="relative w-full max-w-[906px] h-auto">
      <Card className="w-full h-auto border border-[#d0d5dd] rounded-2xl">
        <CardContent className="p-8">
          <div className="flex flex-col w-full items-start gap-4">
            {/* Upload Area */}
            <Card className="w-full bg-[#fdfdfd] border border-[#e4e7ec]">
              <CardContent className="flex flex-col items-center gap-3 py-4">
                <div className="relative w-[46px] h-[46px] bg-gray-100 rounded-[28px] border-[6px] border-solid border-[#f8f9fb] flex items-center justify-center">
                  <UploadCloudIcon className="w-5 h-5" />
                </div>

                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="flex items-start justify-center gap-1 w-full">
                    <div className="w-fit [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-gray-600 text-sm leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                      أو بالسحب والإفلات
                    </div>

                    <div className="inline-flex items-center justify-center gap-2">
                      <div className="w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#8bc53f] text-sm leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                        قم بالضغط للتحميل
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600 text-xs text-center leading-[18px] [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                    SVG, PNG, JPG or GIF (max.4.00 MB)
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer with buttons */}
            <footer className="flex flex-col w-full items-end bg-transparent">
              <div className="flex items-center justify-end gap-4 px-6 py-4 w-full">
                <div className="flex items-start gap-3">
                  <Button
                    variant="outline"
                    className="px-4 py-2.5 bg-white rounded-lg border border-[#cfd4dc] shadow-shadow-xs"
                  >
                    <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-gray-700 text-sm leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                      إلغاء
                    </span>
                  </Button>

                  <Button className="px-4 py-2.5 bg-[#006173] rounded-lg border border-[#0d3151] shadow-shadow-xs">
                    <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-sm leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                      حفظ الملفات
                    </span>
                  </Button>
                </div>
              </div>

              <Separator className="w-full h-px bg-gray-200" />
            </footer>

            {/* File cards */}
            <div className="flex w-full gap-6 items-center mt-8">
              {fileCards.map((card) => (
                <Card
                  key={card.id}
                  className="flex-1 flex items-center justify-center gap-[13.75px] px-[13.75px] py-[11px] bg-white rounded-[11px] border-[1.38px] border-dashed border-[#cfd4dc] shadow-[0px_1.38px_2.75px_#1018280d]"
                >
                  <img
                    className="w-[16.5px] h-[16.5px]"
                    alt="Group"
                    src={card.icon}
                  />

                  <div className="[font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-black text-[13.8px] leading-[27.5px] whitespace-nowrap tracking-[0] [direction:rtl]">
                    {card.name}
                  </div>

                  <img
                    className="w-[33px] h-[33px]"
                    alt="Pdf"
                    src={card.pdfIcon}
                  />
                </Card>
              ))}
            </div>

            {/* Uploaded items label */}
            <div className="flex items-center gap-[5px] self-end mt-4">
              <div className="w-[18px] h-[18px] bg-success-100 rounded-[9px] flex items-center justify-center">
                <CheckIcon className="w-[9px] h-[9px]" />
              </div>

              <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#039754] text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap [direction:rtl]">
                العناصر التي تم تحميلها
              </div>
            </div>

            {/* Status messages */}
            <div className="flex justify-end w-full gap-4 mt-2">
              <Badge className="inline-flex items-center gap-3 pl-2 pr-1 py-1 bg-success-50 rounded-2xl">
                <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-success-700 text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  تم رفع الملفات بنجاح
                </span>
                <Badge
                  variant="outline"
                  className="bg-white rounded-2xl border border-[#0dbd7563]"
                >
                  <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-success-700 text-sm text-center leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                    نجاح
                  </span>
                </Badge>
              </Badge>

              <Badge className="inline-flex items-center gap-3 pl-2 pr-1 py-1 bg-[#fef3f2] rounded-2xl">
                <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#b32318] text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  تأكد من حجم أو نوع الملف
                </span>
                <Badge
                  variant="outline"
                  className="bg-white rounded-2xl border border-[#fecdc9]"
                >
                  <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#b32218] text-sm text-center leading-5 whitespace-nowrap tracking-[0] [direction:rtl]">
                    خطأ
                  </span>
                </Badge>
              </Badge>
            </div>

            {/* Uploaded files list */}
            <div className="w-full flex flex-col items-start gap-4 mt-8">
              {uploadedFiles.map((file) => (
                <Card
                  key={file.id}
                  className="w-full h-[72px] bg-white rounded-xl border border-[#e9e9eb] overflow-hidden"
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center justify-between h-full p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                          <div className="relative w-8 h-10 left-1">
                            <img
                              className="absolute w-8 h-10 top-0 left-0"
                              alt="Page"
                              src="/page.svg"
                            />
                            <div className="absolute w-8 top-[22px] left-0 [font-family:'Inter',Helvetica] font-bold text-white text-[9px] text-center tracking-[0] leading-[normal]">
                              {file.type}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 flex-1">
                          <div className="self-stretch [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm leading-5 tracking-[0] [direction:rtl]">
                            {file.name}
                          </div>
                          <div className="self-stretch font-text-sm-regular text-[#535861] text-right tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)]">
                            {file.size} – {file.progress}% uploaded
                          </div>
                        </div>
                      </div>

                      {file.status === "completed" ? (
                        <div className="w-4 h-4 bg-[#68c35c] rounded flex items-center justify-center">
                          <img
                            className="w-3 h-3"
                            alt="Check"
                            src="/check.svg"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8">
                          <Progress
                            value={file.progress}
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
