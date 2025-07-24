import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight } from "lucide-react";

const DescribePage = () => {
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [businessName, setBusinessName] = useState("");

  const generateMessage = () => {
    return `Hi Mavidaa! I need a ${businessType} video ad for my business "${businessName}". Here's what I want: ${description}. My budget is around ${budget}. Please send me a custom quote and timeline!`;
  };

  const isFormValid = businessType && description && businessName && budget;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6">
            Describe Your Dream Video Ad
            <span className="text-accent block">Get a Custom Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground font-roboto">
            Tell us about your business and vision—we'll send you a personalized quote via WhatsApp in minutes!
          </p>
        </div>

        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-3xl font-bebas text-center">Get Your Custom Quote</CardTitle>
            <p className="text-center text-muted-foreground">
              Fill out the form below and we'll send you a detailed quote via WhatsApp
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Business Name */}
            <div>
              <Label htmlFor="businessName" className="text-lg font-semibold">
                Business Name *
              </Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-2"
              />
            </div>

            {/* Business Type */}
            <div>
              <Label htmlFor="businessType" className="text-lg font-semibold">
                What's your business type? *
              </Label>
              <Select value={businessType} onValueChange={setBusinessType}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce / Online Store</SelectItem>
                  <SelectItem value="realestate">Real Estate</SelectItem>
                  <SelectItem value="fitness">Fitness / Gym</SelectItem>
                  <SelectItem value="restaurant">Restaurant / Food Service</SelectItem>
                  <SelectItem value="beauty">Beauty / Salon</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="healthcare">Healthcare / Medical</SelectItem>
                  <SelectItem value="education">Education / Training</SelectItem>
                  <SelectItem value="professional">Professional Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget Range */}
            <div>
              <Label htmlFor="budget" className="text-lg font-semibold">
                What's your budget range? *
              </Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$500-$1,000">$500 - $1,000</SelectItem>
                  <SelectItem value="$1,000-$2,500">$1,000 - $2,500</SelectItem>
                  <SelectItem value="$2,500-$5,000">$2,500 - $5,000</SelectItem>
                  <SelectItem value="$5,000+">$5,000+</SelectItem>
                  <SelectItem value="Not sure">Not sure - need guidance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Video Description */}
            <div>
              <Label htmlFor="description" className="text-lg font-semibold">
                Describe your ideal video ad *
              </Label>
              <p className="text-sm text-muted-foreground mb-2">
                Be specific! Examples: "30-second Instagram ad for my gym showing before/after transformations" or "TikTok-style ad for my restaurant featuring our signature dish"
              </p>
              <Textarea
                id="description"
                placeholder="Example: I want a 30-second Facebook ad for my online jewelry store. It should show close-ups of our diamond rings with elegant music. Target audience is engaged women 25-40. Need it to feel luxurious and trustworthy..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="mt-2"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              {isFormValid ? (
                <WhatsAppButton 
                  message={generateMessage()}
                  variant="urgent"
                  className="w-full h-14"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Get My Custom Quote on WhatsApp Now
                </WhatsAppButton>
              ) : (
                <Button disabled className="w-full h-14" size="lg">
                  <ArrowRight className="mr-2 h-6 w-6" />
                  Fill out all fields to continue
                </Button>
              )}
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                We'll send you a detailed quote within 30 minutes during business hours
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">24h</span>
              </div>
              <h3 className="font-bebas text-lg mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground text-sm">Most videos ready in 24-48 hours</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">∞</span>
              </div>
              <h3 className="font-bebas text-lg mb-2">Unlimited Revisions</h3>
              <p className="text-muted-foreground text-sm">We work until you're 100% happy</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">$</span>
              </div>
              <h3 className="font-bebas text-lg mb-2">Money-Back Guarantee</h3>
              <p className="text-muted-foreground text-sm">100% refund if not satisfied</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DescribePage;