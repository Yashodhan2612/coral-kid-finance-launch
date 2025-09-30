import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = ({ onJoinWaitlist }: { onJoinWaitlist: () => void }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
      
      {/* Ticker */}
      <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-primary">
          Designed and Backed by Stanford Professors
        </span>
      </div>

      {/* Main headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-4xl leading-tight animate-fade-in">
        Financial Literacy for Kids: Building{" "}
        <span className="text-primary">Smart Money Habits</span> Early
      </h1>

      {/* Sub-text */}
      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10 animate-fade-in">
        From saving and investing to making smart choices — give your child a headstart adults wish they had.
      </p>

      {/* CTA Button */}
      <Button
        size="lg"
        onClick={onJoinWaitlist}
        className="text-lg px-8 py-6 rounded-full bg-[var(--gradient-cta)] shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300 animate-fade-in"
      >
        Join the Waitlist
      </Button>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};
