import { CheckIcon, ChevronDownIcon, MailIcon } from "lucide-react";
import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { useNavigate, useNavigation } from "@remix-run/react";
import LoadingOverlay from "~/components/loading-overlay";

export const NewRegister = (): JSX.Element => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const schoolOptions = [
    { id: 1, name: "مدرسة" },
    { id: 2, name: "مدرسة" },
    { id: 3, name: "مدرسة" },
    { id: 4, name: "مدرسة" },
  ];

  return (
    <div className="bg-white flex h-screen w-full " dir="rtl">
      <div  className="flex flex-col  w-full h-full    ">
        {/* Logo section */}
        <div className="absolute w-[110px] h-[70px] top-[62px] left-[1214px]">
          <div className="relative h-[70px]">
            <img
              className="absolute w-[38px] h-[37px] top-0 left-0"
              alt="Group"
              src="app/assets/images/new-design/login/group.png"
            />
            <img
              className="absolute w-[77px] h-9 top-[34px] left-[33px]"
              alt="Group"
              src="app/assets/images/new-design/login/group-1.png"
            />
          </div>
        </div>

        {navigation.state === "loading" && (
          <LoadingOverlay message="جاري التحميل" />
        )}
        <button
          onClick={() => navigate("/")}
          className="button  font-bold text-center text-xs md:text-sm  md:p-3 rounded-lg text-gray-700 hover:bg-black/5 transition-all absolute w-[50px] h-[50px] top-[61px] left-[676px]"
        >
          <img
            className=" w-[26px] h-[26px] "
            alt="Group"
            src="app/assets/images/new-design/login/group-30525.png"
          />
        </button>

        {/* Left section background */}


        {/* Header section */}
        <header className="flex flex-col w-[360px] items-end gap-6 absolute top-[185px] left-[964px] bg-transparent">
          <div className="flex-col items-end gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="self-stretch mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-3xl [direction:rtl] relative tracking-[0] leading-6">
              تسجيل حساب جديد
            </div>
            <div className="relative self-stretch [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#535861] text-base tracking-[0] leading-6 [direction:rtl]">
              يرجى تسجيل بياناتك
            </div>
          </div>
        </header>

        {/* Role selection toggle */}
        <ToggleGroup
          type="single"
          defaultValue="مشرف"
          className="flex w-[313px] h-11 items-center justify-center gap-0.5 absolute top-[568px] left-[1015px] bg-neutral-50 rounded-lg border border-solid border-[#e9e9eb]"
        >
          <ToggleGroupItem
            value="مدرب"
            className="flex h-11 items-center justify-center gap-2 px-3 py-2 relative flex-1 grow rounded-lg overflow-hidden data-[state=off]:bg-transparent data-[state=on]:bg-white data-[state=on]:border data-[state=on]:border-solid data-[state=on]:border-[#d5d6d9] data-[state=on]:shadow-shadows-shadow-xs"
          >
            <div className="w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#717680] text-base text-left whitespace-nowrap [direction:rtl] relative tracking-[0] leading-6 data-[state=on]:text-[#414651]">
              مدرب
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="مشرف"
            className="flex h-11 items-center justify-center gap-2 px-3 py-2 relative flex-1 grow rounded-lg overflow-hidden data-[state=off]:bg-transparent data-[state=on]:bg-white data-[state=on]:border data-[state=on]:border-solid data-[state=on]:border-[#d5d6d9] data-[state=on]:shadow-shadows-shadow-xs"
          >
            <div className="w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-base text-left whitespace-nowrap [direction:rtl] relative tracking-[0] leading-6">
              مشرف
            </div>
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Education Department Field */}
        <div className="top-[370px] flex flex-col w-[313px] items-center gap-1.5 absolute left-[677px]">
          <div className="flex flex-col items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                الإدارة التابعة
              </div>
              <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                *
              </div>
            </div>
            <Select>
              <SelectTrigger className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto] [direction:rtl]">
                <div className="flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base [direction:rtl] relative tracking-[0] leading-6">
                  إدارة تعليم
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">إدارة تعليم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Region Field */}
        <div className="top-[276px] flex flex-col w-[313px] items-center gap-1.5 absolute left-[677px]">
          <div className="flex flex-col items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                المنطقة
              </div>
              <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                *
              </div>
            </div>
            <Select>
              <SelectTrigger className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto] [direction:rtl]">
                <div className="flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base [direction:rtl] relative tracking-[0] leading-6">
                  الرياض
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riyadh">الرياض</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* School Field with Dropdown */}
        <div className="flex flex-col w-[313px] h-[252px] items-end gap-1.5 absolute top-[464px] left-[677px]">
          <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
              المدرسة
            </div>
            <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
              *
            </div>
          </div>

          <Select>
            <SelectTrigger className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto] [direction:rtl]">
              <div className="flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base [direction:rtl] relative tracking-[0] leading-6">
                مدرسة خالد بن الوليد
              </div>
            </SelectTrigger>
            <SelectContent className="max-h-64 [direction:rtl]">
              {schoolOptions.map((school, index) => (
                <SelectItem
                  key={school.id}
                  value={`school-${school.id}`}
                  className={index === 1 ? "bg-neutral-50" : ""}
                >
                  <div className="flex items-center gap-2">
                    {/* {index === 1 && <CheckIcon className="w-5 h-5" />} */}
                    <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#181d27] text-base">
                      {school.name}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Right side form fields */}
        <div className="inline-flex flex-col items-start gap-6 absolute top-[276px] left-[1015px]">
          {/* Full Name Field */}
          <div className="flex-col w-[313px] gap-1.5 flex items-center relative flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  {" "}
                  الاسم الرباعي
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  *
                </div>
              </div>
              <Input
                className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto] [direction:rtl]"
                defaultValue="خالد محمد المسلم"
                dir="rtl"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="flex-col w-[313px] gap-1.5 flex items-center relative flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  رقم الجوال
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  *
                </div>
              </div>
              <div className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto]">
                <Input
                  className="flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base text-right relative tracking-[0] leading-6 border-0 shadow-none p-0"
                  defaultValue="+966 (555) 000-0000"
                />
                <div className="flex w-[54px] h-5 items-center justify-end gap-1 px-3 py-2 relative overflow-hidden">
                  <ChevronDownIcon className="mt-[-8.00px] mb-[-8.00px] ml-[-12.00px] relative w-5 h-5" />
                  <div className="relative w-fit mt-[-11.00px] mb-[-9.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#414651] text-base tracking-[0] leading-6 whitespace-nowrap">
                    SA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="flex-col w-[313px] gap-1.5 flex items-center relative flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  البريد الإلكتروني
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-x-1c-8-1ac text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  *
                </div>
              </div>
              <div className="justify-end gap-2 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs flex items-center relative flex-[0_0_auto]">
                <div className="items-center justify-end flex gap-2 relative flex-1 grow">
                  <Input
                    className="flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base text-right relative tracking-[0] leading-6 border-0 shadow-none p-0"
                    defaultValue="Kmsalms@gmail.com"
                  />
                  <MailIcon className="relative w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="absolute w-[655px] h-[52px] top-[755px] left-[675px] bg-[#006E7F] hover:bg-[#005a68] text-white rounded-lg [direction:rtl] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-base">
          تسجيل
        </Button>
      </div>
      <div   
         className="w-[805px] h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(app/assets/images/new-design/login/section.png)",
          }}
        />
    </div>
  );
};
