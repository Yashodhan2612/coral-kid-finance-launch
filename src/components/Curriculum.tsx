import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, TrendingUp, PiggyBank, Target, DollarSign, ShoppingCart, CreditCard, Award, Calculator, LineChart, BarChart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const curriculumData = [
  {
    week: "Week 1",
    title: (
      <>
        The Story of Money – <span className="text-muted-foreground italic">How It Works and Why It Matters</span>
      </>
    ),
    description: "From barter to digital payments, kids learn what money is, why it has value, and how it moves through the economy. They'll see how households, banks, and governments keep money flowing, and understand how prices and value change over time through concepts like inflation.",
    icon: BookOpen,
  },
  {
    week: "Week 2",
    title: (
      <>
        Macro Economics - <span className="text-muted-foreground italic">How the US economy works</span>
      </>
    ),
    description: "Kids explore how America's economy works — from GDP and national income to supply and demand. They'll see how growth, jobs, and unemployment rates shape everyday life and understand what makes a strong, balanced economy.",
    icon: TrendingUp,
  },
  {
    week: "Week 3",
    title: (
      <>
        Money Math - <span className="text-muted-foreground italic">How Numbers shape your future</span>
      </>
    ),
    description: "Every financial decision involves a bit of math. Learners calculate earnings, savings, and spending while exploring simple interest, compound growth, and percentages in real-life examples like discounts or taxes. Mini-projects help them track savings goals and estimate future earnings.",
    icon: Calculator,
  },
  {
    week: "Week 4",
    title: (
      <>
        Personal Finances - <span className="text-muted-foreground italic">How to plan like a pro</span>
      </>
    ),
    description: "Kids learn to tell the difference between needs and wants, set realistic goals, and build mini-budgets for the things they care about. Through fun scenarios, they discover how planning, saving, and small everyday habits (like the \"Latte Effect\") can lead to long-term independence and confidence with money.",
    icon: Target,
  },
];

const additionalWeeksData = [
  {
    week: "Week 5",
    title: (
      <>
        Smart Spending & Trade-Offs: <span className="text-muted-foreground italic">Making Choices That Count</span>
      </>
    ),
    description: "Kids learn that every purchase has a cost — not just in money, but in opportunity. They'll practice comparing unit prices, spotting real value, and understanding opportunity cost — realizing that spending on one thing often means giving up another. The goal is to think critically before spending and make thoughtful, balanced choices.",
    icon: DollarSign,
  },
  {
    week: "Week 6",
    title: (
      <>
        Student Loans & Mortgages: <span className="text-muted-foreground italic">How to Borrow Wisely</span>
      </>
    ),
    description: "Borrowing isn't bad — if you do it smartly. Kids explore credit cards, student loans, and mortgages, learning how interest, repayment, and credit work. They see how smart borrowing builds opportunities in education or home — and how poor choices can create long-term challenges.",
    icon: CreditCard,
  },
  {
    week: "Week 7",
    title: (
      <>
        Investing: <span className="text-muted-foreground italic">Making Your Money Work for You</span>
      </>
    ),
    description: "Why let money sleep in a piggy bank when it can grow? Kids discover how investing in stocks, mutual funds, and bonds helps savings multiply over time. They learn the power of compounding, how to balance risk and reward, and why starting early makes a big difference.",
    icon: LineChart,
  },
  {
    week: "Week 8",
    title: (
      <>
        Stock Market Basics: <span className="text-muted-foreground italic">Owning a Piece of a Company</span>
      </>
    ),
    description: "Kids learn what it means to invest in companies like Apple or Disney and become shareholders. They'll explore how stock prices rise and fall, what dividends are, and how diversifying investments keeps their money safer for the long run.",
    icon: BarChart,
  },
];

export const Curriculum = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Your Child's Financial Learning Roadmap
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          An <span className="text-primary">8 week</span> journey — from understanding money to investing and making smart financial choices.
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

        <div className={`overflow-hidden transition-all duration-500 ${showMore ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {additionalWeeksData.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
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

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowMore(!showMore)}
            className="group"
          >
            {showMore ? "Show Less" : "Show More"}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};
