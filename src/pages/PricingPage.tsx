import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, MessageCircle, Clock, Users } from "lucide-react";

const PricingPage = () => {
  const basicMessage = "Hi Mavidaa! I'm interested in your Basic Video Ads package starting from $497. Can you send me more details and availability?";
  const premiumMessage = "Hi Mavidaa! I want to discuss your Premium Custom Video packages. I need something more advanced than the basic package. Please send me options and pricing!";

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6">
            Professional Video Ads
            <span className="text-accent block">That Actually Convert</span>
          </h1>
          <p className="text-xl text-muted-foreground font-roboto mb-8">
            Choose the package that fits your business needs—all with our money-back guarantee
          </p>
          
          <div className="inline-flex items-center bg-urgent text-urgent-foreground px-6 py-3 rounded-full animate-pulse mb-8">
            <Clock className="mr-2 h-5 w-5" />
            <span className="font-bebas text-lg">Limited Slots Available This Month!</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Basic Package */}
          <Card className="card-shadow relative">
            <CardHeader className="text-center pb-4">
              <Badge className="w-fit mx-auto mb-4" variant="secondary">
                Most Popular
              </Badge>
              <CardTitle className="text-3xl font-bebas">Basic Video Ads</CardTitle>
              <p className="text-muted-foreground">Perfect for small businesses & startups</p>
              <div className="mt-4">
                <span className="text-4xl font-bebas text-accent">From $497</span>
                <p className="text-sm text-muted-foreground">*Price varies by complexity</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>15-30 second video ad</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Professional voiceover</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Licensed music & sound effects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>2 rounds of revisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Multiple format exports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>24-48 hour delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Performance optimization tips</span>
                </div>
              </div>
              
              <div className="pt-6">
                <WhatsAppButton 
                  message={basicMessage}
                  variant="primary"
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Basic Package Details
                </WhatsAppButton>
              </div>
            </CardContent>
          </Card>

          {/* Premium Package */}
          <Card className="card-shadow relative border-accent">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-accent text-secondary-foreground px-6 py-2">
                <Star className="mr-1 h-4 w-4" />
                Premium Choice
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-3xl font-bebas">Premium Custom Videos</CardTitle>
              <p className="text-muted-foreground">For serious businesses ready to scale</p>
              <div className="mt-4">
                <span className="text-4xl font-bebas text-accent">Custom Quote</span>
                <p className="text-sm text-muted-foreground">Tailored to your specific needs</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>30-90 second video ads</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Premium talent & actors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Custom script writing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Advanced animations & effects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Unlimited revisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>A/B testing variants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Dedicated project manager</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Ad campaign strategy consultation</span>
                </div>
              </div>
              
              <div className="pt-6">
                <WhatsAppButton 
                  message={premiumMessage}
                  variant="gold"
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Premium Quote
                </WhatsAppButton>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantees */}
        <div className="bg-card rounded-2xl p-8 card-shadow mb-12">
          <h2 className="text-3xl font-bebas text-center mb-8">Our Iron-Clad Guarantees</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-bebas text-xl mb-2">100% Money-Back</h3>
              <p className="text-muted-foreground">If you're not completely satisfied, we'll refund every penny—no questions asked.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-bebas text-xl mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">We deliver on time, every time. Late delivery = 50% refund automatically.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-bebas text-xl mb-2">Results Guarantee</h3>
              <p className="text-muted-foreground">If your ad doesn't outperform your current ads within 30 days, we'll create a new one free.</p>
            </div>
          </div>
        </div>

        {/* Scarcity CTA */}
        <div className="text-center bg-urgent/10 rounded-2xl p-8 border border-urgent">
          <h2 className="text-3xl font-bebas mb-4 text-urgent">Only 5 Slots Left This Month!</h2>
          <p className="text-muted-foreground mb-6 font-roboto">
            We limit our monthly projects to ensure quality. Don't miss out on getting your video ads this month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              message={basicMessage}
              variant="urgent"
            >
              Secure My Basic Package Slot
            </WhatsAppButton>
            <WhatsAppButton 
              message={premiumMessage}
              variant="gold"
            >
              Secure My Premium Package Slot
            </WhatsAppButton>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Next available slots: Next month • Message us to reserve your spot
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;