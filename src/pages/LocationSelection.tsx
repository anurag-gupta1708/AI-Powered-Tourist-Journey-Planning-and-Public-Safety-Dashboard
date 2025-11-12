import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mountain, Waves, Landmark, Map, TreePine, Castle } from "lucide-react";

const locations = [
  "Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Hyderabad",
  "Jaipur", "Goa", "Kerala", "Shimla", "Manali", "Udaipur"
];

const filters = [
  { id: "mountains", label: "Mountains", icon: Mountain },
  { id: "beaches", label: "Beaches", icon: Waves },
  { id: "adventure", label: "Adventure", icon: Map },
  { id: "waterfall", label: "Waterfall", icon: TreePine },
  { id: "history", label: "History", icon: Landmark },
  { id: "heritage", label: "Heritage", icon: Castle },
];

export default function LocationSelection() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const handleContinue = () => {
    if (selectedLocation) {
      navigate("/date-selection", {
        state: { location: selectedLocation, filters: selectedFilters, mode: "ai-generate" }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-background to-coral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            ← Back
          </Button>

          <div className="glass-card p-8 rounded-2xl">
            <h1 className="text-4xl font-bold text-navy mb-2">Choose Your Destination</h1>
            <p className="text-muted-foreground mb-8">Select location and preferences for your trip</p>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a destination..." />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Filter by Interests (Optional)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {filters.map((filter) => {
                    const Icon = filter.icon;
                    const isSelected = selectedFilters.includes(filter.id);
                    return (
                      <Badge
                        key={filter.id}
                        variant={isSelected ? "default" : "outline"}
                        className={`cursor-pointer p-4 justify-start gap-2 text-sm transition-all ${
                          isSelected ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                        }`}
                        onClick={() => toggleFilter(filter.id)}
                      >
                        <Icon className="h-4 w-4" />
                        {filter.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              <Button
                onClick={handleContinue}
                disabled={!selectedLocation}
                className="w-full gradient-primary text-white h-12 text-lg"
              >
                Continue to Dates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
