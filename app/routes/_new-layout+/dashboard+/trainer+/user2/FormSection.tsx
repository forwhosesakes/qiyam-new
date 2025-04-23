 
import React, { useState } from "react";
import { Button } from "../../../../../components/UI-dashbord/button";
import { Card } from "../../../../../components/UI-dashbord/card";
import { Textarea } from "../../../../../components/UI-dashbord/textarea";

export const FormSection = (): JSX.Element => {
  const [activeOpinionId, setActiveOpinionId] = useState(null);
  const toggleActiveOpinion = (id: any) => {
    setActiveOpinionId((prevId) => (prevId === id ? null : id));
  };
  const opinions = [
    { id: 1, title: "الرأي الأول" },
    { id: 2, title: "الرأي الثاني" },
    { id: 3, title: "الرأي الثالث" },
    { id: 4, title: "الرأي الرابع" },
    { id: 5, title: "الرأي الخامس" },
  ];

  return (
    <Card className="flex flex-col w-full   gap-[19px] p-[18px] bg-white border border-[#d5d7da] rounded-xl">
      <div className="flex items-center justify-between px-2 py-1 bg-[#199491] rounded-lg">
        <Button
          variant="outline"
          className="flex w-[120px] items-center justify-center gap-1 px-3 py-2 bg-[#ffffff] rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
        >
          <span className="relative w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
            حفظ
          </span>
        </Button>

        <div className="flex items-center">
          <h2 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl [direction:rtl]">
            أراء المتدربات
          </h2>
        </div>
      </div>

      {opinions.map((opinion) => (
        <React.Fragment key={opinion.id}>
          <Card
            onClick={() => toggleActiveOpinion(opinion.id)}
            className={`flex w-full items-center justify-between p-3 ${
              opinion.id === activeOpinionId ? "bg-[#ebedf0]" : "bg-[#f9f9f9]"
            } rounded-lg cursor-pointer`}
          >
            <div className="flex items-center">
              {opinion.id === activeOpinionId ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 6.66675V13.3334M7.16663 10.0001H13.8333M18.8333 10.0001C18.8333 14.6025 15.1023 18.3334 10.5 18.3334C5.89759 18.3334 2.16663 14.6025 2.16663 10.0001C2.16663 5.39771 5.89759 1.66675 10.5 1.66675C15.1023 1.66675 18.8333 5.39771 18.8333 10.0001Z"
                    stroke="#414651"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="flex items-start justify-end flex-1">
              <div className="flex w-full max-w-[603px] items-end">
                <div className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-base [direction:rtl]">
                  {opinion.title}
                </div>
              </div>
            </div>
          </Card>

          {opinion.id === activeOpinionId && (
            <div className="w-full">
              <Textarea
                className="h-[70px] px-3.5 py-3 bg-white rounded-lg border border-[#d5d6d9] shadow-shadows-shadow-xs [direction:rtl]"
                placeholder="اكتب هنا"
                dir="rtl"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </Card>
  );
};
