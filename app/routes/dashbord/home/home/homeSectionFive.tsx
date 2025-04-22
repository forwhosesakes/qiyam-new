import { MessageCircleMoreIcon, ZapIcon } from "lucide-react";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utils";

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

// Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

// Main Component
export const HomeSectionFive = (): JSX.Element => {
  const volunteerPaths = [
    {
      id: 2,
      title: "ثانيا: مسار التعامل الإيجابي مع الخصائص النفسية",
      description:
        "يتضمن هذا المسار مجموعة من الأنشطة التي تمكن الفتاة من فهم ذاتها بشكل أعمق والتعرف على خصائصها النفسية والوعي بمرحلتها العمرية، والقيم التي يجب أن تستحضرها الفتاة وتعمل بها في ممارساتها وتعاملاتها",
      icon: <ZapIcon className="w-6 h-6" />,
    },
    {
      id: 1,
      title: "أولا: مسار المفاهيم الأساسية للعمل التطوعي",
      description:
        "يتضمن هذا المسار عددا من الأنشطة التي تحقق أهدافا متنوعة تعمل على تعزيز ثقافة العمل التطوعي لدى الفتاة، وتمكنها من ممارسة العمل التطوعي بوعي وإدراك.",
      icon: <ZapIcon className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "رابعا: مسار اكتشاف وتطوير الميول المهنية",
      description:
        "يشتمل المسار مجموعة من الأنشطة التي تمكن الفتاة من استكشاف ميولها التعليمي والأكاديمي، سواء لإكمال مرحلتها الثانوية أو لتحديد تخصصها الأكاديمي أو العملي في حياتها بشكل عام.",
      icon: <MessageCircleMoreIcon className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "ثالثا: مسار الأدوار الاجتماعية",
      description:
        "يتضمن هذا المسار أنشطة متنوعة تحقق لدى الفتاة معرفة بأدوارها الاجتماعية المختلفة، ويمكنها من التفاعل مع الأفراد والمجموعات بوعي وإيجابية.",
      icon: <ZapIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full min-h-screen">
    <div className="w-full min-h-screen bg-cover">
      <div className="flex flex-row mx-auto max-w-[1310px] py-9 px-4 h-full">
        {/* Left side with gradient background and images */}
        <div className="relative w-full max-w-[567px] h-[756px]">
          <div className="absolute w-[494px] h-[756px] top-0 left-0 rounded-[139px] [background:linear-gradient(114deg,rgba(104,195,92,1)_0%,rgba(53,146,103,1)_48%,rgba(0,97,115,1)_100%)]" />
  
          <img
            className="absolute w-[114px] h-[109px] top-[254px] left-[105px]"
            alt="Group"
            src="/Group 30543.png"
          />
  
          <img
            className="absolute w-[480px] h-[480px] top-[238px] left-[7px]"
            alt="Background pattern"
            src="/background-pattern-decorative.svg"
          />
  
          <div className="absolute w-[560px] h-[349px] top-[397px] left-[7px] bg-[url(/chatgpt-image-16-------2025--11-34-59---1.png)] bg-[100%_100%]" />
  
          <div className="absolute w-[83px] h-[102px] top-[310px] left-[366px] shadow-[0px_4px_4px_#00000040]">
            <div className="relative h-[102px]">
          
         
  
              <img
                className="absolute w-[63px] h-[60px] top-0 left-3.5"
                alt="Group"
                src="/Group 30547.png"
              />
            </div>
          </div>
  
          <img
            className="absolute w-[107px] h-[102px] top-[281px] left-[232px]"
            alt="Group"
            src="/Group (5).png"
          />
        </div>
  
        {/* Right side with content */}
        <div className="flex flex-col w-full max-w-[795px] items-center gap-[76px]">
          {/* Header section */}
          <div className="w-full flex flex-col items-start gap-8 px-8">
            <div className="w-full flex flex-col items-center gap-12">
              <div className="w-full max-w-screen-md flex flex-col items-center gap-5">
                <div className="w-full flex flex-col items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-neutral-50 border-[#e9e9eb] px-2.5 py-1 rounded-lg"
                  >
                    <span className="[font-family:'Ping_AR_+_LT-Medium',Helvetica] font-medium text-[#414651] text-sm leading-5 whitespace-nowrap text-center tracking-[0] [direction:rtl]">
                      المسارات
                    </span>
                  </Badge>
  
                  <h1 className="font-display-md-semibold   text-[#006173]  ">
                    مسارات الأنشطة والفرص التطوعية
                  </h1>
                </div>
              </div>
            </div>
          </div>
  
          {/* Cards grid */}
          <div className="w-full flex flex-col items-start gap-16 px-8">
            <div className="grid grid-cols-2 gap-6 w-full">
              {volunteerPaths.map((path) => (
                <div
                  key={path.id}
                  className="w-full h-full pt-[27px]" // Added h-full to make cards equal height
                >
                  <Card className="w-full h-full bg-neutral-50 rounded-2xl border-none flex flex-col "> {/* Added h-full and flex-col */}
                    <CardContent className="flex flex-col items-center gap-5 pt-0 pb-8 px-6 flex-1"> {/* Added flex-1 */}
                      <div className="relative self-stretch w-full h-6">
                        <div className="absolute w-12 h-12 -top-6 left-1/2 -translate-x-1/2 bg-white rounded-[10px] overflow-hidden border border-solid border-[#e9e9eb] shadow-shadows-shadow-xs-skeuomorphic flex items-center justify-center">
                          {path.icon}
                        </div>
                      </div>
  
                      <div className="flex flex-col items-center gap-2 w-full flex-1"> {/* Added flex-1 */}
                        <h3 className="[font-family:'Ping_AR_+_LT-Bold',Helvetica] font-bold text-[#181d27] text-xl leading-[30px] text-center tracking-[0] [direction:rtl]">
                          {path.title}
                        </h3>
                        <p className="[font-family:'Ping_AR_+_LT-Regular',Helvetica] font-normal text-[#535861] text-base text-justify tracking-[0] leading-6 [direction:rtl] flex-1"> {/* Added flex-1 */}
                          {path.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};