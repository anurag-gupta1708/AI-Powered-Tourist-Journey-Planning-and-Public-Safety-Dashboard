import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocationSelection from "./pages/LocationSelection";
import DateSelection from "./pages/DateSelection";
import TicketUpload from "./pages/TicketUpload";
import ItineraryInput from "./pages/ItineraryInput";
import ItineraryResult from "./pages/ItineraryResult";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/location-selection" element={<LocationSelection />} />
          <Route path="/date-selection" element={<DateSelection />} />
          <Route path="/ticket-upload" element={<TicketUpload />} />
          <Route path="/itinerary-input" element={<ItineraryInput />} />
          <Route path="/itinerary-result" element={<ItineraryResult />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
