import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, TrendingUp, PiggyBank, Target } from "lucide-react";

const curriculumData = [
  {
    week: "Week 1",
    title: "Understanding Money & Its Value",
    description: "Introduction to what money is, how it works, and why it matters in everyday life.",
    icon: BookOpen,
  },
  {
    week: "Week 2",
    title: "Smart Saving Strategies",
    description: "Learn the importance of saving, setting goals, and building healthy financial habits early.",
    icon: PiggyBank,
  },
  {
    week: "Week 3",
    title: "Introduction to Investing",
    description: "Simple concepts of growing money through investments and understanding risk vs reward.",
    icon: TrendingUp,
  },
  {
    week: "Week 4",
    title: "Making Smart Financial Choices",
    description: "Critical thinking about spending, needs vs. wants, and planning for the future.",
    icon: Target,
  },
];

export const Curriculum = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          1-Month Sample Curriculum
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          A structured, engaging journey through essential financial concepts designed specifically for young minds.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {curriculumData.map((item, index) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary mb-1">
                        {item.week}
                      </div>
                      <div className="text-base md:text-lg font-semibold">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 pl-16 pr-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
