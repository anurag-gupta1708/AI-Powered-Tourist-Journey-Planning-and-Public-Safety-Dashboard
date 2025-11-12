import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function ItineraryInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticket, mode } = location.state || {};

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [itineraryDetails, setItineraryDetails] = useState("");

  const handleSubmit = () => {
    if (startDate && endDate && itineraryDetails) {
      navigate("/itinerary-result", {
        state: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          itineraryDetails,
          ticket,
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
            <h1 className="text-4xl font-bold text-navy mb-2">Your Itinerary Details</h1>
            <p className="text-muted-foreground mb-8">
              Share your planned schedule with us
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

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Itinerary Details
                </label>
                <Textarea
                  placeholder="Describe your planned activities, places to visit, timings, etc.&#10;&#10;Example:&#10;Day 1: Arrive at Delhi, visit India Gate&#10;Day 2: Red Fort, Qutub Minar&#10;Day 3: Shopping at Connaught Place"
                  value={itineraryDetails}
                  onChange={(e) => setItineraryDetails(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!startDate || !endDate || !itineraryDetails}
                className="w-full gradient-primary text-white h-12 text-lg"
              >
                Get Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
