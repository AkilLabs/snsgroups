import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Section3 from "./components/Section3";
import { useEffect, useState } from "react";

// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
  // Define state with type annotation
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR errors

    const mediaQuery = window.matchMedia("(max-width: 550px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Event listener for media query changes
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isMobile ? <Section3 /> : <Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
