
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import LandingPage from "./pages/services/LandingPage";
import ShowcaseSite from "./pages/services/ShowcaseSite";
import InfoSite from "./pages/services/InfoSite";
import EcommerceSite from "./pages/services/EcommerceSite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/landing" element={<LandingPage />} />
          <Route path="/services/showcase" element={<ShowcaseSite />} />
          <Route path="/services/info" element={<InfoSite />} />
          <Route path="/services/ecommerce" element={<EcommerceSite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;