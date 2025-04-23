import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import materialDB from "~/db/material/material.server";

import {
  CheckCircleIcon,
  MailIcon,
  MapPinIcon,
  MinusCircleIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./assets/avatar";
import { Badge } from "./assets/badge";
import { Button } from "./assets/button";
import { Card, CardContent } from "./assets/card";
import { Checkbox } from "./assets/checkbox";
import { Progress } from "./assets/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./assets/tabs";
import { Textarea } from "./assets/textarea";
import { useState } from "react";
import { NavFeaturedCard } from "./NavFeatureCard";

export async function loader({ request, context, params }: LoaderFunctionArgs) {
  return materialDB
    .getAllMaterials(context.cloudflare.env.DATABASE_URL)
    .then((res: any) => {
      return Response.json(res.data);
    })
    .catch(() => {
      return null;
    });
}

export const TrainerProfile = () => {
  // Data for review opinions
  const opinions = [
    { id: 1, title: "الرأي الأول", active: true },
    { id: 2, title: "الرأي الثاني", active: false },
    { id: 3, title: "الرأي الثالث", active: false },
    { id: 4, title: "الرأي الرابع", active: false },
    { id: 5, title: "الرأي الخامس", active: false },
  ];

  // Data for progress checklist
  const progressItems = [
    { id: 1, title: "التقارير", completed: true },
    { id: 2, title: "رأي المتدربات", completed: true },
    { id: 3, title: "المهارات", completed: true },
  ];

  // Data for sidebar menu items
  const menuItems = [
    { id: 1, title: "مركز المعرفة" },
    { id: 2, title: "شهاداتي" },
    { id: 3, title: "ركائز نجاح البرنامج" },
    { id: 4, title: "تقرير إنجازاتي" },
  ];

  // User data for feedback section
  const userData = [
    {
      id: 1,
      label: "الاسم : نورة علي",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      id: 2,
      label: "الجوال : 123456789",
      icon: <PhoneIcon className="w-5 h-5" />,
    },
    {
      id: 3,
      label: "الايميل : kmsalms@gmail.com",
      icon: <MailIcon className="w-5 h-5" />,
    },
    {
      id: 4,
      label: "المنطقة : الرياض",
      icon: <MapPinIcon className="w-5 h-5" />,
    },
    { id: 5, label: "الإدارة : تعليم الزلفي", icon: null },
  ];

  // Message data for navigation section
  const messageData = {
    author: "أ/ محمد المسلم مشرف تربوي",
    timeAgo: "منذ دقيقتين",
    content:
      "شكرا على جعودكم الكريمة أ.نورة الشهري , على جهدكم المبذول الكبير , مع تمنياتنا لكم بالتوفيق الكبير",
    avatarUrl: "./trainer+/assets/avatar.png",
    verifiedIconUrl: "./trainer+/assets/verified-tick.svg",
  };

  // Data for metric cards
  const metricCards = [
    { title: "المتطوعات المشاركات", value: "45" },
    { title: "الأنشطة التي نفذت", value: "45" },
    { title: "الفرص التطوعية المنفذة", value: "45" },
    { title: "القيمية الاقتصادية من التطوع", value: "0" },
    { title: "الساعات التطوعية المحققة", value: "0" },
    { title: "المهارات اللي تم تدريب الفتيات عليها", value: "45" },
    { title: "القيمة الاقتصادية للمهارات", value: "45" },
  ];

  // Data for the skills checklist organized in columns
  const [skillsColumns, setSkillsColumns] = useState([
    [
      { id: "concept", label: "معرفة مفهوم التطوع شرعا ونظاما", checked: true },
      { id: "dialogue", label: "مهارات الحوار والعمل الجماعي", checked: false },
      { id: "communication", label: "مهارات الاتصال", checked: false },
      { id: "selfAwareness", label: "تنمية الوعي الذاتي", checked: true },
      {
        id: "digitalTools",
        label: "استخدام الأدوات الرقمية في الأنشطة التطوعية",
        checked: false,
      },
      { id: "selfConfidence", label: "الثقة بالنفس", checked: false },
      {
        id: "careerPath",
        label: "تحديد المسار التعليمي والمهني المناسب",
        checked: false,
      },
    ],
    [
      { id: "timeManagement", label: "إدارة الوقت", checked: false },
      {
        id: "rightsAndDuties",
        label: "تحديد حقوق وواجبات المتطوع",
        checked: false,
      },
      {
        id: "socialRoles",
        label: "إدراك الأدوار الاجتماعية المختلفة",
        checked: false,
      },
      {
        id: "criticalThinking",
        label: "مهارات التفكير الناقد",
        checked: false,
      },
      { id: "problemSolving", label: "حل المشكلات", checked: false },
      {
        id: "nationalIdentity",
        label: "الاعتزاز بالثقافة والهوية الوطنية",
        checked: false,
      },
      { id: "creativity", label: "مهارات الإبداع", checked: false },
    ],
    [
      {
        id: "resilience",
        label: "الصلابة النفسية، والتعامل مع التحديات",
        checked: false,
      },
      {
        id: "careerPlanning",
        label: "تحديد المسار التعليمي والمهني المناسب",
        checked: false,
      },
      { id: "strengths", label: "اكتشاف نقاط القوة وتوظيفها", checked: false },
      {
        id: "identity",
        label: "بناء الهوية الذاتية والقيم الأصيلة",
        checked: false,
      },
      {
        id: "ageCharacteristics",
        label: "التعرف على خصائص المرحلة العمرية",
        checked: false,
      },
      {
        id: "platformAccount",
        label: "امتلاك حساب في المنصة الوطنية للعمل التطوعي",
        checked: false,
      },
      { id: "responsibility", label: "تحمل المسؤولية", checked: false },
    ],
  ]);
  const handleCheckboxChange = (columnIndex: number, skillIndex: number) => {
    console.log("Updated Columns:"); // Debugging

    setSkillsColumns((prevColumns) => {
      console.log("Updated Columns:"); // Debugging

      const updatedColumns = [...prevColumns];
      updatedColumns[columnIndex][skillIndex].checked =
        !updatedColumns[columnIndex][skillIndex].checked;
      console.log("Updated Columns:", updatedColumns); // Debugging

      return updatedColumns;
    });
  };

  return (
    <div className="flex flex-col w-full max-w-full overflow-hidden">
      {/* Navigation Section */}
      <div className="w-full rounded-xl mb-4">
        <Card className="relative w-full border border-[#004e5c] shadow-shadows-shadow-xs rounded-xl p-4 flex flex-col gap-4 [direction:rtl]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-5 right-5 h-9 w-9 p-2 bg-neutral-50 rounded-lg"
          >
            <XIcon className="h-5 w-5" />
          </Button>
          <CardContent className="p-0 flex flex-col gap-3">
            <div className="relative w-10 h-10">
              <Avatar className="w-10 h-10 border-[0.75px] border-solid border-[#00000014]">
                <AvatarImage src={messageData.avatarUrl} alt="User avatar" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <img
                className="absolute w-3.5 h-3.5 bottom-0 right-0"
                alt="Verified tick"
                src={messageData.verifiedIconUrl}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[#181d27] [font-family:'Ping_AR_+_LT-Bold',Helvetica]">
                  {messageData.author}
                </span>
                <span className="text-sm text-[#717680] [font-family:'Ping_AR_+_LT-Regular',Helvetica]">
                  {messageData.timeAgo}
                </span>
              </div>
              <p className="text-sm text-[#414651] [font-family:'Ping_AR_+_LT-Regular',Helvetica]">
                {messageData.content}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Section */}
      <div className="w-full max-w-full mb-4">
        <Card className="w-full flex flex-col gap-[18px] p-[18px] bg-white border border-[#d5d6d9] shadow-[0px_1px_2px_#0a0d120d] rounded-xl">
          <div className="flex flex-col items-start justify-center px-2 py-1 w-full bg-[#f7f7f7] rounded-lg">
            <div className="flex w-full items-center justify-start gap-2">
              <div className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-2xl text-labelsprimary tracking-[0]">
                بياناتي
              </div>
              <img
                className="w-[21.5px] h-[19.5px]"
                alt="Location icon"
                src="./trainer+/assets/group-30476.png"
              />
            </div>
          </div>

          <CardContent className="flex flex-wrap items-start justify-end gap-[18px] p-0">
            {userData.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center justify-end gap-3 p-2.5 bg-white rounded-lg border border-solid border-[#d0d5dd]"
              >
                <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#1f2a37] text-base tracking-[0] leading-[normal] [direction:rtl]">
                  {item.label}
                </div>
                {item.icon}
              </div>
            ))}

            <div className="inline-flex flex-col items-end gap-1.5">
              <div className="inline-flex items-center justify-end gap-2 px-3.5 py-2.5 bg-white rounded-lg overflow-hidden border border-solid border-[#d0d5dd] shadow-[0px_1px_2px_#1018280d]">
                <div className="inline-flex gap-2 items-center justify-end">
                  <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-gray-900 text-base text-left tracking-[0] leading-[normal] [direction:rtl]">
                    المدرسة : خالد بن الوليد
                  </div>
                  <Badge className="w-2.5 h-2.5 p-0 flex items-center justify-center bg-transparent">
                    <div className="w-2 h-2 bg-[#199491] rounded-full"></div>
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Notification Section */}
      <div className="w-full max-w-full mb-4">
        <Card className="flex flex-col w-full items-center justify-center gap-6 p-4 bg-white rounded-xl border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs">
          <div className="flex w-full h-[50px] items-center justify-between px-2 py-1 relative bg-[#199491] rounded-lg">
            <div className="inline-flex items-center gap-[272px] relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal] [direction:rtl]">
                التقارير
              </h2>
            </div>

            <div className="relative w-fit [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-white text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
              تم تقييم 4 من أصل 7
            </div>

            <Button
              variant="outline"
              className="flex w-[120px] items-center justify-center gap-1 px-3 py-2 bg-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
            >
              <span className="relative w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                حفظ
              </span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-[18px_24px] relative self-stretch w-full">
            {metricCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 relative"
              >
                <div className="relative w-[145px] mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 [direction:rtl]">
                  {card.title}
                </div>
                <Card className="flex w-[136px] h-9 items-center justify-center p-0 bg-[#f8f9fb] rounded-lg border border-solid border-[#d0d5dd]">
                  <CardContent className="flex items-center justify-center p-0 h-full">
                    <div className="relative w-fit [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#1f2a37] text-sm text-right tracking-[0] leading-[normal]">
                      {card.value}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* Review Section */}
      <Card className="w-full max-w-full mb-4 border border-[#d5d7da] rounded-xl">
        <CardContent className="p-0">
          {/* Header */}
          <Card className="flex w-full h-[50px] items-center justify-between px-4 py-2 bg-[#199491] rounded-t-xl border-none">
            <CardContent className="flex w-full justify-between items-center p-0">
              <h2 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl [direction:rtl]">
                انطباع الطالبات
              </h2>

              <Button
                variant="outline"
                className="h-9 w-[120px] bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
              >
                <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm [direction:rtl]">
                  حفظ
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Review Opinions */}
          <div className="px-5 py-4">
            <Tabs defaultValue="opinion-1" className="w-full">
              {/* Tabs List */}
              <TabsList className="w-full bg-[#ebedf0] rounded-lg p-0 h-auto">
                {opinions.map((opinion) => (
                  <TabsTrigger
                    key={opinion.id}
                    value={`opinion-${opinion.id}`}
                    className={`flex items-center justify-between w-full p-3 h-[42px] data-[state=active]:bg-[#ebedf0] data-[state=inactive]:bg-[#f9f9f9] rounded-lg`}
                  >
                    <div className="flex items-center justify-end w-full gap-4">
                      <MinusCircleIcon className="w-6 h-6" />
                      <div className="flex items-start justify-end flex-1">
                        <div className="flex w-full gap-6 items-center justify-end">
                          <div className="flex-col w-full items-end gap-2 flex">
                            <div
                              className={`w-fit [font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold ${
                                opinion.active ? "text-black" : "text-[#414651]"
                              } text-base leading-normal [direction:rtl]`}
                            >
                              {opinion.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {opinions.map((opinion) => (
                <TabsContent
                  key={`content-${opinion.id}`}
                  value={`opinion-${opinion.id}`}
                >
                  <div className="flex flex-col w-full items-end gap-1.5 mt-4">
                    <Textarea
                      className="h-[70px] w-full border border-[#d5d6d9] rounded-lg shadow-shadows-shadow-xs [direction:rtl]"
                      placeholder="اكتب هنا"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </CardContent>
      </Card>
      {/* Summary and User Info Section */}
      <Card className="w-full max-w-full mb-4 border border-[#d5d7da] rounded-xl">
        <CardContent className="p-0">
          {/* Header */}
          <Card className="flex w-full h-[50px] items-center justify-between px-4 py-2 bg-[#199491] rounded-t-xl border-none">
            <CardContent className="flex w-full items-center justify-between p-0">
              <div className="flex items-end gap-2 [direction:rtl]">
                <div className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-white text-2xl">
                  المهارات
                </div>
                <div className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-white text-xs">
                  8 مهارات مختارة
                </div>
              </div>

              <Button
                variant="outline"
                className="h-9 w-[120px] bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
              >
                <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm [direction:rtl]">
                  حفظ
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Skills Checklist */}
          <div className="flex justify-end gap-6 py-4 px-3 rtl">
            {skillsColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col w-full max-w-[275px] items-end gap-4"
              >
                {column.map((skill, skillIndex) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-end gap-2 w-full"
                  >
                    <span className="font-medium text-sm text-right whitespace-normal [direction:rtl] [font-family:'Ping_AR_+_LT-Medium',Helvetica]">
                      {skill.label}
                    </span>
                    <div className="flex items-center justify-center">
                      <Checkbox
                        className="w-4 h-4 rounded border border-solid border-[#199491] data-[state=checked]:bg-[#199491]"
                        checked={skill.checked} // Bind the checked state
                        onCheckedChange={() =>
                          handleCheckboxChange(columnIndex, skillIndex)
                        } // Call the handler
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Bottom Action Button */}
      <div className="w-full max-w-full flex justify-center">
        <Button className="w-full bg-[#0c8599] text-white hover:bg-[#0a7285]">
          حفظ وإرسال
        </Button>
      </div>
    </div>
  );
};

export default TrainerProfile;
