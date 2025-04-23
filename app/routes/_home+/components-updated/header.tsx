import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// Utils function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Badge component
const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props} />;
});
Badge.displayName = "Badge";

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Header component
export const Header = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-screen-xl w-full items-center gap-8 px-8 py-0 mx-auto">
      <div className="flex flex-col gap-12 self-stretch w-full items-center">
        <div className="flex flex-col max-w-screen-lg items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-4 self-stretch w-full">
            <div className="inline-flex items-center gap-3 pl-1 pr-2.5 py-1 bg-white rounded-[10px] border-[#d5d6d9] shadow-shadows-shadow-xs border border-solid">
              <div className="inline-flex gap-1 items-center">
                <span className=" font-medium text-[#414651] text-sm   tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  برنامج التكمين التطوعي للبنات
                </span>
              </div>

              <Badge className="gap-1.5 px-2 py-0.5 bg-[#68c35c1f] text-[#006173] rounded-md border-[#539c4a57] border border-solid">
                <span className="  font-medium text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  مميزات جديدة
                </span>
                <div className="relative w-2 h-2">
                  <div className="relative w-3 h-3 -top-0.5 -left-0.5 bg-[#00ae84] rounded-md border-[3px] border-solid border-[#f4ebff]" />
                </div>
              </Badge>
            </div>

            <h1 className="self-stretch font-display-xl-semibold  text-[#181d27]   text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] [direction:rtl] [font-style:var(--display-xl-semibold-font-style)]">
              برنامج التمكين التطوعي للطالبات
            </h1>
          </div>

          <p className="  font-normal text-[#535861] text-xl text-center tracking-[0] leading-[30px] [direction:rtl]">
            برنامج نوعي على مستوى المملكة موجه للفتيات، لتمكينهن من تحصيل
            الساعات التطوعية  <br/>المحددة لهن كمتطلب تخرج من التعليم العام
          </p>
        </div>

        <div className="inline-flex items-start gap-3">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-[22px] py-4 bg-white rounded-[10px] border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
          >
            <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-lg text-left tracking-[0] leading-7 whitespace-nowrap [direction:rtl]">
              للمزيد
            </span>
          </Button>

          <Button className="flex items-center justify-center px-[22px] py-4 bg-[#006173] text-white rounded-[10px]">
            <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-lg text-left tracking-[0] leading-7 whitespace-nowrap [direction:rtl]">
              للتسجيل
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};