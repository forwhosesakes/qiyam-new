import { type ClassValue, clsx } from "clsx";
import { PlusIcon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

// Utils function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button Component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outline" | "default";
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" ? "bg-[#1c81ac] text-white hover:bg-[#1c81ac]/90" : "",
        variant === "outline" ? "border border-[#d5d6d9] bg-white" : "",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Input Component
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Label Component
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
});
Label.displayName = "Label";

// Card Component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Form field data
const formFields = [
  {
    id: "fullName",
    label: "الاسم الرباعي",
    value: "خالد محمد المسلم",
    required: true,
  },
  {
    id: "administration",
    label: "الإدارة",
    value: "إدارة تعليم",
    required: true,
  },
  {
    id: "school",
    label: "المدرسة",
    value: "المدرسة",
    required: true,
  },
  {
    id: "hours",
    label: "الساعات",
    value: "الساعات",
    required: true,
    width: "w-[106px]",
  },
];

// Main Component
export default function User4(): JSX.Element {
  return (
    <Card className="flex flex-col w-full max-w-[860px] items-start gap-[46px] p-[18px] bg-white rounded-xl border border-solid border-[#d5d6d9]">
      <div className="flex flex-col gap-5 w-full">
        {/* New Certificate Button */}
        <Button
          variant="outline"
          className="flex items-center justify-center gap-1 px-3 py-2 w-[154px] bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
            شهادة جديدة
          </span>
        </Button>

        {/* Form Fields */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex items-start justify-end gap-[18px] w-full">
            {formFields.map((field) => (
              <div
                key={field.id}
                className={`flex flex-col items-center gap-1.5 self-stretch ${
                  field.width || "flex-1"
                }`}
              >
                <div className="flex flex-col items-end gap-1.5 self-stretch w-full">
                  <div className="inline-flex items-start gap-0.5">
                    <Label
                      htmlFor={field.id}
                      className="mt-[-1.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]"
                    >
                      {field.label}
                    </Label>
                    {field.required && (
                      <span className="mt-[-1.00px] text-x-1c-8-1ac">*</span>
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-2 px-3.5 py-2.5 w-full bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs">
                    <div className="flex items-center justify-end gap-2 flex-1">
                      <Input
                        id={field.id}
                        defaultValue={field.value}
                        className="border-none shadow-none p-0 h-auto mt-[-1.00px] [font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#717680] text-base tracking-[0] leading-6 [direction:rtl]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Export Certificates Button */}
      <Button className="w-full bg-[#1c81ac] text-white hover:bg-[#1c81ac]/90">
        <span className="flex items-center justify-center gap-2">
          <img
            src="/buttons-button.svg"
            alt="Export icon"
            className="w-5 h-5"
          />
          تصدير الشهادات
        </span>
      </Button>
    </Card>
  );
}