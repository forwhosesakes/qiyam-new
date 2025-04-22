import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { ratio?: number }
>(({ className, ratio = 16 / 9, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full", className)}
    style={{
      paddingBottom: `${(1 / ratio) * 100}%`,
      ...style,
    }}
    {...props}
  >
    <div className="absolute inset-0">{props.children}</div>
  </div>
));
AspectRatio.displayName = "AspectRatio";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export const HomeSectionFour = (): JSX.Element => {
  return (
    <Card className="fixed inset-0 w-full h-full border-0 overflow-hidden">
      <CardContent className="relative w-full h-full p-0">
        <div className="relative h-full">
          {/* Green radial gradient */}
          <div
            className="absolute w-[691px] h-[374px] top-[159px] right-0 -rotate-90 
            [background:radial-gradient(50%_50%_at_50%_100%,rgba(104,195,92,1)_0%,rgba(104,195,92,0)_96%)]"
            aria-hidden="true"
          />

          {/* Main image */}
          <AspectRatio ratio={1438 / 632} className="mt-[30px]">
            <img
              className="w-full h-full object-cover"
              alt="Promotional banner"
              src="/mask-group.png"
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeSectionFour;