import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function TicketUpload() {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [itineraryType, setItineraryType] = useState<"fixed" | "flexible" | "">("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleContinue = () => {
    if (uploadedFile && itineraryType) {
      if (itineraryType === "fixed") {
        navigate("/itinerary-input", {
          state: { ticket: uploadedFile.name, mode: "ticket-fixed" }
        });
      } else {
        navigate("/date-selection", {
          state: { ticket: uploadedFile.name, mode: "ticket-flexible" }
        });
      }
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
            <h1 className="text-4xl font-bold text-navy mb-2">Upload Travel Ticket</h1>
            <p className="text-muted-foreground mb-8">
              Upload your flight, train, or bus ticket
            </p>

            <div className="space-y-6">
              <Card className="border-2 border-dashed border-border hover:border-primary transition-colors">
                <label className="flex flex-col items-center justify-center p-12 cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                  />
                  {uploadedFile ? (
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground mt-2">Click to change</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="font-medium">Click to upload ticket</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Supports images and PDF files
                      </p>
                    </div>
                  )}
                </label>
              </Card>

              {uploadedFile && (
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Is your itinerary already planned?
                  </label>
                  <RadioGroup value={itineraryType} onValueChange={(value: any) => setItineraryType(value)}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label htmlFor="fixed" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium">Yes, I have a fixed itinerary</p>
                          <p className="text-sm text-muted-foreground">
                            I'll provide my planned schedule
                          </p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value="flexible" id="flexible" />
                      <Label htmlFor="flexible" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium">No, help me plan with AI</p>
                          <p className="text-sm text-muted-foreground">
                            Get AI-powered recommendations
                          </p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <Button
                onClick={handleContinue}
                disabled={!uploadedFile || !itineraryType}
                className="w-full gradient-primary text-white h-12 text-lg"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
