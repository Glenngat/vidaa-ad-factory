import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Shield } from "lucide-react";

const SamplePage = () => {
  const sampleMessage = "Hi Mavidaa! I want to order a custom sample video for $97. Please send me the payment details and I'll describe my requirements!";

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6">
            Get Your Custom Sample Video
            <span className="text-accent block">For Just $97</span>
          </h1>
          <p className="text-xl text-muted-foreground font-roboto mb-8">
            See exactly what we can do for your business—then apply this fee to your full order!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              $97 Applied to Full Order
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <CheckCircle className="mr-2 h-4 w-4" />
              24-Hour Delivery
            </Badge>
          </div>
        </div>

        {/* Main Offer Card */}
        <Card className="card-shadow mb-12">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bebas">Sample Package Includes:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Custom 30-Second Video</h3>
                    <p className="text-muted-foreground text-sm">Tailored specifically to your business and target audience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Professional Voiceover</h3>
                    <p className="text-muted-foreground text-sm">High-quality voice talent that matches your brand</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Music & Sound Effects</h3>
                    <p className="text-muted-foreground text-sm">Licensed background music and professional audio</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">1 Round of Revisions</h3>
                    <p className="text-muted-foreground text-sm">Make changes until you're 100% satisfied</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Multiple Format Exports</h3>
                    <p className="text-muted-foreground text-sm">Perfect for Facebook, Instagram, TikTok, YouTube</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Conversion Strategy Report</h3>
                    <p className="text-muted-foreground text-sm">Tips on how to maximize your ad performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bebas mb-2">Total Value: $497</h3>
                <p className="text-3xl font-bebas text-accent mb-2">Your Price: $97</p>
                <p className="text-muted-foreground text-sm">
                  * This fee is 100% applied to your full video package when you upgrade
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Pay for Samples? */}
        <Card className="card-shadow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bebas text-center">Why Do We Charge for Samples?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Every Video is Custom-Made</h4>
                <p className="text-muted-foreground text-sm">
                  We don't use templates or generic demos. Each sample is created specifically for your business with real strategy and effort.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Serious Buyers Only</h4>
                <p className="text-muted-foreground text-sm">
                  This small investment ensures you're committed to growing your business with video ads.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Risk-Free Guarantee</h4>
                <p className="text-muted-foreground text-sm">
                  If you're not completely satisfied, we'll refund your $97—no questions asked.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h2 className="text-3xl font-bebas mb-4">Ready to See What We Can Do?</h2>
            <p className="text-muted-foreground mb-6 font-roboto">
              Click below to get started. We'll send you payment details and a quick form to describe your sample video.
            </p>
            
            <WhatsAppButton 
              message={sampleMessage}
              variant="urgent"
              className="mb-4"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Pay $97 & Describe My Sample
            </WhatsAppButton>
            
            <p className="text-sm text-muted-foreground">
              Sample ready in 24 hours • $97 applied to full order • 100% money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;