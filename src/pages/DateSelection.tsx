import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function DateSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: destination, filters, mode } = location.state || {};

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleContinue = () => {
    if (startDate && endDate) {
      navigate("/itinerary-result", {
        state: {
          location: destination,
          filters,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          mode
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-background to-coral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            ← Back
          </Button>

          <div className="glass-card p-8 rounded-2xl">
            <h1 className="text-4xl font-bold text-navy mb-2">Select Travel Dates</h1>
            <p className="text-muted-foreground mb-8">
              Choose your trip start and end dates
            </p>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Trip Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Pick start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Trip End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Pick end date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) => !startDate || date <= startDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {destination && (
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm font-medium">Destination: {destination}</p>
                  {filters && filters.length > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Interests: {filters.join(", ")}
                    </p>
                  )}
                </div>
              )}

              <Button
                onClick={handleContinue}
                disabled={!startDate || !endDate}
                className="w-full gradient-primary text-white h-12 text-lg"
              >
                Generate Itinerary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
