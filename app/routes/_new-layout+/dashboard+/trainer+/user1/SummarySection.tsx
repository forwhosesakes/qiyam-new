import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../components/UI-dashbord/avatar";
import { Badge } from "../../../../../components/UI-dashbord/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../../components/UI-dashbord/breadcrumb";

export const SummarySection = (): JSX.Element => {
  // User data
  const userData = {
    name: "نورة علي",
    role: "مدربة",
    avatarUrl: "../avatar.png",
    isOnline: true,
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "الرئيسة", href: "#", isCurrent: false },
    { label: "لوحة التحكم", href: "#", isCurrent: false },
    { label: "حسابي", href: "#", isCurrent: true },
  ];

  return (
    <header className="flex justify-between items-center w-full py-4 px-6 mt-4 mb-2 dir-rtl">
      {/* User profile section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-[66px] w-[66px] border border-solid border-[#d0d5dd] shadow-focus-ring-4px-primary-100">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {userData.isOnline && (
            <Badge className="absolute bottom-1 right-1 w-[19px] h-[19px] p-0 bg-success-500 rounded-lg border-[1.5px] border-solid border-[#ffffff]" />
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#ffffff] text-base tracking-[0] leading-[normal] [direction:rtl]">
            {userData.name}
          </h3>
          <span className="[font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[normal] [direction:rtl]">
            {userData.role}
          </span>
        </div>
      </div>

      {/* Page title and breadcrumb */}
      <div className="flex flex-col items-end">
        <h1 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0] leading-[normal] [direction:rtl] mb-2">
          حسابي
        </h1>

        <Breadcrumb className="flex-row-reverse">
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <img
                      className="w-5 h-5 rotate-180"
                      alt="Chevron"
                      src="/chevron.svg"
                    />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    className={`[direction:rtl] whitespace-nowrap ${
                      item.isCurrent
                        ? "[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold"
                        : "[font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal"
                    } text-[#ffffff] text-base leading-[22px]`}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};
