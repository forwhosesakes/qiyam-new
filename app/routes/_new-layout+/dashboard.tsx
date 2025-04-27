import glossary from "~/lib/glossary";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import { getAuthenticated } from "~/lib/get-authenticated.server";
import { QUser } from "~/types/types";
import ProfileImage from "~/assets/images/profile.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./dashboard+/trainer+/assets/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "~/components/UI-dashbord/breadcrumb";
import { ChevronLeftIcon } from "lucide-react";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const user = await getAuthenticated({ request, context });
  if (user && (user as QUser).role === "admin") return Response.json(user);
  return redirect("/");
}

const Dashboard = () => {
  const user = useLoaderData<any>();
  const location = useLocation();
  const tabs = [
    {
      name: glossary.cp.registered,
      link: "users",
    },
    {
      name: glossary.cp.material,
      link: "material",
    },
    {
      name: glossary.cp.articles,
      link: "articles",
    },
    {
      name: glossary.cp.programs,
      link: "programs",
    },
  ];

  const selectedTabName = tabs.filter((tab) => {
    const path = location.pathname.split("/");
    return path.length >= 3 && tab.link === path[2];
  });

  const breadcrumbItems = [
    { label: "مركز المعرفة ", href: "#", active: true },
    { label: "حسابي", href: "#", active: false },
    { label: "الرئيسة", href: "#", active: false },
  ];

  return (
    <section  className="pt-12 md:pt-24 px-8  pb-36 lg:px-44 bg-section min-h-screen  ">
       <header className="w-full h-[135px]">
        <div className="absolute w-full h-[135px] top-[72px] left-0 bg-teal-600 z-10">
          <div className="relative flex justify-between w-9/12 h-[99px] mx-auto my-[18px] [direction:rtl]">
    
            <div className=" ">
              <h1 className="text-[40px]   font-bold text-white text-right mb-[6px]">
                حسابي
              </h1>

              <Breadcrumb className="flex justify-end">
                <BreadcrumbList className="flex-row-reverse">
                  {breadcrumbItems.map((item, index) => (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink
                        href={item.href}
                        className={`
                        inline-flex items-center pt-[16px] text-white
                        ${item.active ? "font-bold" : " font-normal"}
                        text-base leading-[22px] whitespace-nowrap 
                      `}
                      >
                        {index < breadcrumbItems.length - 1 && (
                          <ChevronLeftIcon className="w-5 h-5 text-white pl-1" />
                        )}
                        {item.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

       
            <div className="flex items-center top-[13px] left-0 gap-4 z-10">
              <div className="flex flex-col items-end gap-1.5 mr-4">
                <div className="font-bold text-base text-white mt-2">
                  نورة علي
                </div>
                <div className="[font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-sm text-white">
                  مدربة
                </div>
              </div>
              <div className="relative">
                <Avatar className="w-[66px] h-[66px] border border-solid border-[#d0d5dd] shadow-focus-ring-4px-primary-100 relative z-10">
                  <AvatarImage src="..//avatar.png" alt="نورة علي" />
                  <AvatarFallback>
                    <img
                      src={ProfileImage}
                      className="w-[66px] h-[66px]"
                      alt="profile"
                    />
                  </AvatarFallback>
                </Avatar>
                 <div className="absolute w-[19px] h-[19px] bottom-1 right-1 bg-success-500 rounded-lg border-[1.5px] border-solid border-[#ffffff] z-20" /> */}
               </div>
            </div>
          </div>
        </div> 
       </header>  
      <Outlet />
    </section>
  );
};

export default Dashboard;
