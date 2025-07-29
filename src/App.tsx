
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireBotProject from "./pages/projects/FireBotProject";
import HexapodProject from "./pages/projects/HexapodProject";
import KukaProject from "./pages/projects/KukaProject";
import StereoVisionProject from "./pages/projects/StereoVisionProject";
import HybridImagesProject from "./pages/projects/HybridImagesProject";
import DeepLearningProject from "./pages/projects/DeepLearningProject";
import PierDesignProject from "./pages/projects/PierDesignProject";
import FlexibleFanProject from "./pages/projects/FlexibleFanProject";
import KneeProsthesisProject from "./pages/projects/KneeProsthesisProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/fire-bot" element={<FireBotProject />} />
          <Route path="/projects/hexapod" element={<HexapodProject />} />
          <Route path="/projects/kuka-trajectory" element={<KukaProject />} />
          <Route path="/projects/stereo-vision" element={<StereoVisionProject />} />
          <Route path="/projects/hybrid-images" element={<HybridImagesProject />} />
          <Route path="/projects/deep-learning" element={<DeepLearningProject />} />
          <Route path="/projects/pier-design" element={<PierDesignProject />} />
          <Route path="/projects/flexible-fan" element={<FlexibleFanProject />} />
          <Route path="/projects/knee-prosthesis" element={<KneeProsthesisProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
