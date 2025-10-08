import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { CheckCircle2, Tag, Facebook, Instagram, Globe, Clock, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Thanks = () => {
  useEffect(() => {
    document.title = "Thanks | Coral Kid Finance";
  }, []);
  const couponSteps = [
    { 
      step: 1, 
      text: "Log into ", 
      link: "www.coralacademy.com",
      url: "https://www.coralacademy.com"
    },
    { step: 2, text: "Navigate to Settings -> Coupons, Passes & Referral section" },
    { step: 3, text: "Enter Coupon code in the field provided and click on Redeem." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-[var(--gradient-hero)]">
      <div className="max-w-2xl mx-auto text-center w-full">
        {/* Success Icon */}
        <div className="mb-6 md:mb-8 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 animate-scale-in">
          <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">
          Thanks for Joining!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 animate-fade-in px-2">
          We'll reach out to you soon with curriculum updates and class details.
        </p>

        {/* Classes Carousel */}
        <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-10 shadow-[var(--shadow-soft)] animate-fade-in">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            START LEARNING TODAY
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 px-2">
            Discover interactive, engaging online classes for kids in just a click
          </p>
          
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full relative px-0 md:px-16"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  title: "Financial Literacy Basics",
                  teacher: "Teacher Amalia",
                  color: "bg-gradient-to-br from-green-100 to-blue-100"
                },
                {
                  title: "Smart Saving Strategies",
                  teacher: "Teacher Jordan",
                  color: "bg-gradient-to-br from-yellow-100 to-orange-100"
                },
                {
                  title: "Understanding Money Value",
                  teacher: "Teacher Sarah",
                  color: "bg-gradient-to-br from-purple-100 to-pink-100"
                },
                {
                  title: "Investment for Kids",
                  teacher: "Teacher Mike",
                  color: "bg-gradient-to-br from-blue-100 to-cyan-100"
                },
              ].map((classItem, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      {/* Placeholder Image */}
                      <div className={`h-40 ${classItem.color} flex items-center justify-center`}>
                        <div className="text-center px-4">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/50 flex items-center justify-center">
                            <span className="text-2xl">💰</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-5">
                        <h3 className="font-semibold text-lg mb-3 line-clamp-2 min-h-[56px]">
                          {classItem.title}
                        </h3>
                        
                        {/* Teacher Info */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-xs">👤</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{classItem.teacher}</span>
                        </div>
                        
                        {/* CTA */}
                        <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                          TRY FOR FREE
                        </Button>
                        
                        {/* Class Details */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>50m</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>1/week</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>8 - 13</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          <Button
            size="lg"
            className="mt-6 md:mt-8 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-full bg-gradient-cta shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300 w-full md:w-auto"
            asChild
          >
            <a
              href="https://www.coralacademy.com/browse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              Visit Coral Academy
            </a>
          </Button>
        </div>

        {/* Coupon Instructions */}
        <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[var(--shadow-soft)] animate-fade-in">
          <div className="flex items-start justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Tag className="w-4 h-4 md:w-5 md:h-5 text-accent mt-1 flex-shrink-0" />
            <h3 className="text-base md:text-lg font-semibold text-left md:text-center">
              Use code <span className="text-primary font-bold">CORAL25</span> to get $40 worth of subscription for 1 FREE week.
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 max-w-xl mx-auto">
            {couponSteps.map((item) => (
              <div key={item.step} className="w-full md:flex-1 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 text-accent font-bold text-base md:text-lg mb-2 md:mb-3">
                  {item.step}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {item.text}
                  {item.link && (
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-words"
                    >
                      {item.link}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
          <p className="text-xs md:text-sm text-muted-foreground mb-4 px-2">
            Follow us for updates and exciting classes for kids ages 8-13
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="https://facebook.com/coralacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/coralacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.coralacademy.com/class/financial-literacy-for-future-leaders-dea7aae1-5ce7-4e02-8c20-a73d62a061ac?referrer_id=4139f46a-3237-4ddd-9749-2a0ed8e282f4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Coral Academy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
