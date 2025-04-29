import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useNavigate, useLocation } from "@remix-run/react";

export const HorizontalTabs = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the active tab from the URL path
  const getActiveTabFromPath = () => {
    const pathParts = location.pathname.split("/");
    return pathParts[pathParts.length - 1]; // Get the last part of the path
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());

  useEffect(() => {
    // Update activeTab when the URL changes
    setActiveTab(getActiveTabFromPath());
  }, [location.pathname]);

  const tabItems = [
    { id: "infoCenter", label: "مركز المعرفة" },
    { id: "settings", label: "إعدادات النظام" },
    { id: "controlpanel", label: "لوحة التحكم" },
    { id: "admins", label: "المشرفين" },
    { id: "users", label: "الأعضاء" },
  ];

  return (
    <Tabs
      defaultValue={activeTab}
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
            className={`flex-1 h-11 rounded-md [direction:rtl] font-bold text-base leading-6 ${
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
