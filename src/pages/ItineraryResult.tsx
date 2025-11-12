import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Utensils, Hotel, Download, Share2 } from "lucide-react";
import { format } from "date-fns";

export default function ItineraryResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: destination, filters, startDate, endDate, mode, itineraryDetails } = location.state || {};

  const start = startDate ? new Date(startDate) : new Date();
  const end = endDate ? new Date(endDate) : new Date();

  // Mock AI-generated itinerary data
  const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  const mockItinerary = Array.from({ length: daysCount }, (_, i) => ({
    day: i + 1,
    date: new Date(start.getTime() + i * 24 * 60 * 60 * 1000),
    activities: [
      { time: "09:00 AM", place: "Local Attraction", description: "Visit famous landmark" },
      { time: "01:00 PM", place: "Restaurant", description: "Lunch at local cuisine spot" },
      { time: "03:00 PM", place: "Cultural Site", description: "Explore heritage location" },
    ]
  }));

  const recommendations = {
    hotels: [
      { name: "Grand Heritage Hotel", rating: 4.5, price: "₹4,500/night", location: "City Center" },
      { name: "Comfort Inn", rating: 4.2, price: "₹3,200/night", location: "Near Airport" },
    ],
    restaurants: [
      { name: "Local Flavors", cuisine: "Traditional", rating: 4.7, price: "₹₹" },
      { name: "Spice Garden", cuisine: "Multi-cuisine", rating: 4.4, price: "₹₹₹" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-background to-coral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            ← Back to Home
          </Button>

          <div className="glass-card p-8 rounded-2xl mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-navy mb-2">Your Itinerary</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{destination || "Custom Trip"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(start, "MMM dd")} - {format(end, "MMM dd, yyyy")}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {itineraryDetails && (
              <div className="bg-accent/50 p-4 rounded-lg mb-6">
                <p className="text-sm font-medium mb-2">Your Planned Itinerary:</p>
                <p className="text-sm whitespace-pre-wrap">{itineraryDetails}</p>
              </div>
            )}

            <Separator className="my-6" />

            <div className="space-y-6">
              {mockItinerary.map((day) => (
                <Card key={day.day} className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">
                    Day {day.day} - {format(day.date, "EEEE, MMM dd")}
                  </h3>
                  <div className="space-y-4">
                    {day.activities.map((activity, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="text-sm font-medium text-muted-foreground min-w-[80px]">
                          {activity.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.place}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Hotel className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Recommended Hotels</h3>
              </div>
              <div className="space-y-4">
                {recommendations.hotels.map((hotel, idx) => (
                  <div key={idx} className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-medium">{hotel.name}</p>
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span>⭐ {hotel.rating}</span>
                      <span>{hotel.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{hotel.location}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Recommended Restaurants</h3>
              </div>
              <div className="space-y-4">
                {recommendations.restaurants.map((restaurant, idx) => (
                  <div key={idx} className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-medium">{restaurant.name}</p>
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span>{restaurant.cuisine}</span>
                      <span>⭐ {restaurant.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{restaurant.price}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
