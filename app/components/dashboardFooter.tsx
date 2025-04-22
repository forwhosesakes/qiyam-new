import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/UI-dashbord/navigation-menu";
import { Separator } from "../components/UI-dashbord/separator";
import group from "../assets/images/new-design/footer/group.png";
import group1 from "../assets/images/new-design/footer/group-1.png";
import group2 from "../assets/images/new-design/footer/group-2.png";
import facebookIcon from "../assets/images/new-design/footer/social-icon.svg";
import youtubeIcon from "../assets/images/new-design/footer/social-icon-1.svg";

const DashboardFooter = (): JSX.Element => {
  // Footer navigation links data
  const navigationLinks = [
    { id: 1, text: "حول البرنامج" },
    { id: 2, text: "شروط التسجيل" },
    { id: 3, text: "مستويات البرنامج" },
    { id: 4, text: "تواصل معنا" },
    { id: 5, text: "الخصوصية" },
  ];

  // Social media icons data
  const socialIcons = [
    {
      id: 1,
      src: "app/assets/images/new-design/footer/social-icon.svg",
      alt: "Social icon",
    },
    {
      id: 2,
      src: "app/assets/images/new-design/footer/social-icon-1.svg",
      alt: "Social icon",
    },
  ];

  return (
    <div className="w-full mt-[344px]">
      <div className="h-[461px]">
        <div className="relative w-full h-[461px]">
          <footer
            className="flex flex-col w-full items-center gap-16 pt-16 pb-12 px-0 bg-[#006173]"
            dir="rtl"
          >
            <div className="flex-col w-full max-w-[1280px] items-start gap-12 flex px-8 py-0 relative">
              <div className="flex items-start gap-8 self-stretch w-full">
                <div className="flex flex-col items-start gap-8 flex-1">
                  <div className="flex flex-col items-end gap-8">
                    <div className="relative w-full h-[91.63px]">
                      <div className="relative w-36 h-[92px]">
                        <img
                          className="absolute w-[50px] h-12 top-0 left-0"
                          alt="Group"
                          src={group1}
                        />
                        <img
                          className="absolute w-[101px] h-12 top-11 left-[43px]"
                          alt="Group"
                          src={group2}
                        />
                      </div>
                    </div>

                    <div className="relative w-[451px] mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 [direction:rtl]">
                      برنامج نوعي على مستوى المملكة موجه للفتيات، لتمكينهن من
                      تحصيل الساعات التطوعية المحددة لهن كمتطلب تخرج من التعليم
                      العام
                    </div>
                  </div>

                  <NavigationMenu className="w-full">
                    <NavigationMenuList className="flex items-start gap-8 w-full justify-start">
                      {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.id}>
                          <NavigationMenuLink className="inline-flex items-center justify-end gap-2">
                            <div className="inline-flex items-start">
                              <div className="inline-flex items-center justify-center gap-2">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-base text-left tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                                  {link.text}
                                </div>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
            </div>

            <div className="flex-col w-full max-w-[1280px] items-start gap-8 flex px-8 py-0">
              <Separator className="w-full h-px bg-white" />

              <div className="flex items-center gap-8 self-stretch w-full">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-white text-base text-left tracking-[0] leading-6 [direction:rtl]">
                  © جميع الحقوق محفوظة لجمعية رواء العلم.
                </div>

                <div className="inline-flex items-center gap-6">
                  {socialIcons.map((icon) => (
                    <img
                      key={icon.id}
                      className="relative w-6 h-6"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>
            </div>
          </footer>

          <img
            className="absolute w-56 h-[218px] top-[55px] left-[104px]"
            alt="Group"
            src={group}
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardFooter;
