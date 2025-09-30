import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Curriculum } from "@/components/Curriculum";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSuccess = () => {
    navigate("/thanks");
  };

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
