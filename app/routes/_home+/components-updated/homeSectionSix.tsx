import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import section6Img from "../assets/images/new-design/تصاميم موقع يانعة واجهة 1.png"
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export const HomeSectionSix = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-screen-xl w-full items-start gap-8 px-8 py-0 m-auto">
      <div className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-5 w-full">
          <div className="flex flex-col items-center gap-3 w-full">
            <Badge
              variant="outline"
              className="bg-neutral-50 border-[#e9e9eb] rounded-lg px-2.5 py-1"
            >
              <span className="font-medium text-[#414651] text-sm text-center leading-5 whitespace-nowrap [direction:rtl]">
                المسارات
              </span>
            </Badge>

            <h1 className="font-display-md-semibold font-[700] text-[#006173] text-[36px] text-center tracking-[-0.72px] leading-[44px] [direction:rtl]">
              كيف يتقاطع البرنامج مع تحقيق رؤية المملكة 2030
            </h1>
          </div>
        </div>
      </div>
      <div>
        <img src={section6Img} alt="" />
      </div>
    </div>
  );
};

export default HomeSectionSix;