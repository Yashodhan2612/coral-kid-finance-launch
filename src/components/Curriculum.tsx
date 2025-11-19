import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, TrendingUp, PiggyBank, Target, DollarSign, ShoppingCart, CreditCard, Award, Calculator, LineChart, BarChart } from "lucide-react";

const curriculumData = [
  {
    week: "Topic 1",
    title: (
      <>
        The Story of Money – <span className="text-muted-foreground italic">The engine behind every economy</span>
      </>
    ),
    description: "From bartering to tapping digital screens, discover evolution of money and why money holds value. Learn why Prices rise and what leads to inflation.",
    icon: BookOpen,
  },
  {
    week: "Topic 2",
    title: (
      <>
        Macroeconomics – <span className="text-muted-foreground italic">How the US economy works</span>
      </>
    ),
    description: "Explore how economy functions: from GDP and Recession to Unemployment and nation debt. Discover what is GDP of US and how it grew over past few years.",
    icon: TrendingUp,
  },
  {
    week: "Topic 3",
    title: (
      <>
        Math Magic – <span className="text-muted-foreground italic">Why compounding is the 8th wonder</span>
      </>
    ),
    description: "Learn how percentages, simple interest, and compound interest work through fun, real-life money examples. Understand why compounding grows money faster over time and why starting early makes a big difference.",
    icon: Calculator,
  },
  {
    week: "Topic 4",
    title: (
      <>
        Personal Finances – <span className="text-muted-foreground italic">How to plan like a pro</span>
      </>
    ),
    description: "Learn to distinguish needs from wants, set realistic goals, and create simple budgets. Discover how small daily habits (like the \"Latte Effect\") can create meaningful impact.",
    icon: Target,
  },
  {
    week: "Topic 5",
    title: (
      <>
        Smart Spending & Opportunity Cost – <span className="text-muted-foreground italic">No such thing as free lunch</span>
      </>
    ),
    description: "Learn to spot true value by comparing prices, weighing trade-offs, and asking the key question: \"What am I giving up when I choose this?\"",
    icon: DollarSign,
  },
  {
    week: "Topic 6",
    title: (
      <>
        Student Loans & Mortgages – <span className="text-muted-foreground italic">How to borrow wisely</span>
      </>
    ),
    description: "Explore credit cards, student loans, and mortgages, learning how interest, repayment, and credit scores work.",
    icon: CreditCard,
  },
];

const additionalWeeksData: typeof curriculumData = [];

export const Curriculum = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Week-by-Week Curriculum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every concept is broken down into simple explanations and applied through relatable examples, decision-making exercises, and real life scenarios.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {curriculumData.map((item, index) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-300 animate-fade-in"
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
