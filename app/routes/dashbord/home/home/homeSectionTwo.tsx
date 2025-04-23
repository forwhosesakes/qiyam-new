import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  );
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
}

export default function HomeSectionTwo(): JSX.Element {
  return (
    <section
      className="flex flex-col w-full max-w-[1280px] items-center gap-[38px] relative rounded-3xl bg-cover bg-center m-auto mt-[90px]"
      // style={{ backgroundImage: "url(../frame-1261157952.png)" }}
    >
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full " >
        <div className="flex flex-col items-center gap-12 relative self-stretch w-full">
          <div className="flex flex-col max-w-screen-md items-center gap-5 relative w-full">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
              <Badge
                variant="outline"
                className="bg-neutral-50 border-[#e9e9eb] px-2.5 py-1"
              >
                <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm text-center tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                  عن البرنامج
                </span>
              </Badge>

              <h2 className="relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#181d27] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [direction:rtl] [font-style:var(--display-md-semibold-font-style)]">
                عن يانعة
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Card
        className="h-[413px] w-full rounded-[48px] p-0 border-none overflow-hidden "
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(0 78 92 / 90%) 0%, rgb(0 78 92 / 90%) 100%), url(../frame-1261157952.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardContent className="flex items-center justify-center gap-[135px] p-3 h-full">
          <img
            className="w-[379.2px] h-[369.39px]"
            alt="Yaneah Logo"
            src="/Group .png"
          />

          <div className="flex flex-col w-[702px] items-end gap-7">
            <img
              className="w-[156.99px] h-[74.44px]"
              alt="Yaneah Brand"
              src="/Groupyuaneaa.png"
            />

            <p className="w-[806px] ml-[-104.00px] [font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-white text-2xl text-justify tracking-[0] leading-[34px] [direction:rtl]">
              برنامج نوعي على مستوى المملكة موجه للفتيات، لتمكينهن من تحصيل
              الساعات التطوعية المحددة لهن كمتطلب تخرج من التعليم العام ،
              وتوجيههن لاستثمارهن فيما يعود عليهن بصقل شخصياتهن وخبراتهن،
              واكتساب المهارات الحياتية الأساسية التي تمكن الفتاة من الفاعلية
              والتأثير ومواجهة متطلبات الحياة ، وتعزيز القيم والسلوكيات
              الإيجابية لديهن، من خلال برامج تطوعية نوعية، وفريق إشراف تطوعي
              مؤهل في بيئات ملائمة تلبي متطلبات واحتياجات الفتاة في المرحلة
              الثانوية.
            </p>
          </div>
        </CardContent>
      </Card>



    </section>
  );
}