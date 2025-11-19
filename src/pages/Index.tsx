import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Curriculum } from "@/components/Curriculum";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      const elementPosition = formRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120; // Offset to keep Show More button visible
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleFormSuccess = () => {
    navigate("/thanks");
  };

  useEffect(() => {
    document.title = "Finance 101 | A Practical Playbook for Mastering Money";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero onJoinWaitlist={scrollToForm} />
      <Curriculum />
      <div ref={formRef}>
        <WaitlistForm onSuccess={handleFormSuccess} />
      </div>
    </div>
  );
};

export default Index;
