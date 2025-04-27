import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import materialDB from "~/db/material/material.server";

import { Button } from "./dashboard+/trainer+/assets/button";
import { NavFeaturedCard } from "./dashboard+/trainer+/NavFeatureCard";
import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { PlusCircleIcon } from "lucide-react";
import HorizontalTabs from "./dashboard+/admin+/horizontalTabs";
import rectangle22099 from "./supervisor+/assets/rectangle-22099.svg";

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

export const Trainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col w-full max-w-full overflow-hidden">
      {/* Full-width rectangle with 40px height */}
      <img alt="Rectangle" src={rectangle22099} className="mt-16"/>

      <Outlet />
    </div>
  );
};

export default Trainer;
