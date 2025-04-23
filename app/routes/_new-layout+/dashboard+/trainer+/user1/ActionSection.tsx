import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../../components/UI-dashbord/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../../components/UI-dashbord/card";
import { Checkbox } from "../../../../../components/UI-dashbord/checkbox";

// Skills data organized by columns
const skillsData = [
  // Column 1
  [
    { id: "skill1", label: "معرفة مفهوم التطوع شرعا ونظاما", checked: false },
    { id: "skill2", label: "مهارات الحوار والعمل الجماعي", checked: false },
    { id: "skill3", label: "مهارات الاتصال", checked: false },
    { id: "skill4", label: "تنمية الوعي الذاتي", checked: false },
    {
      id: "skill5",
      label: "استخدام الأدوات الرقمية في الأنشطة التطوعية",
      checked: false,
    },
    { id: "skill6", label: "الثقة بالنفس", checked: false },
    {
      id: "skill7",
      label: "تحديد المسار التعليمي والمهني المناسب",
      checked: false,
    },
  ],
  // Column 2
  [
    { id: "skill8", label: "إدارة الوقت", checked: false },
    { id: "skill9", label: "تحديد حقوق وواجبات المتطوع", checked: false },
    {
      id: "skill10",
      label: "إدراك الأدوار الاجتماعية المختلفة",
      checked: false,
    },
    { id: "skill11", label: "مهارات التفكير الناقد", checked: false },
    { id: "skill12", label: "حل المشكلات", checked: false },
    {
      id: "skill13",
      label: "الاعتزاز بالثقافة والهوية الوطنية",
      checked: false,
    },
    { id: "skill14", label: "مهارات الإبداع", checked: false },
  ],
  // Column 3
  [
    {
      id: "skill15",
      label: "الصلابة النفسية، والتعامل مع التحديات",
      checked: false,
    },
    {
      id: "skill16",
      label: "تحديد المسار التعليمي والمهني المناسب",
      checked: false,
    },
    { id: "skill17", label: "اكتشاف نقاط القوة وتوظيفها", checked: false },
    {
      id: "skill18",
      label: "بناء الهوية الذاتية والقيم الأصيلة",
      checked: false,
    },
    {
      id: "skill19",
      label: "التعرف على خصائص المرحلة العمرية",
      checked: false,
    },
    {
      id: "skill20",
      label: "امتلاك حساب في المنصة الوطنية للعمل التطوعي",
      checked: false,
    },
    { id: "skill21", label: "تحمل المسؤولية", checked: false },
  ],
];

export const ActionSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full gap-6 p-3 bg-white border border-[#d5d7da] rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between p-2 bg-[#199491] rounded-lg">
        <Button
          variant="outline"
          className="flex w-[120px] items-center justify-center gap-1 px-3 py-2 bg-[#ffffff] rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
        >
          <span className="relative w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
            حفظ
          </span>
        </Button>

        <div className="flex items-end justify-between w-48">
          <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-white text-xs [direction:rtl]">
            /22 مهارات مختارة
          </span>

          <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl [direction:rtl]">
            المهارات
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex justify-end gap-6 p-0">
        {skillsData.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="flex flex-col items-end gap-4 w-1/3"
          >
            {column.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-end gap-1.5 w-full"
              >
                <div className="flex flex-col items-end gap-1.5 flex-1">
                  <div className="inline-flex items-start gap-1.5">
                    <div className="inline-flex items-start justify-end gap-2">
                      <div className="inline-flex flex-col items-start">
                        <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-black text-sm text-left leading-5 whitespace-nowrap [direction:rtl]">
                          {skill.label}
                        </span>
                      </div>

                      <div className="inline-flex items-center justify-center pt-0.5">
                        {skill.checked ? (
                          <div className="relative w-4 h-4 bg-[#199491] rounded overflow-hidden">
                            <CheckIcon className="absolute w-3 h-3 top-0.5 left-0.5 text-white" />
                          </div>
                        ) : (
                          <Checkbox
                            id={skill.id}
                            className="w-4 h-4 rounded border border-[#199491] data-[state=checked]:bg-[#199491]"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
