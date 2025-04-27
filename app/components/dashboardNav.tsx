import { BellIcon, SearchIcon, SettingsIcon, LogOut } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "./UI-dashbord/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./UI-dashbord/navigation-menu";
import yaniaLogo from "~/assets/images/new-design/yania-logo.png";
import {
  NavLink,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "@remix-run/react";
import { useReducer } from "react";

export default function dashboardNav() {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const { user } = useRouteLoaderData<any>("root");

  const [isMenuOpen, toggleMenu] = useReducer((st) => !st, false);

  const handleLogout = () => {
    navigate("/logout");
  };

  const AuthActions = () =>
    user ? (
      <div className="flex items-center gap-4 flex-row ">
        <div className="flex items-start gap-1  [direction:rtl] ">
          <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
            <SearchIcon className="w-5 h-5" />
          </button>
          <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
            <SettingsIcon className="w-5 h-5" />
          </button>
          <button className="flex w-10 items-center justify-center p-2 rounded-md overflow-hidden">
            <BellIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-start">
          <Avatar className="w-10 h-10 bg-neutral-100 border-[0.75px] border-solid border-[#00000014]">
            <AvatarFallback className="text-[#717680] font-semibold">
              OR
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    ) : (
      <div className="visitors flex flex-auto  justify-end  gap-x-4">
        <button
          onClick={() => navigate("/join")}
          className="button font-bold text-xs  md:text-sm text-center p-3 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
        >
          {" "}
          انضمام
        </button>
        <button
          onClick={() => navigate("/login")}
          className="button font-bold text-xs  md:text-sm text-center p-3 rounded-lg text-gray-700 hover:bg-black/5 transition-all"
        >
          دخول
        </button>
      </div>
    );
  // Navigation menu items data
  const menuItems = [
    { id: 7, label: "تواصل معنا", hasDropdown: true },
    { id: 6, label: "المسارات", path: "/#paths", hasDropdown: true },
    {
      id: 5,
      label: "أهداف البرنامج",
      path: "/#goals",
      hasDropdown: true,
    },
    {
      id: 4,
      label: "يانعة",
      path: "/#about",
      hasDropdown: true,
    },
    {
      id: 3,
      label: "مركز المعرفة",
      path: "/dashboard/infoCenter",
      hasDropdown: false,
    },
    {
      id: 2,
      label: "حسابي",
      path: "/dashboard/trainer/trainerProfile",
      hasDropdown: false,
    },
    { id: 1, label: "الرئيسة", path: "/", hasDropdown: false },
  ];

  return (
    <header
      className="w-full flex justify-center bg-white border-b border-[#e9e9eb] fixed top-0 left-0 right-0 z-50   "
      dir="rtl"
    >
      <div className="max-w-screen-xl h-[72px] items-center justify-between w-full flex px-8 py-0 ">
        {/* Right side - Navigation and logo */}
        <div className="flex items-center gap-10">
          <div className="relative w-[108.22px] h-[32.65px]">
            <img
              className="absolute w-[108px] h-[33px] top-0 left-0"
              alt="Logo part 1"
              src={yaniaLogo}
            />
            {/* <img
              className="absolute w-[68px] h-8 top-0 left-[41px]"
              alt="Logo part 2"
              src={group4}
            /> */}
          </div>
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex items-center gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.hasDropdown ? (
                    <NavigationMenuTrigger className=" hover:none hover:bg-transparent  [direction:rtl]">
                      <div className="flex flex-row-reverse items-center justify-center  ">
                        <span className="  font-bold text-[#475467] text-base text-left tracking-[0] leading-6 whitespace-nowrap">
                          {item.label}
                        </span>
                      </div>
                    </NavigationMenuTrigger>
                  ) : (
                    <div className="px-0 py-1">
                      <div className="flex items-center justify-center flex-row-reverse  ">
                        <button
                          onClick={() => item.path && navigate(`${item.path}`)}
                          className="mt-[-1.00px] font-bold text-[#475467] text-base text-left tracking-[0] leading-6 whitespace-nowrap"
                        >
                          {item.label}
                        </button>
                      </div>
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Left side - User profile and utility icons */}
        <AuthActions />
      </div>
    </header>
  );
}
