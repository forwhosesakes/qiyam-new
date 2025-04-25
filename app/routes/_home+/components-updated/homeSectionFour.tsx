import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import maskgroup from "../assets/images/new-design/Mask group (1).png"
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio: number;
}

function AspectRatio({
  ratio,
  className,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <div style={{ paddingBottom: `${100 / ratio}%` }} />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-lg border bg-card text-card-foreground", className)}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export const HomeSectionFour = (): JSX.Element => {
  return (
    <Card className="w-full h-screen border-0 " >
      <CardContent className="relative w-full h-full m-auto p-0">
        <div className="relative h-full">
          {/* Green radial gradient */}
          <div
            className="absolute w-[691px] h-[374px] top-[159px] "
            aria-hidden="true"
          />

          {/* Main image */}
          <AspectRatio ratio={1438 / 632} className="mt-[30px]">
            <img
              className="w-full h-full object-cover"
              alt="Promotional banner"
            
              src={maskgroup}
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
};