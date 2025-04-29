import { BellIcon, SearchIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../../components/UI-dashbord/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../../components/UI-dashbord/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { id: 1, label: "الرئيسة", hasDropdown: false },
    { id: 2, label: "يانعة", hasDropdown: true },
    { id: 3, label: "أهداف البرنامج", hasDropdown: true },
    { id: 4, label: "المسارات", hasDropdown: true },
    { id: 5, label: "مركز المعرفة", hasDropdown: true },
    { id: 6, label: "تواصل معنا", hasDropdown: true },
  ];

  return (
    <header className="w-full flex justify-center bg-white border-b border-[#e9e9eb] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl h-[72px] items-center justify-between w-full flex px-8 py-0">
        {/* Left side - User profile and utility icons */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <Avatar className="w-10 h-10 bg-neutral-100 border-[0.75px] border-solid border-[#00000014]">
              <AvatarFallback className="text-[#717680] font-semibold">
                OR
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-start gap-1">
            <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
              <BellIcon className="w-5 h-5" />
            </button>

            <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
              <SettingsIcon className="w-5 h-5" />
            </button>

            <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right side - Navigation and logo */}
        <div className="flex items-center gap-10">
          <NavigationMenu dir="rtl" className="max-w-none">
            <NavigationMenuList className="flex items-center gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.hasDropdown ? (
                    <NavigationMenuTrigger className="px-0 py-1 bg-transparent hover:bg-transparent focus:bg-transparent">
                      <div className="flex items-center justify-center gap-2">
                        <span className="mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-gray-600 text-base text-left tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                          {item.label}
                        </span>
                      </div>
                    </NavigationMenuTrigger>
                  ) : (
                    <div className="px-0 py-1">
                      <div className="flex items-center justify-center gap-2">
                        <span className="mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-gray-600 text-base text-left tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative w-[108.22px] h-[32.65px]">
            <img
              className="absolute w-[33px] h-[33px] top-0 left-0"
              alt="Logo part 1"
              src="/group-3.png"
            />
            <img
              className="absolute w-[68px] h-8 top-0 left-[41px]"
              alt="Logo part 2"
              src="/group-4.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};