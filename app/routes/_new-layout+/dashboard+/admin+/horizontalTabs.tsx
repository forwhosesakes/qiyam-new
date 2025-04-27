import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useNavigate } from "@remix-run/react";

export const HorizontalTabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("members");
  const navigate = useNavigate();

  const tabItems = [
    // { id: "dashboard", label: "لوحة التحكم" },
    { id: "infoCenter", label: "مركز المعرفة" },
    { id: "settings", label: "إعدادات النظام" },
    { id: "admins", label: "المشرفين" },
    { id: "users", label: "الأعضاء" },
    { id: "controlpanel", label: "لوحة التحكم" },
  ];

  return (
    <Tabs
      defaultValue="members"
      className="w-full mx-1 mt-[20px]"
      onValueChange={setActiveTab}
    >
      <TabsList className="flex w-full h-14 p-1.5 gap-1 bg-neutral-50 border border-solid border-[#e9e9eb] rounded-none">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              navigate(`/dashboard/admin/${tab.id}`);
            }}
            className={`flex-1 h-11 rounded-md [direction:rtl]   font-bold text-base leading-6 ${
              activeTab === tab.id
                ? "bg-[#68c35c] text-white shadow-shadows-shadow-sm"
                : "bg-transparent text-[#717680]"
            }`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default HorizontalTabs;
