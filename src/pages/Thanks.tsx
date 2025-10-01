import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { CheckCircle2, ExternalLink, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Thanks = () => {
  useEffect(() => {
    document.title = "Thanks | Coral Kid Finance";
  }, []);
  const couponSteps = [
    { step: 1, text: "Log into your Coral Academy Account" },
    { step: 2, text: "Navigate to Settings -> Coupons, Passes & Referral section" },
    { step: 3, text: "Enter Coupon code in the field provided and click on Redeem." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--gradient-hero)]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-scale-in">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Thanks for Joining!
        </h1>
        <p className="text-xl text-muted-foreground mb-10 animate-fade-in">
          We'll reach out to you soon with curriculum updates and class details.
        </p>

        {/* CTA Card */}
        <div className="bg-card border border-border rounded-3xl p-8 mb-10 shadow-[var(--shadow-soft)] animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            Can't Wait to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6">
            In the meanwhile, try joining our Financial Literacy Weekly Class at Coral Academy.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-gradient-cta shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300"
            asChild
          >
            <a
              href="https://coralacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit Coral Academy
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Coupon Instructions */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-soft)] animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Tag className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">
              Use code <span className="text-primary font-bold">CORAL25</span> to get $40 worth of subscription for 1 week.
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-xl mx-auto">
            {couponSteps.map((item) => (
              <div key={item.step} className="flex-1 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-bold text-lg mb-3">
                  {item.step}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Follow us for updates and exciting classes for kids ages 8-13
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://twitter.com/coralacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/coralacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/coralacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Button variant="ghost" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
